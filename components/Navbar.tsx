import Link from 'next/link'
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary">
                GameStop
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/rent" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary">
                Rent
              </Link>
              <Link href="/subscription" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary">
                Subscription
              </Link>
              <Link href="/pool-games" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary">
                Pool Games
              </Link>
              <Link href="/wedding" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary">
                Wedding
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-2 text-gray-900 hover:text-primary">
              <ShoppingCartIcon className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-900 hover:text-primary">
              <UserIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 