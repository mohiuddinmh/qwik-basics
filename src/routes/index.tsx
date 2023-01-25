import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from '@builder.io/qwik-city';
import Counter from "~/components/counter/counter";
import Initiatives from "~/components/initiatives/Initiatives";

export default component$(() => {

  return (
    <>
      <Counter />
      <Initiatives initiatives={['apple', 'banana']} />
    </>
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
