import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, User, Tag } from 'lucide-react'

export default function BlogPost({}: { params: { slug: string } }) {
  // In a real application, you would fetch the blog post data based on the slug
  const post = {
    title: 'The Future of Sustainable Engineering',
    date: '2023-08-15',
    author: 'Dr. Jane Smith',
    category: 'Sustainability',
    image: '/placeholder.svg',
    content: `
      <p>Sustainable engineering is rapidly becoming one of the most critical areas of focus in the field of mechanical engineering. As we face unprecedented environmental challenges, engineers are at the forefront of developing innovative solutions that balance technological advancement with ecological responsibility.</p>

      <h2>The Importance of Sustainable Engineering</h2>
      <p>Sustainable engineering practices are essential for several reasons:</p>
      <ul>
        <li>Reducing environmental impact</li>
        <li>Conserving natural resources</li>
        <li>Improving energy efficiency</li>
        <li>Promoting long-term economic viability</li>
      </ul>

      <h2>Innovations in Sustainable Engineering</h2>
      <p>Recent advancements in sustainable engineering include:</p>
      <ol>
        <li>Development of biodegradable materials</li>
        <li>Improvements in renewable energy technologies</li>
        <li>Implementation of circular economy principles in manufacturing</li>
        <li>Design of energy-efficient buildings and infrastructure</li>
      </ol>

      <h2>The Role of Mechanical Engineers</h2>
      <p>Mechanical engineers play a crucial role in driving sustainable innovation. Their expertise is vital in areas such as:</p>
      <ul>
        <li>Designing more efficient machines and systems</li>
        <li>Developing innovative materials with reduced environmental impact</li>
        <li>Optimizing energy consumption in industrial processes</li>
        <li>Creating sustainable transportation solutions</li>
      </ul>

      <h2>Challenges and Opportunities</h2>
      <p>While the field of sustainable engineering presents numerous opportunities, it also comes with its share of challenges. These include:</p>
      <ul>
        <li>Balancing cost-effectiveness with sustainability</li>
        <li>Overcoming technological limitations</li>
        <li>Changing industry practices and mindsets</li>
        <li>Navigating complex regulatory environments</li>
      </ul>

      <p>Despite these challenges, the future of sustainable engineering is bright. As awareness of environmental issues grows and technology continues to advance, we can expect to see even more innovative solutions emerging from the field of mechanical engineering.</p>

      <h2>Conclusion</h2>
      <p>The future of sustainable engineering is not just about creating eco-friendly technologies; it's about reimagining our entire approach to design, production, and consumption. As mechanical engineers, we have the power and responsibility to lead this change, creating a more sustainable and prosperous future for all.</p>
    `,
    relatedPosts: [
      { title: 'Advancements in Green Manufacturing', slug: 'advancements-in-green-manufacturing' },
      { title: 'The Role of AI in Sustainable Design', slug: 'role-of-ai-in-sustainable-design' },
      { title: 'Circular Economy: A New Paradigm for Engineers', slug: 'circular-economy-new-paradigm-for-engineers' },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Blog Post Header */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">{post.title}</h1>
          <div className="flex flex-wrap gap-4 text-lg animate-fade-in-up animation-delay-200">
            <div className="flex items-center">
              <Calendar className="h-6 w-6 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-6 w-6 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-6 w-6 mr-2" />
              <span>{post.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <Image src={post.image} alt={post.title} width={800} height={400} className="rounded-lg shadow-md mb-8" />
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">About the Author</h2>
                  <Image src="/placeholder.svg" alt={post.author} width={200} height={200} className="rounded-full mx-auto mb-4" />
                  <p className="text-center mb-4">{post.author}</p>
                  <p>Dr. Jane Smith is a renowned expert in sustainable engineering with over 15 years of experience in the field. She has published numerous papers on eco-friendly design and green manufacturing processes.</p>
                </CardContent>
              </Card>
              <Card className="mt-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
                  <ul className="space-y-4">
                    {post.relatedPosts.map((relatedPost) => (
                      <li key={relatedPost.slug}>
                        <Link href={`/blog/${relatedPost.slug}`} className="text-blue-600 hover:underline">
                          {relatedPost.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Comments</h2>
          {/* Add a comments component here */}
          <p className="text-center">Comments are currently disabled for this post.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Conversation</h2>
          <p className="text-xl mb-8">Stay updated with the latest in mechanical engineering and sustainability</p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/blog">Explore More Articles</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

