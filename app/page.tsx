import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Wrench, Users, BookOpen, Award, Cog, Cpu, BookOpenCheck, Briefcase, LinkIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
              Mechanical Engineering Society
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 animate-fade-in-up animation-delay-200">
              B.I.T Sindri
            </h2>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-400">
              Empowering future engineers through holistic development and innovation
            </p>
            <Button size="lg" className="animate-fade-in-up animation-delay-600">
              Join MES
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-50"></div>
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Engineering background"
            layout="fill"
            objectFit="cover"
            className="mix-blend-overlay"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About MES B.I.T Sindri</h2>
          <p className="text-lg text-center mb-8">
            Mechanical Engineering Society B.I.T Sindri is a technical society in B.I.T Sindri with the motto to bring holistic development of students by gentle manifestation of the mind and thereby development of the placement scenario.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="animate-fade-in-up">
              <CardHeader>
                <Cog className="h-8 w-8 mb-2 text-primary animate-spin-slow" />
                <CardTitle>Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Bringing holistic development of students by gentle manifestation of the mind and thereby improving the placement scenario.</CardDescription>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up animation-delay-200">
              <CardHeader>
                <Briefcase className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Exposure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Providing all-round development in research and training, bridging the gap between department and industry.</CardDescription>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up animation-delay-400">
              <CardHeader>
                <LinkIcon className="h-8 w-8 mb-2 text-primary animate-pulse" />
                <CardTitle>Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Establishing a concrete foundation between alumni and the department for holistic development.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="animate-fade-in-up">
              <CardHeader>
                <BookOpenCheck className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>E-Library</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access our portable and easy-to-use digital library. From educational books on Mechanical Engineering theories to tech magazines, find all the resources you need with just a click.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up animation-delay-200">
              <CardHeader>
                <Cpu className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Research & Internship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get information about ongoing research programs and internship opportunities under the guidance of experienced professors to enhance your academic performance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Seminars', 'Workshops', 'Guest Lectures', 'YANTRIKA Techfest'].map((activity, index) => (
              <div key={activity} className={`text-center animate-fade-in-up animation-delay-${index * 200}`}>
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{activity}</h3>
                <p className="text-muted-foreground">Enhancing skills and knowledge through various engaging activities.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Shape the Future of Mechanical Engineering?</h2>
          <p className="text-xl mb-8">Join our community of innovative engineers and make a difference!</p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get Involved</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

