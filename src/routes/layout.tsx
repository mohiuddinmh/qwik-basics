import { component$, Slot } from '@builder.io/qwik'

const Layout = component$(() => {
  return (
    <>
      <main>
        <section>
          <Slot />
        </section>
      </main>
    </>
  )
})

export default Layout