import { signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { useApollo } from 'utils/apollo'

export default function Logout() {
  const client = useApollo()
  useEffect(() => {
    client.resetStore()
    signOut({
      callbackUrl: '/'
    })
  })
  return <></>
}
