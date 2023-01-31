import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Counter from '~/components/money-counter/counter'
import Initiatives from '~/components/initiatives/Initiatives'
import CounterProvider from '~/context/counter-provider/counter-provider'
import Users from '~/components/users/users'

export default component$(() => {

  return (
    <>
      <Users />
      {false && <CounterProvider>
        <Counter />
      </CounterProvider>}

      {false && <Initiatives initiatives={['apple', 'banana']} />}
    </>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description'
    }
  ]
}
