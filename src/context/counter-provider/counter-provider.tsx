import { $, component$, createContext, Slot, useContext, useContextProvider, useStore } from "@builder.io/qwik";
import type { QRL } from "@builder.io/qwik";

interface CounterContextState {
  count: number
}
interface CounterContextActions {
  increment$: QRL<() => void>
  decrement$: QRL<() => void>
}

interface CounterContextType{
  state: CounterContextState
  actions:CounterContextActions
}

export const CounterContext = createContext<CounterContextType>('counter-context')

export const useCounterContext = () => useContext(CounterContext)

const CounterProvider = component$(() => {
  const state = useStore({
    count: 0
  })

  const actions = {
    increment$: $(() => {
      state.count++
    }),
    decrement$: $(() => {
      state.count--
    })
  }

  useContextProvider(CounterContext, {state, actions})
  return <>
    <Slot />
  </>
})

export default CounterProvider