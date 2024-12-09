import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, BookOpen, Thermometer, Monitor, Car, Sun, Wrench } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">About Us</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
            Learn about the Mechanical Engineering Society B.I.T Sindri and our mission
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6">Know Us</h2>
              <p className="text-lg mb-4">
                BIT Sindri, established in 1949, is among India&apos;s oldest engineering institutes, located in
                Dhanbad, Jharkhand. Spread across 450 acres, it offers undergraduate (B.Tech) and postgraduate
                (M.Tech) programs in various engineering fields.
              </p>
              <p className="text-lg mb-4">
                The Mechanical Engineering Department, accredited by NBA for 2023-2024, features advanced labs and
                workshops for hands-on learning. Under the guidance of HOD Dr. S.K. Singh sir and other associate
                professors, the department focuses on bridging academia with industry through regular seminars,
                guest lectures, and industrial visits.
              </p>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <Image
                src="/images/201.jpg"
                alt="Mechanical Engineering Department"
                width={500}
                height={300}
                className="rounded-lg shadow-md object-cover"
                priority
              />
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
                  To bring holistic development of students by gentle manifestation of the mind and thereby development
                  of the placement scenario.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up animation-delay-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Exposure</h3>
                <p className="text-lg">
                  To provide all round development of the department in field of research and training. To bridge the
                  gap between department and industry and escorting in the new era of essence.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up animation-delay-400">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Connection</h3>
                <p className="text-lg">
                  To establish a concrete foundation between the alumni and the department for all round holistic
                  development.
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
            MES organizes the Annual techfest &quot;YANTRIKA&quot; where budding engineers from different colleges
            participate to prove their might.
          </p>
          <Button size="lg" variant="secondary">
            Learn More About YANTRIKA
          </Button>
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
                  We bring to you a portable and easy to access library where you can drown yourself in books just
                  through a simple click. From educational books on the theories of Mechanical Engineering to magazines
                  on machine and tech, browse as much as you can and find your pick.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Research &amp; Internship</h3>
                <p className="text-lg">
                  Mechanical Engineering Society has come up with this section that provides all the information about
                  ongoing research programs and research internship opportunities under the guidance of learned
                  professors, that would surely take your academic score to the next level.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Labs & Facilities Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Labs &amp; Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Heat Transfer Lab',
                description:
                  'Advanced facilities for experiments on conduction, convection, and radiation, equipped with pin fin apparatus and emissivity meters for comprehensive thermal studies.',
                icon: Thermometer,
              },
              {
                title: 'CAD/CAM Lab',
                description:
                  'Modern facilities for 2D/3D modeling with latest software suites and hands-on learning with CNC machine simulations.',
                icon: Monitor,
              },
              {
                title: 'Automobile Workshop',
                description:
                  'Comprehensive setup for studying vehicle mechanisms including steering, braking, and engine systems, with expert-led repair training.',
                icon: Car,
              },
              {
                title: 'Solar Energy Lab',
                description:
                  'Cutting-edge facilities for experiments with photovoltaic systems and solar thermal energy applications.',
                icon: Sun,
              },
              {
                title: 'Material Testing Lab',
                description:
                  'State-of-the-art equipment for analyzing physical and mechanical properties using advanced testing machines.',
                icon: Wrench,
              },
            ].map((lab, index) => (
              <Card key={lab.title} className={`animate-fade-in-up animation-delay-${index * 100}`}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <lab.icon className="h-8 w-8 text-primary" />
                    <CardTitle>{lab.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{lab.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
