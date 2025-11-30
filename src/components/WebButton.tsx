import { type Component } from "dreamland/core";
export const WebButton: Component<
	{
		src: string;
		href?: string;
		alt?: string;
		title?: string;
	},
	{}
> = function () {
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
