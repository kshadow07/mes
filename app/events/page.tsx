import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, MapPin, Clock, Search, Pen, Rocket, Users, Droplet, BookOpenCheck, Building2, Trophy, Leaf, Building } from 'lucide-react'
import Image from 'next/image'

export default function Events() {
  const yantraEvents = [
    {
      title: 'Mech-e-Hunt 2.0',
      description: 'A thrilling treasure hunt combining physical challenges with intellectual puzzles. Teams race against time to decode clues and solve engineering problems.',
      icon: Search,
      images: ['/images/16.png']
    },
    {
      title: 'Guest Talks',
      description: 'Distinguished speakers from industry and academia share insights on emerging trends and real-world applications in mechanical engineering.',
      icon: Users,
      images: ['/images/18.png', '/images/19.png']
    },
    {
      title: 'Mechie of the Year',
      description: 'A comprehensive competition testing technical knowledge, communication skills, and practical expertise to find the most well-rounded mechanical engineer.',
      icon: Trophy,
      images: ['/images/176.png']
    },
    {
      title: 'Exhibizone',
      description: 'Showcase of innovative models featuring cutting-edge machinery, robotics, and sustainable technologies developed by talented minds.',
      icon: Rocket,
      images: ['/images/22.png']
    },
    {
      title: 'Water Rocket Challenge',
      description: 'Design and launch water rockets to achieve maximum altitude, testing engineering principles and practical skills.',
      icon: Droplet,
      images: ['/images/25.png']
    },
    {
      title: 'Green Olympiad',
      description: 'Multi-round technical quiz competition for school students, fostering early interest in engineering and technology.',
      icon: Leaf,
      images: ['/images/27.png']
    },
    {
      title: 'Smart Campus',
      description: 'Innovation challenge to propose solutions for campus improvement through engineering and technology.',
      icon: Building,
      images: ['/images/29.png']
    },
    {
      title: 'MAD CAD',
      description: 'Time-bound CAD modeling competition with increasingly complex design challenges across three rounds.',
      icon: Pen,
      images: ['/images/31.png']
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with larger YANTRIKA logo */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="/images/14.png"
            alt="YANTRIKA Logo"
            width={400}
            height={400}
            className="mx-auto mb-8"
            priority
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Events</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
            Discover our flagship techfest YANTRIKA and other technical events
          </p>
        </div>
      </section>

      {/* Events Section with Images */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {yantraEvents.map((event, index) => (
              <Card key={event.title} className={`animate-fade-in-up animation-delay-${index * 100}`}>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <event.icon className="h-8 w-8 text-primary" />
                    <CardTitle>{event.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex gap-2 overflow-x-auto py-2">
                    {event.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="relative flex-shrink-0">
                        <Image
                          src={image}
                          alt={`${event.title} image ${imgIndex + 1}`}
                          width={200}
                          height={150}
                          className="rounded-lg object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

