import { css, type FC } from "dreamland/core";
function WebButton(
	this: FC<{
		src: string;
		href?: string;
		alt?: string;
		title?: string;
	}, {
		image: HTMLImageElement;
	}>
) {
	this.cx.mount = () => {
		this.image.addEventListener("error", () => {
			this.root.style.display = "none";
		});
	}
	
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

export function ButtonList(this: FC) {
	return (
		<>
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
			<a href='https://ko-fi.com/O5O71ZMVRJ' target='_blank'>
				<img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/brandasset/v2/support_me_on_kofi_dark.png' border='0' alt='donate to percs on ko-fi' />
			</a>
			<hr />
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
		</>
	);
}
export default ButtonList;
