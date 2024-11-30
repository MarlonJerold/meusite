import { Button } from "@/components/ui/button"
import { Card, } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Linkedin, Twitter, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
  {
    title: "Computer networks",
    type: "Networks",
    date: "2024-11-13",
    url: "https://patinho.tech/redes",
    excerpt: "Dive into the fascinating world of computer networks and discover how they shape our digital landscape."
  },
  {
    title: "Does asynchronous exist?",
    type: "blog",
    date: "2024-11-03",
    url: "https://patinho.tech/assincrono-existe",
    excerpt: "Explore the concept of asynchronous programming and its impact on modern software development."
  },
  {
    title: "Paths to creating your first library",
    type: "Documentation",
    date: "2024-09-22",
    url: "https://patinho.tech/primeira-lin",
    excerpt: "Learn the step-by-step process of creating and publishing your very first software library."
  }
]

export default function Home() {
  return (
      <>
        <main className="min-h-screen bg-black text-white">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 pointer-events-none" />
          <div className="container mx-auto max-w-6xl px-4">
            <section className="flex flex-col md:flex-row justify-between items-start gap-8 py-12">
              <div className="w-full md:w-2/5">
                <div className="relative bg-black border-2 border-white p-6 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 transform rotate-45 translate-x-16 -translate-y-16" />
                  <h1 className="manga-title text-5xl md:text-6xl lg:text-7xl font-bold mb-4 relative">
                    I&apos;m <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Marlon</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-400 mb-8 font-bold tracking-wider">
                    Software Developer | DevSecOps
                  </p>
                  <div className="flex space-x-4 mb-8">
                    <a
                        href="https://github.com/MarlonJerold"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-2 hover:bg-gray-200 transition-colors duration-200"
                        aria-label="GitHub"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/marlon-jerold/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-2 hover:bg-gray-200 transition-colors duration-200"
                        aria-label="LinkedIn"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                        href="https://x.com/MarlonJerold"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-2 hover:bg-gray-200 transition-colors duration-200"
                        aria-label="Twitter"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a
                        href="https://patinho.tech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-2 hover:bg-gray-200 transition-colors duration-200"
                        aria-label="Blog"
                    >
                      <ExternalLink className="h-6 w-6" />
                    </a>
                  </div>
                  <div className="space-y-4 relative">
                    <p className="border border-white bg-black p-4 text-sm md:text-base">
                      Hi, I&apos;m Marlon, a software developer with experience in small, medium, and large companies since 2020. I&apos;ve worked with microservices, ensuring the quality of banking transactions, and with legacy monolithic systems in the Java ecosystem.
                    </p>
                    <p className="border border-white bg-black p-4 text-sm md:text-base">
                      Currently, I&apos;m transitioning into DevSecOps as an intern at Compass UOL, focusing on integrating security practices into the development pipeline.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/5">
                <div className="space-y-4">
                  {blogPosts.map((post, index) => (
                      <Card key={index} className="bg-black border-t border-white hover:bg-gray-900 transition-colors duration-200 px-4 py-3">
                        <div className="flex justify-between items-center mb-2">
                          <Badge className="bg-white text-black border-0 uppercase text-xs tracking-wider">
                            {post.type}
                          </Badge>
                          <span className="text-gray-400 text-xs">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                        </div>
                        <Link href={post.url} className="block group">
                          <h3 className="text-white font-bold mb-1 group-hover:underline">{post.title}</h3>
                          <p className="text-gray-400 text-sm">{post.excerpt}</p>
                        </Link>
                      </Card>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
      </>
  )
}

