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
    <footer className="border-t border-[#eeeeee] bg-white text-black">
      <div className="mx-auto max-w-[1240px] px-5 py-10 sm:px-8 lg:px-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/assets/logo2.png" alt="Huzz Solutions Logo" className="h-9 w-auto" />
              <div className="leading-none">
                <p className="text-lg font-extrabold tracking-[-0.02em] text-black">Huzz Solutions</p>
                <p className="mt-1 text-[11px] font-semibold text-black/58">Tech. Media. Growth.</p>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-black/62">
              Digital products, brand visuals, and media support for businesses that want a cleaner online presence.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-black">Company</h3>
            <div className="mt-4 grid gap-2">
              {links.map(link => (
                <Link key={link.label} to={link.href} className="text-sm text-black/62 transition hover:text-orange-600">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-black">Contact</h3>
            <div className="mt-4 grid gap-3 text-sm text-black/62">
              <a href="tel:+233203530777" className="flex items-center gap-3 transition hover:text-orange-600">
                <Phone size={16} className="text-orange-600" />
                +233 20 353 0777
              </a>
              <a href="mailto:huzzghana@gmail.com" className="flex items-center gap-3 transition hover:text-orange-600">
                <Mail size={16} className="text-orange-600" />
                huzzghana@gmail.com
              </a>
              <p className="flex items-center gap-3">
                <MapPin size={16} className="text-orange-600" />
                Accra, Ghana
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#eeeeee] pt-6 text-sm text-black/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} Huzz Solutions. All rights reserved.</p>
          <p>Designed for clear digital growth.</p>
        </div>
      </div>
    </footer>
  )
}
