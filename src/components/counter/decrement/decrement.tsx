import { component$ } from "@builder.io/qwik";
import type { QRL } from "@builder.io/qwik";


interface  DecrementProps {
  decrement: QRL<() => void>
}

const Decrement = component$(({decrement}: DecrementProps) => {
  return <button onClick$={decrement}>Decrement</button>
})

export default Decrement