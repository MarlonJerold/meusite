'use client'

import { useState } from 'react'
import { Github, ExternalLink, Calendar, Briefcase, Mail, Linkedin, Twitter, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

const experiences = [
  {
    title: "DevSecOps Intern",
    company: "Compass UOL",
    period: "Nov 2024 - Present",
    description: "Currently enhancing skills in DevSecOps practices, focusing on integrating security into the development pipeline.",
    tools: ["DevSecOps tools", "CI/CD pipelines", "Security integration", "Linux"]
  },
  {
    title: "Java Developer",
    company: "RV2 MEIOS DE PAGAMENTOS",
    period: "Sep 2023 - Dec 2023",
    description: "Developed interfaces using JavaServer Faces (JSF) and PrimeFaces. Resolved backoffice system issues using Java 7 and JPA/Hibernate. Contributed to a monitoring system with Web Services.",
    tools: ["Java 7", "JSF", "PrimeFaces", "JPA/Hibernate", "Eclipse", "Tomcat", "Oracle Database", "GitLab", "Flutter"]
  },
  {
    title: "Software Quality Analyst",
    company: "FitBank 450",
    period: "May 2022 - Jun 2023",
    description: "Ensured quality of banking transactions (Pix, Boleto, Future Posting). Created acceptance criteria using BDD with Gherkin. Performed black-box and white-box testing on payment microservices. Documented payment flows.",
    tools: ["C#", ".NET", "SQL Server", "MongoDB", "Postman", "Gherkin", "BDD"]
  }
]

const projects = [
  {
    title: "Milho News",
    description: "Milho News is your daily news portal about what's happening on Bluesky for the Brazilian developer community. In a fully open-source project, we bring you the top news, trends, hot discussions, and career opportunities, all in direct and practical summaries. With Milho News, you stay up to date on what matters in the dev world without missing a thing.",
    url: "https://milho.site",
    isProduction: true,
    isOpenSource: true,
  },
  {
    title: "BskyAgent",
    description: "BskyAgent is a library designed to interact with the Bsky API in a simple and effective way for Java applications. It provides an easy-to-use interface for developers to integrate Bluesky functionality into their Java projects.",
    repoUrl: "https://github.com/MarlonJerold/bskyAgent",
    docsUrl: "https://bsky-agent.vercel.app/",
    isProduction: false,
    isOpenSource: true,
  },
]

export function DeveloperSiteComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans flex flex-col">
        <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="z-50 relative"
                aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </header>

        <nav
            className={`fixed inset-0 bg-black/95 z-40 flex items-center justify-center transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
          <ul className="text-center space-y-8">
            {['hero', 'about', 'blog', 'projects', 'experience', 'contact'].map((section) => (
                <li
                    key={section}
                    className="transition-all duration-300 ease-in-out"
                >
                  <Button
                      variant="ghost"
                      className="text-2xl hover:text-purple-500 transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false)
                        const element = document.getElementById(section)
                        element?.scrollIntoView({ behavior: 'smooth' })
                      }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Button>
                </li>
            ))}
          </ul>
        </nav>

        <main className="flex-grow flex flex-col justify-between pt-16 pb-8 px-4">
          <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
            <h2
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 transform transition-all duration-300 ease-in-out hover:scale-105"
            >
              I&apos;m <span
                className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Marlon</span>
            </h2>
            <p
                className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8 transform transition-all duration-300 ease-in-out hover:scale-105"
            >
              Software Developer | DevSecOps
            </p>
            <div
                className="flex space-x-4 transform transition-all duration-300 ease-in-out hover:scale-105"
            >
              <Button variant="ghost" size="icon" asChild className="text-white hover:text-purple-500 transition-colors">
                <a href="https://github.com/MarlonJerold" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-6 w-6"/>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-white hover:text-purple-500 transition-colors">
                <a href="https://www.linkedin.com/in/marlon-jerold/" target="_blank" rel="noopener noreferrer"
                   aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6"/>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-white hover:text-purple-500 transition-colors">
                <a href="https://x.com/patinhotech" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-6 w-6"/>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-white hover:text-purple-500 transition-colors">
                <a href="https://patinho.tech/" target="_blank" rel="noopener noreferrer" aria-label="Blog">
                  <ExternalLink className="h-6 w-6"/>
                </a>
              </Button>
            </div>
          </section>

          <section id="about" className="min-h-screen flex flex-col justify-center items-center px-4">
            <div className="max-w-2xl w-full">
              <div
                  className="space-y-4 text-sm md:text-base transition-all duration-300 ease-in-out"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">About Me</h3>
                
                <p className="text-gray-300">
                  Hi, My name is Marlon, and I am a software developer with experience in small, medium, and currently large companies, working in the field since 2020. Throughout my career, I have had the opportunity to work in environments that use microservices, ensuring the quality of banking transactions. I have also worked with legacy monolithic systems in the Java ecosystem. Currently, I am transitioning into the DevSecOps field, where I am an intern at @Compass UOL.
                </p>
              </div>
            </div>
          </section>

          <section id="blog" className="min-h-screen flex flex-col justify-center items-center px-4 py-16">
            <div className="max-w-4xl w-full">
              <h3 className="text-2xl md:text-3xl font-bold mb-8">Latest Blog Posts</h3>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post, index) => (
                    <Card key={index}
                          className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 mb-2">
                            {post.type}
                          </Badge>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-1"/>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                        </div>
                        <CardTitle className="text-xl font-semibold text-gray-100">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm line-clamp-3">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="link" asChild className="p-0 text-purple-400 hover:text-purple-300">
                          <a href={post.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4"/>
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="min-h-screen flex flex-col justify-center items-center px-4">
            <div className="max-w-2xl w-full">
              <div className="grid grid-cols-1 gap-6 transition-all duration-300 ease-in-out">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Projects</h3>
                {projects.map((project, index) => (
                    <Card key={index}
                          className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl md:text-2xl font-bold text-white">{project.title}</CardTitle>
                          <div className="flex gap-2">
                            {project.isProduction && (
                                <span
                                    className="px-2 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-300">
                          Production
                        </span>
                            )}
                            {project.isOpenSource && (
                                <span
                                    className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300">
                          Open Source
                        </span>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm md:text-base text-gray-300 mb-4">{project.description}</p>
                      </CardContent>
                      <CardFooter>
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                          {project.url && (
                              <Button variant="link" asChild className="text-purple-500 hover:text-purple-400">
                                <a href={project.url} target="_blank" rel="noopener noreferrer">Visit Project</a>
                              </Button>
                          )}
                          {project.repoUrl && (
                              <Button variant="link" asChild className="text-purple-500 hover:text-purple-400">
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                                   className="flex items-center">
                                  <Github className="w-4 h-4 mr-2"/>
                                  View Repository
                                </a>
                              </Button>
                          )}
                          {project.docsUrl && (
                              <Button variant="link" asChild className="text-purple-500 hover:text-purple-400">
                                <a href={project.docsUrl} target="_blank" rel="noopener noreferrer"
                                   className="flex items-center">
                                  <ExternalLink className="w-4 h-4 mr-2"/>
                                  View Documentation
                                </a>
                              </Button>
                          )}
                        </div>
                      </CardFooter>
                    </Card>
                ))}
              </div>
            </div>
          </section>


          <section id="experience" className="min-h-screen flex flex-col justify-center items-center px-4">
            <div className="max-w-2xl w-full">
              <div
                  className="grid grid-cols-1 gap-6 transition-all duration-300 ease-in-out"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Professional Experience</h3>
                {experiences.map((exp, index) => (
                    <Card key={index}
                          className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-xl md:text-2xl font-bold text-white">{exp.title}</CardTitle>
                        <div className="flex items-center text-gray-300 text-sm">
                          <Briefcase className="w-4 h-4 mr-2"/>
                          {exp.company} | {exp.period}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm md:text-base text-gray-300 mb-4">{exp.description}</p>
                        <div className="mt-4">
                          <div className="flex flex-wrap gap-2">
                            {exp.tools.map((tool, toolIndex) => (
                                <Badge key={toolIndex} variant="secondary" className="bg-purple-500/20 text-purple-300">
                                  {tool}
                                </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-4">
            <div className="max-w-2xl w-full">
              <div className="grid grid-cols-1 gap-6 transition-all duration-300 ease-in-out">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Contact Me</h3>
                <Card
                    className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <p className="text-sm md:text-base text-gray-300 mb-6">
                      Feel free to reach out to me through any of the following channels:
                    </p>
                    <div className="space-y-4">
                      <a href="mailto:marlonjerold@outlook.com.br"
                         className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                        <Mail className="w-5 h-5 mr-3"/>
                        marlonjerold@outlook.com.br
                      </a>
                      <a href="https://www.linkedin.com/in/marlon-jerold/" target="_blank" rel="noopener noreferrer"
                         className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                        <Linkedin className="w-5 h-5 mr-3"/>
                        linkedin.com/in/marlon-jerold
                      </a>
                      <a href="https://x.com/patinhotech" target="_blank" rel="noopener noreferrer"
                         className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                        <Twitter className="w-5 h-5 mr-3"/>
                        @patinhotech
                      </a>
                      <a href="https://github.com/MarlonJerold" target="_blank" rel="noopener noreferrer"
                         className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                        <Github className="w-5 h-5 mr-3"/>
                        github.com/MarlonJerold
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-gray-800 py-4 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Marlon Jerold. All rights reserved.</p>
        </footer>
      </div>
  )
}