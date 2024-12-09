import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Contact Us</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">Get in touch with the Mechanical Engineering Society</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center animate-fade-in-up">
              <MapPin className="h-8 w-8 text-blue-500 mr-4" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Address</h2>
                <p>123 Engineering Avenue<br />University Campus<br />City, State 12345</p>
              </div>
            </div>
            <div className="flex items-center animate-fade-in-up animation-delay-200">
              <Phone className="h-8 w-8 text-blue-500 mr-4" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Phone</h2>
                <p>(123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-center animate-fade-in-up animation-delay-400">
              <Mail className="h-8 w-8 text-blue-500 mr-4" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Email</h2>
                <p>contact@mesociety.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Send Us a Message</h2>
          <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input type="email" id="email" name="email" required />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <Input type="text" id="subject" name="subject" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <Textarea id="message" name="message" rows={6} required />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412634965843!2d-73.98630492404069!3d40.74844097138946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1628716703264!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

