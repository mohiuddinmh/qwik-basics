import { $, component$, useSignal } from "@builder.io/qwik";
import Increment from "~/components/counter/increment/increment";
import Decrement from "~/components/counter/decrement/decrement";


interface CounterProps {
  stepSize?: number
}

const Counter = component$(({stepSize = 5}: CounterProps) => {
  const counter = useSignal(0)

  const increment = $(() => {
    counter.value += stepSize
  })

  const decrement = $(() => {
    counter.value -= stepSize
  })


  return <>
    <h1>{counter.value}</h1>
    <Increment increment={increment} />
    <Decrement decrement={decrement} />
  </>

})

export default Counter

