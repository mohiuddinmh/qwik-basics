import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

const Layout =  component$(() => {
  return (
    <>
      <main>
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});

export default Layout