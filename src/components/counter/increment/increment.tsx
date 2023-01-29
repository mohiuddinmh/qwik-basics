import type { QRL } from '@builder.io/qwik'
import { component$ } from '@builder.io/qwik'

interface IncrementProps {
  increment: QRL<() => void>;
}

const Increment = component$(({ increment }: IncrementProps) => {
  console.log('component$: Increment')

  return <button onClick$={increment}>Increment</button>
})

export default Increment