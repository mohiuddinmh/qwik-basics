import { component$ } from "@builder.io/qwik";
import { useCounterContext } from "~/context/counter-provider/counter-provider";

const Increment = component$(() => {
  const {actions} = useCounterContext()
  console.log('component$: Increment')

  return <button onClick$={actions.increment$}>Increment</button>
})

export default Increment