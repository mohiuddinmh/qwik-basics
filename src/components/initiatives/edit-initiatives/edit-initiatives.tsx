import type { QRL } from '@builder.io/qwik'
import { $, component$, useSignal } from '@builder.io/qwik'

interface EditInitiativesProps {
  addInitiative$: QRL<(initiative: string) => void>;
}


const EditInitiatives = component$(({ addInitiative$ }: EditInitiativesProps) => {
  console.log('component$: EditInitiatives')

  const initiative = useSignal('')

  const handleInputChange = $((event: InputEvent) => {
    initiative.value = (event.target as HTMLInputElement).value
  })

  return <>
    <h4>Add Initiative</h4>
    <input type="text" onInput$={handleInputChange} />
    <button onClick$={() => addInitiative$(initiative.value)}>add</button>
    <div>{initiative.value}</div>
  </>
})

export default EditInitiatives