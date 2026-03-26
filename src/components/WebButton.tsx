import { css, type FC } from "dreamland/core";
function WebButton(this: FC<{
		src: string;
		href?: string;
		alt?: string;
		title?: string;
	}>) {
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
			/>
		</a>
	);
};

WebButton.style = css`
	:scope {
		width: max-content;
		height: max(31px, 2.3rem);
		border: none !important;
		display: inline-block;
	}
	a {
		padding: 0.5em;
	}
	img {
		width: auto;
		height: 100%;
	}
`;
export default WebButton;