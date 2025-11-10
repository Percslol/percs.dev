import { hydrate } from "dreamland/ssr/client";
import App from "./main";

hydrate(
	App,
	document.querySelector("#app")!,
	document.head,
	document.querySelector("[dlssr-d]")!
);

function atkinson(pixels: number[], w: number): boolean[] {
	const e = Array(2 * w).fill(0);
	const m = [0, 1, w - 2, w - 1, w, 2 * w - 1];
	return pixels.map(x => {
		const pix = x + (e.push(0), e.shift()!);
		const col = pix > 1.5;
		const err = (pix - (col ? 1 : 0)) / 8;
		m.forEach(x => e[x] += err);
		return col;
	});
}
const width = Math.floor(window.innerWidth / 2);
const height = Math.floor(window.innerHeight / 2);

const image = new Image();
image.crossOrigin = "Anonymous";
image.src = `https://picsum.photos/${width}/${height}`;
image.onload = () => {
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d')!;
	canvas.width = width;
	canvas.height = height;
	
	ctx.drawImage(image, 0, 0, width, height);
	const imageData = ctx.getImageData(0, 0, width, height);
	const data = imageData.data;
	
	// Convert to grayscale
	const grayscale = [];
	for (let i = 0; i < data.length; i += 4) {
		grayscale.push((data[i] + data[i + 1] + data[i + 2]) / 765);
	}
	
	// Apply dithering
	const dithered = atkinson(grayscale, width);
	
	// Apply colors
	for (let i = 0; i < dithered.length; i++) {
		const [r, g, b] = dithered[i] ? [128, 128, 128] : [0, 0, 0];
		data[i * 4] = r;
		data[i * 4 + 1] = g;
		data[i * 4 + 2] = b;
	}
	
	ctx.putImageData(imageData, 0, 0);
	document.documentElement.style.background = `url(${canvas.toDataURL()})`;
	document.documentElement.style.backgroundSize = "cover";
};