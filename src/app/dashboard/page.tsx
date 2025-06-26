import { auth, UserButton } from '@clerk/nextjs'

export default function DashboardPage() {
  const { userId } = auth()

  return (
    <main className="p-8">
      <UserButton />
      <h1 className="text-3xl font-bold">Welcome Admin {userId}</h1>
    </main>
  )
}
