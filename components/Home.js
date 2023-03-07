import { useUser } from '@auth0/nextjs-auth0/client'

export default function Home() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <div>
      <h1>Hello {user ? user.name : 'Visitor'}</h1>
      {!user &&
        <button onClick={() => { location.replace('/api/auth/login') }}>Login</button>
      }
      {user &&
        <button onClick={() => { location.replace('/api/auth/logout') }}>Logout</button>
      }
    </div>
  )
}