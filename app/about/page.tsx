import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Award, Calendar, Users, BookOpen, Briefcase, LinkIcon } from 'lucide-react'

export default function AboutUs() {
return (
  <div className="flex flex-col min-h-screen">
    {/* Header Section */}
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">About Us</h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">Learn about the Mechanical Engineering Society B.I.T Sindri and our mission</p>
      </div>
    </section>

    {/* About Section */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6">Know Us</h2>
            <p className="text-lg mb-4">
              Mechanical Engineering Society of BIT Sindri was established to meet the diversified challenges and bring out innovative approach in the fields of Mechanical engineering. It provides industrial exposure to draw the practical application of concepts and avails its members a platform to enrich their management skills.
            </p>
            <p className="text-lg mb-4">
              Under the guidance of HOD Dr. S.K. Singh sir and other associate professors, Mechanical Engineering Society is progressing towards achieving its goals.
            </p>
          </div>
          <div className="animate-fade-in-up animation-delay-200">
            <Image src="/placeholder.svg" alt="Mechanical Engineering Society B.I.T Sindri" width={500} height={300} className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>

    {/* Mission and Vision Section */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Motto</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="animate-fade-in-up">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Development</h3>
              <p className="text-lg">
                To bring holistic development of students by gentle manifestation of the mind and thereby development of the placement scenario.
              </p>
            </CardContent>
          </Card>
          <Card className="animate-fade-in-up animation-delay-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Exposure</h3>
              <p className="text-lg">
                To provide all round development of the department in field of research and training. To bridge the gap between department and industry and escorting in the new era of essence.
              </p>
            </CardContent>
          </Card>
          <Card className="animate-fade-in-up animation-delay-400">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Connection</h3>
              <p className="text-lg">
                To establish a concrete foundation between the alumni and the department for all round holistic development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Activities Section */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Calendar, title: 'Events', description: 'Organizing various events throughout the year' },
            { icon: Users, title: 'Seminars', description: 'Conducting seminars on latest technological advancements' },
            { icon: BookOpen, title: 'Workshops', description: 'Hands-on workshops to enhance practical skills' },
          ].map((activity, index) => (
            <Card key={activity.title} className={`animate-fade-in-up animation-delay-${index * 200}`}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <activity.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                <p>{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* YANTRIKA Section */}
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">YANTRIKA</h2>
        <p className="text-xl mb-8">
          MES organizes the Annual techfest "YANTRIKA" where budding engineers from different colleges participate to prove their might.
        </p>
        <Button size="lg" variant="secondary">Learn More About YANTRIKA</Button>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">E-Library</h3>
              <p className="text-lg">
                We bring to you a portable and easy to access library where you can drown yourself in books just through a simple click. From educational books on the theories of Mechanical Engineering to magazines on machine and tech, browse as much as you can and find your pick.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Research & Internship</h3>
              <p className="text-lg">
                Mechanical Engineering Society has come up with this section that provides all the information about ongoing research programs and research internship opportunities under the guidance of learned professors, that would surely take your academic score to the next level.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Mechanical Engineering Society</h2>
        <p className="text-xl mb-8">Be a part of our vibrant community and shape the future of mechanical engineering!</p>
        <Button size="lg">Become a Member</Button>
      </div>
    </section>
  </div>
)
}
