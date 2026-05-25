import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { label: 'Web App Engineering', href: '/services' },
      { label: 'Mobile Applications', href: '/services' },
      { label: 'UI/UX Design', href: '/services' },
    ],
    Company: [
      { label: 'About', href: '/' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Blog', href: '/' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/' },
      { label: 'Terms of Service', href: '/' },
      { label: 'Contact', href: '/contact' },
    ],
  }

  return (
    <footer className="bg-[#0f1d2d] text-white">
      <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-8 border-b border-white/10 pb-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff7a1a] text-sm font-bold tracking-[0.18em] text-white transition group-hover:bg-[#f26f10]">
                H
              </div>
              <img src="/assets/logo.png" alt="Huzz Solutions Logo" className="h-20 w-auto" />

              
              <div>
                <span className="text-2xl font-semibold tracking-tight text-white">Huzz Solutions</span>
              </div>
            </Link>
            <p className="mb-5 max-w-md text-sm leading-7 text-[#b6c3d1]">
              Managed IT services, cloud delivery, and security-first engineering for companies building reliable digital operations.
            </p>
            <a href="/contact" className="inline-flex items-center rounded-md bg-[#ff7a1a] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#f26f10]">
              Speak with an expert
            </a>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-xs uppercase tracking-[0.28em] text-white/48">{title}</h3>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-[#d2dbe5] transition hover:text-[#ff7a1a]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-12 border-y border-white/10 py-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 flex-shrink-0 text-[#ff7a1a]" size={20} />
              <div>
                <p className="text-sm text-white/52">Email</p>
                <a href="mailto:huzzghana@gmail.com" className="text-white transition hover:text-[#ff7a1a]">
                  huzzghana@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-1 flex-shrink-0 text-[#ff7a1a]" size={20} />
              <div>
                <p className="text-sm text-white/52">Phone</p>
                <a href="tel:+233203530777" className="text-white transition hover:text-[#ff7a1a]">
                  + (233) 203-530-777
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 flex-shrink-0 text-[#ff7a1a]" size={20} />
              <div>
                <p className="text-sm text-white/52">Location</p>
                <p className="text-white">Accra, Ghana</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm text-[#9eb0c2] md:flex-row md:items-center md:justify-between">
          <p>&copy; {currentYear} Huzz Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">Privacy</a>
            <a href="#" className="transition hover:text-white">Terms</a>
            <a href="#" className="inline-flex items-center gap-1 transition hover:text-white">
              Support center
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
