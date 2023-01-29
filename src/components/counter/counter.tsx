import { $, component$, useSignal, useStylesScoped$ } from '@builder.io/qwik'
import Increment from '~/components/counter/increment/increment'
import Decrement from '~/components/counter/decrement/decrement'
import styles from './counter.css?inline'


interface CounterProps {
  stepSize?: number;
}

const Counter = component$(({ stepSize = 5 }: CounterProps) => {
  const counter = useSignal(0)
  useStylesScoped$(styles)

  const increment = $(() => {
    counter.value += stepSize
  })

  const decrement = $(() => {
    counter.value -= stepSize
  })


  return <>
    <h1 class="counter">{counter.value}</h1>
    <Increment increment={increment} />
    <Decrement decrement={decrement} />
  </>

})

export default Counter

