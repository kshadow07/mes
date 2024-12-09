import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Blog</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">Stay updated with the latest in mechanical engineering</p>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'The Future of Sustainable Engineering', excerpt: 'Exploring eco-friendly innovations in mechanical engineering...', image: '/placeholder.svg', category: 'Sustainability' },
              { title: 'Advancements in Robotics', excerpt: 'How AI is revolutionizing the field of robotics...', image: '/placeholder.svg', category: 'Technology' },
              { title: 'The Importance of Interdisciplinary Collaboration', excerpt: 'Breaking down silos in engineering education and research...', image: '/placeholder.svg', category: 'Education' },
            ].map((post, index) => (
              <Card key={post.title} className={`animate-fade-in-up animation-delay-${index * 100}`}>
                <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{post.category}</p>
                  <p>{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Innovations in 3D Printing', date: '2023-08-15', excerpt: 'Exploring the latest advancements in additive manufacturing...', category: 'Technology' },
              { title: 'The Role of AI in Mechanical Design', date: '2023-08-10', excerpt: 'How artificial intelligence is transforming the design process...', category: 'AI' },
              { title: 'Sustainable Materials in Engineering', date: '2023-08-05', excerpt: 'A look at eco-friendly materials revolutionizing the industry...', category: 'Sustainability' },
              { title: 'The Importance of Soft Skills for Engineers', date: '2023-07-30', excerpt: 'Why communication and leadership matter in engineering...', category: 'Career Development' },
            ].map((post, index) => (
              <Card key={post.title} className={`animate-fade-in-up animation-delay-${index * 100}`}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{post.date} | {post.category}</p>
                  <p>{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline">
                    <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Technology', 'Sustainability', 'Career Development', 'Education', 'Industry Insights', 'Research', 'Innovation', 'Student Life'].map((category, index) => (
              <Button key={category} variant="outline" className={`animate-fade-in-up animation-delay-${index * 50}`}>
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Subscribe to Our Newsletter</h2>
          <p className="text-center mb-8">Stay updated with the latest blog posts and society news</p>
          <form className="max-w-md mx-auto flex gap-4">
            <Input type="email" placeholder="Enter your email" className="bg-white text-black" required />
            <Button type="submit" variant="secondary">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              { question: 'How often is the blog updated?', answer: 'We aim to publish new content at least twice a week, covering various topics in mechanical engineering.' },
              { question: 'Can I contribute to the blog?', answer: 'Yes! We welcome guest posts from students, faculty, and industry professionals. Please contact our editorial team for more information.' },
              { question: 'Are the blog posts peer-reviewed?', answer: 'While our blog posts are not formally peer-reviewed, they are carefully vetted by our editorial team for accuracy and quality.' },
              { question: 'How can I suggest a topic for a blog post?', answer: 'We appreciate topic suggestions! Please use the contact form on our website to submit your ideas.' },
            ].map((item, index) => (
              <div key={index} className={`animate-fade-in-up animation-delay-${index * 100}`}>
                <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

