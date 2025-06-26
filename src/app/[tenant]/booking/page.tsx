import { useParams } from 'next/navigation'

export default function BookingPage() {
  const { tenant } = useParams()
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Booking Page for {tenant}</h1>
      {/* Pull tee times for this tenant from Supabase */}
    </main>
  )
}
