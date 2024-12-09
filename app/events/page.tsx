import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, MapPin, Clock } from 'lucide-react'

export default function Events() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Events</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">Discover our upcoming workshops, seminars, and competitions</p>
        </div>
      </section>

      {/* Events List Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Annual Engineering Symposium', date: '2023-09-15', time: '09:00 AM', location: 'Main Auditorium', description: 'Join us for a day of inspiring talks and networking opportunities.' },
              { title: 'CAD Workshop', date: '2023-10-05', time: '02:00 PM', location: 'Computer Lab A', description: 'Learn the basics of Computer-Aided Design in this hands-on workshop.' },
              { title: 'Industry Panel Discussion', date: '2023-11-20', time: '06:30 PM', location: 'Conference Room 2', description: 'Hear from industry experts about the future of mechanical engineering.' },
              { title: 'Robotics Competition', date: '2023-12-10', time: '10:00 AM', location: 'Engineering Building', description: 'Showcase your robotics skills in our annual competition.' },
              { title: 'Guest Lecture: Sustainable Engineering', date: '2024-01-25', time: '04:00 PM', location: 'Lecture Hall B', description: 'Explore the intersection of mechanical engineering and sustainability.' },
              { title: 'Career Fair', date: '2024-02-15', time: '11:00 AM', location: 'Student Center', description: 'Connect with potential employers and explore career opportunities.' },
            ].map((event, index) => (
              <Card key={event.title} className={`animate-fade-in-up animation-delay-${index * 100}`}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 mr-2 text-blue-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                    <span>{event.location}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={`/events/${event.title.toLowerCase().replace(/ /g, '-')}`}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Event</h2>
          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl">Annual Engineering Symposium</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                Our flagship event brings together students, faculty, and industry professionals for a day of knowledge sharing and networking. Don't miss out on this opportunity to learn from the best in the field!
              </p>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                    <span>September 15, 2023</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 mr-2 text-blue-500" />
                    <span>09:00 AM - 05:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                    <span>Main Auditorium</span>
                  </div>
                </div>
                <Button size="lg" asChild>
                  <Link href="/events/annual-engineering-symposium">Register Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Event Registration Form */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Register for an Event</h2>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="event" className="block text-sm font-medium text-gray-700 mb-1">Select Event</label>
              <select id="event" name="event" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required>
                <option value="">Choose an event</option>
                <option value="symposium">Annual Engineering Symposium</option>
                <option value="workshop">CAD Workshop</option>
                <option value="panel">Industry Panel Discussion</option>
              </select>
            </div>
            <Button type="submit" className="w-full">Register</Button>
          </form>
        </div>
      </section>
    </div>
  )
}

