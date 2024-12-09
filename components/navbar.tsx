import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'

export function Navbar() {
  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">MES</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="border-transparent text-foreground hover:border-primary hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="border-transparent text-foreground hover:border-primary hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                About Us
              </Link>
              <Link href="/events" className="border-transparent text-foreground hover:border-primary hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Events
              </Link>
              <Link href="/blog" className="border-transparent text-foreground hover:border-primary hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Blog
              </Link>
              <Link href="/contact" className="border-transparent text-foreground hover:border-primary hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <ModeToggle />
            <Button>Join Us</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

