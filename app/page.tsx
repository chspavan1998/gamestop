import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Rent Board Games</h1>
            <p className="text-xl mb-8">Choose from our wide collection of board games for your next game night</p>
            <Link href="/rent" className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Browse Games
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Adult Games</h3>
              <p className="text-gray-600 mb-4">Perfect for game nights with friends</p>
              <Link href="/rent/adult" className="text-primary hover:underline">
                View Games →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Family Games</h3>
              <p className="text-gray-600 mb-4">Fun for the whole family</p>
              <Link href="/rent/family" className="text-primary hover:underline">
                View Games →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Strategy Games</h3>
              <p className="text-gray-600 mb-4">Challenge your mind</p>
              <Link href="/rent/strategy" className="text-primary hover:underline">
                View Games →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Game Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://placehold.co/600x400/FF6B00/FFFFFF/png?text=Game+1"
                  alt="Game 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Catan</h3>
                <p className="text-gray-600 mb-4">From ₹249</p>
                <Link href="/rent/catan" className="text-primary hover:underline">
                  View Details →
                </Link>
              </div>
            </div>
            {/* Game Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://placehold.co/600x400/FF6B00/FFFFFF/png?text=Game+2"
                  alt="Game 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Ticket to Ride</h3>
                <p className="text-gray-600 mb-4">From ₹299</p>
                <Link href="/rent/ticket-to-ride" className="text-primary hover:underline">
                  View Details →
                </Link>
              </div>
            </div>
            {/* Game Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://placehold.co/600x400/FF6B00/FFFFFF/png?text=Game+3"
                  alt="Game 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Codenames</h3>
                <p className="text-gray-600 mb-4">From ₹199</p>
                <Link href="/rent/codenames" className="text-primary hover:underline">
                  View Details →
                </Link>
              </div>
            </div>
            {/* Game Card 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://placehold.co/600x400/FF6B00/FFFFFF/png?text=Game+4"
                  alt="Game 4"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Pandemic</h3>
                <p className="text-gray-600 mb-4">From ₹349</p>
                <Link href="/rent/pandemic" className="text-primary hover:underline">
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 