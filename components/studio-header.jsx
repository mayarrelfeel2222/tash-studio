import { ShoppingBag } from "lucide-react"

export default function StudioHeader() {
  return (
    <header className="w-full bg-white border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">TASH Studio</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium hover:text-gray-600">
            Shop
          </a>
          <a href="#" className="text-sm font-medium hover:text-gray-600">
            Piercing
          </a>
          <a href="#" className="text-sm font-medium hover:text-gray-600">
            Studio
          </a>
          <a href="#" className="text-sm font-medium hover:text-gray-600">
            About
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="p-2">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

