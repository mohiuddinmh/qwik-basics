import { component$, useStylesScoped$ } from "@builder.io/qwik";
import Increment from "~/components/money-counter/increment/increment";
import Decrement from "~/components/money-counter/decrement/decrement";
import styles from './counter.css?inline'
import { useCounterContext } from "~/context/counter-provider/counter-provider";

const Counter = component$(() => {
  const {state} = useCounterContext()
  useStylesScoped$(styles)

  return <>
    <h1 class='counter'>{state.count}</h1>
    <Increment />
    <Decrement />
  </>
})

export default Counter

