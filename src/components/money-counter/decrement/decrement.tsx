import { component$ } from '@builder.io/qwik'
import { useCounterContext } from '~/context/counter-provider/counter-provider'

const Decrement = component$(() => {
  console.log('render: Decrement Ctx')
  const { actions } = useCounterContext()

  return <button onClick$={actions.decrement$}>Decrement</button>
})

export default Decrement