import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">David Munyiri</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="hover:text-blue-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-blue-600 transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-600 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-600 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button id="mobile-menu-button" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden bg-white shadow-md">
          <ul className="py-2 px-4 space-y-2">
            <li>
              <a href="#about" className="block py-2 hover:text-blue-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#education" className="block py-2 hover:text-blue-600 transition-colors">
                Education
              </a>
            </li>
            <li>
              <a href="#skills" className="block py-2 hover:text-blue-600 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="block py-2 hover:text-blue-600 transition-colors">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="block py-2 hover:text-blue-600 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="https:https://photos.app.goo.gl/oXCHAdFhFBe9Jf6CH"
                alt="David Munyiri"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">David Munyiri Mwangi</h1>
            <h2 className="text-2xl md:text-3xl mb-6">Software Developer</h2>
            <p className="text-lg mb-8">
              Passionate software developer with expertise in full-stack development, specializing in JavaScript, C#,
              and Python technologies. Experienced in building robust web applications with modern frameworks.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Me
              </Link>
              <Link
                href="#projects"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <a href="mailto:davidmunyiri2019@outlook.com" className="hover:underline">
                davidmunyiri2019@outlook.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <a href="tel:+254741712131" className="hover:underline">
                +254741712131
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github size={18} />
              <a
                href="https://github.com/CelebMunyiri"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/CelebMunyiri
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={18} />
              <a
                href="https://www.linkedin.com/in/david-munyiri-06158a1b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">BSc Computer Science</h3>
              <p className="text-gray-600 mb-4">Kirinyaga University</p>
              <div className="flex items-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <span>Computer Science</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Tooling</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Git and GitHub
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Docker
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Azure DevOps
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  AWS
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Languages</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  JavaScript
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Python
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  C#
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  C++
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  C
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Databases</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  MSSQL
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  MongoDB
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  PostgreSQL
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Frameworks</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  React
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Express (NodeJS)
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  AngularJS
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Vue
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Nest
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Django
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Testing</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Jest
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Cypress
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  k6
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Supertest
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Vitest
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  NUnit
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  MSTest
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

              {/* Experience Items */}
              <div className="space-y-12">
                {/* Experience 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                    <div className="p-4 bg-white rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-blue-600">Backend Developer</h3>
                      <h4 className="text-lg font-medium">Nathan Digital</h4>
                      <p className="text-gray-500">March 2024 - Present</p>
                      <p className="mt-2">
                        Designed and implemented APIs using Express (NodeJS) framework and .NET platform while
                        performing their tests using Supertest and Jest for NodeJS and NUnit and MSTest frameworks for
                        .NET.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Experience 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                    <div className="p-4 bg-white rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-blue-600">.NET Developer</h3>
                      <h4 className="text-lg font-medium">The Jitu</h4>
                      <p className="text-gray-500">October 2023 - February 2024</p>
                      <p className="mt-2">
                        Engaged in diverse projects leveraging expertise in website development using C# and its
                        frameworks in frontend and backend website development including ASP.NET, Web API and Blazor.
                        Made rigorous unit testing of code using NUnit framework and MSTest framework.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Experience 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                    <div className="p-4 bg-white rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-blue-600">Software Developer</h3>
                      <h4 className="text-lg font-medium">Upwork</h4>
                      <p className="text-gray-500">January 2022 - October 2023</p>
                      <p className="mt-2">
                        Collaborated with diverse clients on projects spanning frontend and backend development, data
                        analysis, and process automation. Delivered tailored solutions, optimized performance, and
                        streamlined workflows to drive client success across various industries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Shoppie DM E-commerce</h3>
                <p className="text-gray-500 mb-4">June 2023</p>
                <p className="mb-4">
                  Developed a full-stack e-commerce web application with Express backend, implementing robust security
                  measures like bcrypt for authentication and JWT for route protection.
                </p>
                <p className="mb-4">
                  Implemented end-to-end testing with Cypress and backend unit testing with Jest and Supertest.
                  Performance testing done with k6.
                </p>
                <div className="mt-4">
                  <a
                    href="https://github.com/CelebMunyiri/Shopie-project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <Github className="mr-2" size={18} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Oil Prices Forecaster</h3>
                <p className="text-gray-500 mb-4">April 2023 - May 2023</p>
                <p className="mb-4">
                  Utilized machine learning libraries including FBProphet, scikit-learn, Pandas, and NumPy to predict
                  oil prices based on historical data, economic indicators, and geopolitical factors.
                </p>
                <p className="mb-4">
                  Leveraged FBProphet for time series forecasting, capturing trends and seasonality, while using
                  scikit-learn for data preprocessing, model selection, and evaluation.
                </p>
                <div className="mt-4">
                  <a
                    href="https://github.com/CelebMunyiri/oil-prices-forecaster"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <Github className="mr-2" size={18} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Dice Game</h3>
                <p className="text-gray-500 mb-4">November 2022</p>
                <p className="mb-4">
                  Designed and developed an interactive two-player game using HTML, CSS, and JavaScript, focusing on
                  dynamic gameplay, score calculation, and winner determination.
                </p>
                <p className="mb-4">
                  Implemented real-time score tracking and game logic to ensure a seamless user experience, with
                  intuitive controls for restarting the game.
                </p>
                <div className="mt-4">
                  <a
                    href="https://github.com/CelebMunyiri/Dice-Game"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <Github className="mr-2" size={18} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership & Community</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600">Beta Microsoft Learn Student Ambassador</h3>
              <p className="text-gray-500 mb-2">January 2023 - Present</p>
              <p>
                Preparing hackathons and workshops that engage the student community, grow ideas, and enhance
                collaboration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600">Microsoft ADC Junior Game of Learners Mentor</h3>
              <p className="text-gray-500 mb-2">May 2023 - August 2023</p>
              <p>
                Mentoring a group of girls from University of Eldoret secondary school in web development so that they
                could be able to implement a solution for a hackathon they were participating in sponsored by Microsoft
                ADC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 text-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="mr-3 text-blue-600" size={20} />
                    <a href="mailto:davidmunyiri2019@outlook.com" className="hover:text-blue-600">
                      davidmunyiri2019@outlook.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-3 text-blue-600" size={20} />
                    <a href="tel:+254741712131" className="hover:text-blue-600">
                      +254 741 712 131
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href="https://github.com/CelebMunyiri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/david-munyiri-06158a1b7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} David Munyiri. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
