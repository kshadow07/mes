import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Wrench, Users, BookOpen, Award, Cog, Cpu, BookOpenCheck, Briefcase, LinkIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8">
            <Image
              src="/images/4.png"
              alt="MES Logo"
              width={150}
              height={150}
              className="mx-auto"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Mechanical Engineering Society
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
            Empowering future engineers through innovation and excellence
          </p>
        </div>
      </section>

      {/* Engineering in Motion Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Engineering in Motion</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Gear System */}
            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-0">
                <div className="h-40 flex items-center justify-center">
                  <div className="relative">
                    <svg width="80" height="80" viewBox="0 0 100 100" className="animate-spin-slow">
                      <path
                        d="M50 10C28.57 10 11 27.57 11 49s17.57 39 39 39 39-17.57 39-39S71.43 10 50 10zm0 70c-17.05 0-31-13.95-31-31s13.95-31 31-31 31 13.95 31 31-13.95 31-31 31z"
                        className="fill-primary"
                      />
                      {[...Array(8)].map((_, i) => (
                        <rect
                          key={i}
                          x="48"
                          y="15"
                          width="4"
                          height="12"
                          className="fill-primary"
                          transform={`rotate(${i * 45} 50 50)`}
                        />
                      ))}
                    </svg>
                    <svg width="60" height="60" viewBox="0 0 100 100" 
                         className="animate-spin-reverse-slow absolute -right-8 top-0">
                      <path
                        d="M50 10C28.57 10 11 27.57 11 49s17.57 39 39 39 39-17.57 39-39S71.43 10 50 10zm0 70c-17.05 0-31-13.95-31-31s13.95-31 31-31 31 13.95 31 31-13.95 31-31 31z"
                        className="fill-primary"
                      />
                      {[...Array(8)].map((_, i) => (
                        <rect
                          key={i}
                          x="48"
                          y="15"
                          width="4"
                          height="12"
                          className="fill-primary"
                          transform={`rotate(${i * 45} 50 50)`}
                        />
                      ))}
                    </svg>
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">Mechanical Systems</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Exploring the fundamentals of mechanical engineering
                </p>
              </CardContent>
            </Card>

            {/* Piston System */}
            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-0">
                <div className="h-40 flex items-center justify-center">
                  <div className="relative w-20 h-32">
                    <div className="absolute w-20 h-20 bg-primary/20 rounded-full">
                      <div className="absolute w-16 h-16 bg-primary/40 rounded-full m-2"></div>
                      <div className="absolute w-12 h-12 bg-primary rounded-full m-4 animate-bounce"></div>
                    </div>
                    <div className="absolute top-16 left-1/2 w-4 h-24 bg-primary -translate-x-1/2 animate-pulse"></div>
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">Dynamic Motion</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Understanding principles of mechanical motion
                </p>
              </CardContent>
            </Card>

            {/* Wave System */}
            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-0">
                <div className="h-40 flex items-center justify-center">
                  <div className="w-full h-24 relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full h-16 relative overflow-hidden">
                        <div className="absolute w-[200%] animate-wave">
                          <svg className="w-full h-16" viewBox="0 0 1440 320" preserveAspectRatio="none">
                            <path
                              fill="currentColor"
                              className="text-primary"
                              d="M0,160L40,149.3C80,139,160,117,240,112C320,107,400,117,480,138.7C560,160,640,192,720,186.7C800,181,880,139,960,122.7C1040,107,1120,117,1200,122.7C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">Fluid Dynamics</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Visualizing fluid mechanics in engineering
                </p>
              </CardContent>
            </Card>
          </div>
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

