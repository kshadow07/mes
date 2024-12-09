"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sm:hidden">
      <Button
        variant="ghost"
        className="relative z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 z-50 w-3/4 bg-background shadow-lg">
            <div className="flex flex-col p-6">
              <div className="flex items-center justify-end mb-8">
                <ModeToggle />
              </div>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-foreground hover:text-primary text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-foreground hover:text-primary text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/events"
                  className="text-foreground hover:text-primary text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="/blog"
                  className="text-foreground hover:text-primary text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-foreground hover:text-primary text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </nav>
              <div className="mt-8">
                <Button className="w-full" onClick={() => setIsOpen(false)}>
                  Join Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 