import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, MapPin, Clock, Users } from 'lucide-react'

export default function EventPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the event data based on the slug
  const event = {
    title: 'Annual Engineering Symposium',
    date: '2023-09-15',
    time: '09:00 AM - 05:00 PM',
    location: 'Main Auditorium, University Campus',
    description: 'Join us for a day of inspiring talks, workshops, and networking opportunities with industry leaders and academic experts in the field of mechanical engineering.',
    image: '/placeholder.svg',
    speakers: [
      { name: 'Dr. Jane Smith', role: 'Chief Engineer, TechCorp', image: '/placeholder.svg' },
      { name: 'Prof. John Doe', role: 'Head of Mechanical Engineering, University', image: '/placeholder.svg' },
      { name: 'Eng. Sarah Johnson', role: 'Robotics Specialist, InnovateAI', image: '/placeholder.svg' },
    ],
    schedule: [
      { time: '09:00 AM', activity: 'Registration and Welcome Coffee' },
      { time: '10:00 AM', activity: 'Keynote Speech: The Future of Mechanical Engineering' },
      { time: '11:30 AM', activity: 'Panel Discussion: Sustainable Engineering Practices' },
      { time: '01:00 PM', activity: 'Lunch Break and Networking' },
      { time: '02:00 PM', activity: 'Workshop: Hands-on with Advanced CAD Tools' },
      { time: '03:30 PM', activity: 'Student Project Showcase' },
      { time: '04:30 PM', activity: 'Closing Remarks and Prize Giving' },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Event Header */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">{event.title}</h1>
          <div className="flex flex-wrap gap-4 text-lg animate-fade-in-up animation-delay-200">
            <div className="flex items-center">
              <Calendar className="h-6 w-6 mr-2" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-6 w-6 mr-2" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 mr-2" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Image src={event.image} alt={event.title} width={600} height={400} className="rounded-lg shadow-md" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About the Event</h2>
              <p className="text-lg mb-6">{event.description}</p>
              <Button size="lg">Register Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Event Schedule</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {event.schedule.map((item, index) => (
              <Card key={index} className={`animate-fade-in-up animation-delay-${index * 100}`}>
                <CardContent className="flex items-center p-6">
                  <div className="flex-shrink-0 w-24 font-bold">{item.time}</div>
                  <div className="flex-grow">{item.activity}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {event.speakers.map((speaker, index) => (
              <Card key={speaker.name} className={`animate-fade-in-up animation-delay-${index * 200}`}>
                <CardContent className="p-6 text-center">
                  <Image src={speaker.image} alt={speaker.name} width={200} height={200} className="rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
                  <p className="text-gray-600">{speaker.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl mb-8">Don't miss this opportunity to learn, network, and grow!</p>
          <Button size="lg" variant="secondary">Register for the Event</Button>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Who Should Attend?</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Mechanical Engineering students</li>
                  <li>Faculty members</li>
                  <li>Industry professionals</li>
                  <li>Researchers in related fields</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">What to Bring</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Student ID or professional ID</li>
                  <li>Notebook and pen</li>
                  <li>Business cards for networking</li>
                  <li>Laptop (optional, for workshops)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Need More Information?</h2>
          <div className="text-center">
            <p className="text-lg mb-4">If you have any questions about the event, please don't hesitate to contact us:</p>
            <p className="text-lg font-semibold">Email: events@mesociety.com</p>
            <p className="text-lg font-semibold">Phone: (123) 456-7890</p>
          </div>
        </div>
      </section>
    </div>
  )
}

