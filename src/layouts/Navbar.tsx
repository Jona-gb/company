import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 site-navbar bg-slate-950/95 shadow-[0_25px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/assets/logo2.png" alt="Huzz Solutions Logo" className="h-9 w-auto" />
          <div className="leading-none">
            <p className="text-[18px] font-extrabold tracking-[-0.02em] text-white">Huzz Solutions</p>
            <p className="mt-1 text-[11px] font-semibold text-slate-300">Tech. Media. Growth.</p>
          </div>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map(link => (
            <NavLink
              key={`${link.label}-${link.href}`}
              to={link.href}
              className={({ isActive }) =>
                `relative py-7 text-sm font-bold transition ${
                  isActive
                    ? 'text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-accent'
                    : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-accent-600">
            Let&apos;s Talk
            <ArrowRight size={16} />
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white transition hover:border-accent hover:text-accent md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 pb-5 shadow-[0_22px_44px_rgba(0,0,0,0.18)] md:hidden">
          <div className="mx-auto grid max-w-[1240px] gap-1 pt-4">
            {navLinks.map(link => (
              <Link
                key={`${link.label}-${link.href}-mobile`}
                to={link.href}
                className="rounded-md px-3 py-3 text-sm font-bold text-slate-200 transition hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center justify-center gap-3 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-accent-600"
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s Talk
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
