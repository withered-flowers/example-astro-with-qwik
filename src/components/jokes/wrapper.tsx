import { component$, useSignal } from "@builder.io/qwik";
import type { Joke } from "@/types/defs.type";
import CounterButton from "./counter-button";
import CounterShow from "./counter-show";

type Props = {
	joke: Joke;
};

const Wrapper = component$(({ joke }: Props) => {
	const counter = useSignal<number>(10);

	return (
		<>
			<p>This is a wrapper</p>
			{/* Show Jokes Component */}
			<section class="bg-gray-200 p-4 my-4 rounded w-1/2">
				<p class="text-center font-semibold">Joke of the Day</p>
				<p class="font-mono text-center">- {joke.id} -</p>
				<p>{joke.joke}</p>
			</section>

			{/* Counter Component */}
			<section class="flex flex-row gap-4">
				{/* Counter Button Component */}
				<CounterButton counter={counter} />

				{/* Show Counter Component */}
				<CounterShow counter={counter} />
			</section>
		</>
	);
});

export default Wrapper;
