import type { Joke } from "@/types/defs.type";

export const fetchRandomJoke = async (): Promise<Joke> => {
	const responseJson = await (
		await fetch("https://icanhazdadjoke.com/", {
			headers: {
				Accept: "application/json",
			},
		})
	).json();

	return responseJson;
};
