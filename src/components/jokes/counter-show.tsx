import type { Signal } from "@builder.io/qwik";

type Props = {
	counter: Signal;
};

const CounterShow = ({ counter }: Props) => {
	return (
		<section class="bg-gray-200 p-4 my-4 rounded flex flex-col gap-4 text-center">
			<p>Component (Counter Text)</p>
			<p class="py-2 px-4">Current Counter: {counter.value}</p>
		</section>
	);
};

export default CounterShow;
