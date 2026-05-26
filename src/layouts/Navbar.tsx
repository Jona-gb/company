import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Search, X } from 'lucide-react'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-[#dfe5ec] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-auto items-center justify-between py-2">
          <Link to="/" className="flex items-center gap-2 group hover:opacity-80 transition">
            <img src="/assets/logo.png" alt="Huzz Solutions Logo" className="h-14 w-auto" />
            <p className="text-sm font-semibold text-[#101d2d]">Huzz Solutions</p>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#4e5d6d] transition hover:text-[#ff7a1a]"
              >
                {link.label}
              </Link>
            ))}
            
            <Link to="/contact" className="inline-flex items-center rounded-md bg-[#ff7a1a] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#f26f10]">
              Request support
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md border border-[#dce3eb] p-2 text-[#101d2d] transition hover:border-[#ff7a1a] hover:text-[#ff7a1a] md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="animate-in border-t border-[#dfe5ec] pb-4 md:hidden">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="block rounded-xl px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#4e5d6d] transition hover:bg-[#f6f8fb] hover:text-[#ff7a1a]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mx-4 mt-4 block rounded-md bg-[#ff7a1a] px-5 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#f26f10]"
              onClick={() => setIsOpen(false)}
            >
              Request support
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
