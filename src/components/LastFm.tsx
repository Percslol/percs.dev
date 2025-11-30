import { css, type Component } from "dreamland/core";

type LastFmTrack = {
	name: string;
	artist: string;
	album: string | null;
	artUrl: string | null;
	url: string;
	nowPlaying: boolean;
	playedAt?: Date;
	playedAgo?: string;
};

type LastFmResponse = {
	name?: string;
	artist?: { "#text"?: string; name?: string } | string;
	album?: { "#text"?: string } | string;
	image?: Array<{ size?: string; "#text"?: string }>;
	url?: string;
	"@attr"?: { nowplaying?: string };
	date?: { uts?: string };
};

const RELATIVE_TIME_WINDOWS: Array<{
	limit: number;
	divisor: number;
	unit: Intl.RelativeTimeFormatUnit;
}> = [
	{ limit: 60, divisor: 1, unit: "second" },
	{ limit: 60 * 60, divisor: 60, unit: "minute" },
	{ limit: 60 * 60 * 24, divisor: 60 * 60, unit: "hour" },
	{ limit: 60 * 60 * 24 * 7, divisor: 60 * 60 * 24, unit: "day" },
	{ limit: 60 * 60 * 24 * 30, divisor: 60 * 60 * 24 * 7, unit: "week" },
	{ limit: 60 * 60 * 24 * 365, divisor: 60 * 60 * 24 * 30, unit: "month" },
	{
		limit: Number.POSITIVE_INFINITY,
		divisor: 60 * 60 * 24 * 365,
		unit: "year",
	},
];

const relativeFormatter = new Intl.RelativeTimeFormat("en", {
	numeric: "auto",
});

const formatRelativeTime = (date: Date): string => {
	const secondsFromNow = Math.round((date.getTime() - Date.now()) / 1000);
	const absoluteSeconds = Math.abs(secondsFromNow);
	for (const window of RELATIVE_TIME_WINDOWS) {
		if (absoluteSeconds < window.limit) {
			const value = Math.round(secondsFromNow / window.divisor);
			return value === 0
				? "just now"
				: relativeFormatter.format(value, window.unit);
		}
	}
	return date.toLocaleString(undefined, {
		month: "short",
		day: "numeric",
		year: "numeric",
	});
};

const selectArtwork = (
	images?: Array<{ size?: string; "#text"?: string }>
): string | null => {
	if (!images || images.length === 0) {
		return null;
	}
	const preferredSizes = ["extralarge", "large", "medium", "small"];
	for (const size of preferredSizes) {
		const match = images.find((image) => image.size === size && image["#text"]);
		if (match?.["#text"]) {
			return match["#text"];
		}
	}
	const fallback = images.find((image) => image["#text"]);
	return fallback?.["#text"] || null;
};

const getArtistName = (
	artist: { "#text"?: string; name?: string } | string | undefined
): string => {
	if (!artist) {
		return "Unknown artist";
	}
	if (typeof artist === "string") {
		return artist;
	}
	return artist.name ?? artist["#text"] ?? "Unknown artist";
};

const getAlbumName = (
	album: { "#text"?: string } | string | undefined
): string | null => {
	if (!album) {
		return null;
	}
	if (typeof album === "string") {
		return album || null;
	}
	return album["#text"] || null;
};

const LastFm: Component<
	{
		username: string;
	},
	{},
	{
		loading: boolean;
		error: string | null;
		track: LastFmTrack | null;
	}
> = function (cx) {
	cx.mount = () => {
		void fetchRecentTrack();
	};

	const fetchRecentTrack = async () => {
		try {
			const response = await fetch(
				`https://lastfm.percs.dev?=${this.username}`,
				{
					headers: { Accept: "application/json" },
				}
			);
			if (!response.ok) {
				throw new Error(`status ${response.status}`);
			}
			const rawTrack = (await response.json()) as LastFmResponse;
			if (!rawTrack || !rawTrack.name || !rawTrack.url) {
				this.track = null;
				this.error = null;
			} else {
				const isNowPlaying = rawTrack["@attr"]?.nowplaying === "true";
				const playedAt =
					!isNowPlaying && rawTrack.date?.uts
						? new Date(Number(rawTrack.date.uts) * 1000)
						: undefined;
				this.track = {
					name: rawTrack.name,
					artist: getArtistName(rawTrack.artist),
					album: getAlbumName(rawTrack.album),
					artUrl: selectArtwork(rawTrack.image),
					url: rawTrack.url,
					nowPlaying: isNowPlaying,
					playedAt,
					playedAgo: playedAt ? formatRelativeTime(playedAt) : undefined,
				};
				this.error = null;
			}
		} catch (error) {
			const message = error instanceof Error ? error.message : "unknown error";
			this.error = `could not reach last.fm (${message})`;
		} finally {
			this.loading = false;
		}
	};

	const renderBody = use(this.loading, this.error, this.track).map(
		([loading, error, track]) => {
			if (loading) {
				return <p class="status">checking last.fm...</p>;
			}
			if (error) {
				return <p class="status status-error">{error}</p>;
			}
			if (!track) {
				return <p class="status">no recent scrobbles.</p>;
			}
			return (
				<article class="track">
					{track.artUrl ? (
						<img
							class="art"
							src={track.artUrl}
							alt={`Album art for ${track.name}`}
							width="96"
							height="96"
							loading="lazy"
						/>
					) : (
						<div class="art placeholder" aria-hidden="true" />
					)}
					<div class="meta">
						<p class="track-name">{track.name}</p>
						<p class="artist">by {track.artist}</p>
						{track.album ? <p class="album">{track.album}</p> : null}
						<p class="time">
							{track.nowPlaying
								? "listening now"
								: (track.playedAgo ?? "earlier")}
						</p>
						<a href={track.url} target="_blank" rel="noreferrer noopener">
							more info &gt;
						</a>
					</div>
				</article>
			);
		}
	);

	return <div>{renderBody}</div>;
};

LastFm.style = css`
	:scope {
		display: inline-flex;
		flex-direction: column;
		max-width: 320px;
	}

	.track {
		display: flex;
		flex-direction: row;
		gap: 0.75rem;
		align-items: center;
	}

	.art {
		width: 96px;
		height: 96px;
		border-radius: 0.5rem;
		object-fit: cover;
	}

	.placeholder {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 0.75rem;
	}

	.meta {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		font-size: 0.9rem;
	}

	.track-name {
		margin: 0;
		font-size: 1rem;
		font-weight: 600;
	}

	.artist,
	.album,
	.time {
		margin: 0;
		font-size: 0.85rem;
	}

	.status {
		margin: 0;
		font-size: 0.85rem;
	}
`;

export default LastFm;
