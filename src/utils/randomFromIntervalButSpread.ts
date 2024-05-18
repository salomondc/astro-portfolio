export function randomFromIntervalButSpread(min: number, max: number, steps: number) {
	return new Array(steps)
		.fill(0)
		.map(
			(_, i) =>
				Math.random() * ((max - min) / steps + 1) +
				(i * (max - min)) / steps +
				min
		)
		.sort(() => 0.5 - Math.random());
}