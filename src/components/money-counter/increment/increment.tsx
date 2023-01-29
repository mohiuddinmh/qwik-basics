import { component$, useTask$ } from '@builder.io/qwik'
import { useCounterContext } from '~/context/counter-provider/counter-provider'

const Increment = component$(() => {
  const { state, actions } = useCounterContext()
  console.log('render: Increment Ctx')

  useTask$(({ track }) => {
    track(() => state.count)

    console.log('YOOOOOO')
  })

  return <button onClick$={actions.increment$}>Increment</button>
})

export default Increment