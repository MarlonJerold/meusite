import { Github, ExternalLink, Linkedin} from 'lucide-react';
import Link from 'next/link';

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
              href="https://blog.marlonjerold.com/"
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
      </div>
    </main>
  );
}
