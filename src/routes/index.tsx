import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from '@builder.io/qwik-city';
import Greet from "~/components/greet/greet";
import Initiatives from "~/components/initiatives/Initiatives";

export default component$(() => {

  return (
    <div style={{backgroundColor: '#1a1a1a'}}>
      <Greet name={'Habeeb'} />
      <Initiatives initiatives={['apple', 'banana']} />
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
