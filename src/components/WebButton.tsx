import { css, type FC } from "dreamland/core";
function WebButton(
	this: FC<
		{
			src: string;
			href?: string;
			alt?: string;
			title?: string;
		},
		{
			image: HTMLImageElement;
		}
	>
) {
	this.cx.mount = () => {
		this.image.addEventListener("error", () => {
			this.root.style.display = "none";
		});
	};

	this.href = this.href;

	if (this.title) {
		this.alt = this.alt || "A web button with the description: " + this.title;
	}

	return (
		<a href={this.href || "#"} target="_blank">
			<img
				loading="lazy"
				src={this.src}
				alt={this.alt || "A web button."}
				title={this.title || this.alt || ""}
				this={use(this.image)}
			/>
		</a>
	);
}

WebButton.style = css`
	:scope {
		min-width: max(88px, calc(6.5rem));
		height: max(31px, 2.3rem);
		border: none !important;
		display: inline-block;
		font-size: 0;
	}
	img {
		image-rendering: pixelated;
		width: auto;
		height: 100%;
	}
	:scope:after {
		display: none;
	}
`;

export function ButtonList(this: FC) {
	return (
		<div>
			<WebButton
				src="button.gif"
				href="https://percs.dev"
				title="my button!!"
			/>
			<sup>
				feel free to add <a href="https://percs.dev/button.gif">my button</a> to
				your site if i know you, hotlinking is preferred
			</sup>
			<br />
			<div class="button-list">
				<WebButton
					src="https://mercurywork.shop/button.gif"
					href="https://mercurywork.shop"
					title="mercury workshop"
				/>
				<WebButton
					src="https://dreamland.js.org/button.png"
					href="https://dreamland.js.org"
					title="dreamland.js"
				/>
				<WebButton
					src="https://omada.cafe/omada.gif"
					href="https://omada.cafe/"
					title="omada.cafe"
				/>
				<WebButton
					src="https://login.corp.google.com/c/balls.gif"
					href="https://login.corp.google.com"
					title="Google Single Sign On"
				/>
			</div>
			<hr />
			<div class="button-list">
				<WebButton
					src="https://bomberfish.ca/button.gif"
					href="https://bomberfish.ca"
					title="BomberFish"
				/>
				<WebButton
					src="https://velzie.rip/88x31.png"
					href="https://velzie.rip"
					title="velzie"
				/>
				<WebButton
					src="https://wearr.dev/88x31.gif"
					href="https://wearr.dev"
					title="wearr"
				/>
				<WebButton
					src="https://foxmoss.com/foxmossbutton.png"
					href="https://foxmoss.com"
					title="foxmoss"
				/>
				<WebButton
					src="https://errorcodezero.dev/button.png"
					href="https://errorcodezero.dev/"
					title="errorcodezero"
				/>
				<WebButton
					src="https://3kh0.net/button.png"
					href="https://3kh0.net"
					title="3kh0"
				/>
			</div>
		</div>
	);
}

ButtonList.style = css`
	.button-list {
		display: flex;
		gap: 0.5em;
	}
	sup {
		color: grey;
		padding-left: 0.8em;
	}
`;

export default ButtonList;
