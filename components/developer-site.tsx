import { Github, ExternalLink, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
  {
    title: "Computer networks",
    type: "Networks",
    date: "2024-11-13",
    url: "https://blog.marlonjerold.com/redes",
    excerpt: "Dive into the fascinating world of computer networks and discover how they shape our digital landscape."
  },
  {
    title: "Does asynchronous exist?",
    type: "blog",
    date: "2024-11-03",
    url: "https://blog.marlonjerold.com/assincrono-existe",
    excerpt: "Explore the concept of asynchronous programming and its impact on modern software development."
  },
  {
    title: "Paths to creating your first library",
    type: "Documentation",
    date: "2024-09-22",
    url: "https://blog.marlonjerold.com/primeira-lin",
    excerpt: "Learn the step-by-step process of creating and publishing your very first software library."
  }
]

const project = {
  title: "Milho News",
  description: "Milho News is your daily news portal about what's happening on Bluesky for the Brazilian developer community. In a fully open-source project, we bring you the top news, trends, hot discussions, and career opportunities, all in direct and practical summaries. With Milho News, you stay up to date on what matters in the dev world without missing a thing.",
  url: "https://milho.site",
  isProduction: true,
  isOpenSource: true,
}

export default function Home() {
  return (
      <main className="min-h-screen bg-black text-white py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <section className="mb-12">
            <h1 className="text-4xl font-bold mb-2">Marlon</h1>
            <p className="text-xl text-gray-400 mb-4">DevSecOps</p>
            <div className="flex space-x-4 mb-4">
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
              <p className="text-gray-300 text-sm">
                  Hi, I&apos;m Marlon, a software developer with experience since 2022. Currently transitioning into
                  DevSecOps at Compass UOL.
              </p>
          </section>
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
                {blogPosts.map((post, index) => (
                <Link key={index} href={post.url} className="block mb-4 group">
                  <h3 className="text-white font-bold group-hover:underline">{post.title}</h3>
                  <p className="text-gray-400 text-sm">{post.excerpt}</p>
                  <div className="flex justify-between items-center mt-1 text-xs text-gray-500">
                    <span>{post.type}</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                </Link>
            ))}
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Featured Project</h2>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-300">
                Visit Project
              </a>
            </div>
          </section>
        </div>
      </main>
  )
}