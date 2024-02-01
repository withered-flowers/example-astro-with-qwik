import { type Signal, $ } from "@builder.io/qwik";

type Props = {
	counter: Signal;
};

const CounterButton = ({ counter }: Props) => {
	const buttonOnClickHandler = $(() => {
		counter.value += 1;
	});

	return (
		<section class="bg-gray-200 p-4 my-4 rounded flex flex-col gap-4">
			<p>Component (Counter Button)</p>
			<button
				type="button"
				class="py-2 px-4 bg-sky-200 hover:bg-sky-400 hover:text-white rounded transition-colors duration-300"
				onClick$={buttonOnClickHandler}
			>
				Add Counter
			</button>
		</section>
	);
};

export default CounterButton;
