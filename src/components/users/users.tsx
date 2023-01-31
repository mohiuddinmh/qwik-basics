import { component$, Resource, useResource$, useStore } from '@builder.io/qwik'
import type { User } from '~/api/types/apiTypes'
import { api } from '~/api/api'

const Users = component$(() => {
  const state = useStore({
    refresh: false
  })

  const usersResource = useResource$<User[]>(({ track, cleanup }) => {
    track(() => state.refresh)
    console.log('asdfghj')
    cleanup(() => {
      state.refresh = false
    })

    return api.user.getAll()
  })


  return <>
    <h1> Users </h1>
    <button onClick$={() => {
      state.refresh = true
    }}>Refresh
    </button>

    <Resource
      value={usersResource}
      onPending={() => <div>Loading...</div>}
      onResolved={(users: User[]) => <ul>
        {users.map((user) => <li>{user.name}</li>)}
      </ul>} />
  </>
})

export default Users