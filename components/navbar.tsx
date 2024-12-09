"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="bg-background border-b">
      {/* Mobile Menu Button */}
      <div className="sm:hidden fixed top-4 left-4 z-50">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="flex items-center"
        >
          <span className="font-bold mr-2">MES</span>
          {isSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="sm:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40">
          <div className="fixed left-0 top-0 h-full w-64 bg-background border-r shadow-lg">
            <div className="p-4 mt-16">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="text-foreground hover:text-primary"
                  onClick={() => setSidebarOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="text-foreground hover:text-primary"
                  onClick={() => setSidebarOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/events" 
                  className="text-foreground hover:text-primary"
                  onClick={() => setSidebarOpen(false)}
                >
                  Events
                </Link>
                <Link 
                  href="/blog" 
                  className="text-foreground hover:text-primary"
                  onClick={() => setSidebarOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  href="/contact" 
                  className="text-foreground hover:text-primary"
                  onClick={() => setSidebarOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center pr-10">
                <Image
                  src="/images/3.png"
                  alt="MES Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                <span className="text-xl font-bold">MES</span>
              </Link>
              <div className="ml-6 flex space-x-8">
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
            <div className="flex items-center space-x-4">
              <ModeToggle />
              <Button>Join Us</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Top Bar */}
      <div className="sm:hidden flex justify-end h-16 px-4">
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button>Join Us</Button>
        </div>
      </div>
    </nav>
  )
}

