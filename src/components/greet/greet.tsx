import { $, component$, useSignal } from "@builder.io/qwik";


interface GreetProps {
  name: string
}
const Greet = component$(({name}: GreetProps) => {
  const counter = useSignal(0)

  const increment = $(() => {
    counter.value++
  })

  const decrement = $(() => {
    counter.value--
  })


  return <>
    <h1>{counter.value}</h1>
    <button onClick$={increment}>Increment</button>
    <button onClick$={decrement}>Decrement</button>
  </>

})

export default Greet

