import type { User } from '~/api/types/apiTypes'

export const api = {
  user: {
    getAll: async () => get('https://jsonplaceholder.typicode.com/users') as Promise<User[]>
  }
}


async function get(url: string) {
  const response = await fetch(url)
  return await handleResponse(response)
}

async function handleResponse(res: Response) {
  if (res.ok) {
    console.log('res', res)
    return res.json()
  } else {
    return Promise.reject(res)
  }
}

