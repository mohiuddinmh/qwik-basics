import { component$ } from "@builder.io/qwik";
import type { QRL } from "@builder.io/qwik";


interface  DecrementProps {
  decrement: QRL<() => void>
}

const Decrement = component$(({decrement}: DecrementProps) => {
  console.log('component$: Decrement')

  return <button onClick$={decrement}>Decrement</button>
})

export default Decrement