"use client"

import { useState, useEffect } from "react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const mobileMenu = document.getElementById("mobile-menu")
      const mobileMenuButton = document.getElementById("mobile-menu-button")

      if (mobileMenu && !mobileMenu.contains(target) && mobileMenuButton && !mobileMenuButton.contains(target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button
        id="mobile-menu-button"
        className="md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
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

      <div id="mobile-menu" className={`md:hidden bg-white shadow-md ${isOpen ? "block" : "hidden"}`}>
        <ul className="py-2 px-4 space-y-2">
          <li>
            <a href="#about" className="block py-2 hover:text-blue-600 transition-colors" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#education" className="block py-2 hover:text-blue-600 transition-colors" onClick={handleLinkClick}>
              Education
            </a>
          </li>
          <li>
            <a href="#skills" className="block py-2 hover:text-blue-600 transition-colors" onClick={handleLinkClick}>
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="block py-2 hover:text-blue-600 transition-colors"
              onClick={handleLinkClick}
            >
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="block py-2 hover:text-blue-600 transition-colors" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="block py-2 hover:text-blue-600 transition-colors" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
