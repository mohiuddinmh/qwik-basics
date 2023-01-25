import { $, component$, useSignal } from "@builder.io/qwik";
import EditInitiatives from "~/components/initiatives/edit-initiatives/edit-initiatives";

interface InitiativesProps {
  initiatives: string[]
}

const Initiatives = component$(({ initiatives }: InitiativesProps) => {

  const edit = useSignal(false)

  const handleEditCLick = $(() => {
    edit.value = !edit.value
  })


  return <>
    <h2>Initiatives</h2>
    <button onClick$={handleEditCLick}>Edit</button>

    {edit.value && <EditInitiatives />}

    {initiatives.map(initiative => <h3>{initiative}</h3>)}
  </>
})

export  default Initiatives