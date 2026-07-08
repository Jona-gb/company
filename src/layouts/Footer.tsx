import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
]

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-[1240px] px-5 py-10 sm:px-8 lg:px-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/assets/logo2.png" alt="Huzz Solutions Logo" className="h-9 w-auto" />
              <div className="leading-none">
                <p className="text-lg font-extrabold tracking-[-0.02em] text-white">Huzz Solutions</p>
                <p className="mt-1 text-[11px] font-semibold text-slate-400">Tech. Media. Growth.</p>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Digital products, brand visuals, and media support for businesses that want a cleaner online presence.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-white">Company</h3>
            <div className="mt-4 grid gap-2">
              {links.map(link => (
                <Link key={link.label} to={link.href} className="text-sm text-slate-400 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-white">Contact</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              <a href="tel:+233203530777" className="flex items-center gap-3 transition hover:text-white">
                <Phone size={16} className="text-accent" />
                +233 20 353 0777
              </a>
              <a href="mailto:huzzghana@gmail.com" className="flex items-center gap-3 transition hover:text-white">
                <Mail size={16} className="text-accent" />
                huzzghana@gmail.com
              </a>
              <p className="flex items-center gap-3 text-slate-400">
                <MapPin size={16} className="text-accent" />
                Accra, Ghana
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} Huzz Solutions. All rights reserved.</p>
          <p>Designed for clear digital growth.</p>
        </div>
      </div>
    </footer>
  )
}
