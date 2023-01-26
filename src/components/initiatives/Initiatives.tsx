import { $, component$, useSignal } from "@builder.io/qwik";
import EditInitiatives from "~/components/initiatives/edit-initiatives/edit-initiatives";

interface InitiativesProps {
  initiatives: string[]
}

const Initiatives = component$(({ initiatives: initialInitiatives }: InitiativesProps) => {

  console.log('component$: Initiatives')

  const edit = useSignal(false)

  const initiatives = useSignal(initialInitiatives)

  const addInititative$ = $((initiative: string) => {
    initiatives.value = [...initiatives.value, initiative]
    console.log(initiatives.value)
  })

  const handleEditCLick = $(() => {
    edit.value = !edit.value
  })


  return <>
    <h2>Initiatives</h2>
    <button onClick$={handleEditCLick}>Edit</button>

    {edit.value && <EditInitiatives addInitiative$={addInititative$} />}

    {initiatives.value.map(initiative => <h3>{initiative}</h3>)}
  </>
})

export  default Initiatives