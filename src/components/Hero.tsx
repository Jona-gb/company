import React from 'react'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

interface HeroProps {
  title?: string
  subtitle?: string
  description?: string
}

export const Hero: React.FC<HeroProps> = ({
  title = 'Transform Your Vision Into Digital Reality',
  subtitle = 'Technology & IT Services',
  description = 'Infrastructure, security, and product delivery for businesses that need scalable systems and dependable execution.',
}) => {
  return (
    <section className="relative overflow-hidden border-b border-[#24374c] bg-[#0f1d2d]">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(255,122,26,0.18),transparent_26%),linear-gradient(135deg,rgba(15,29,45,0.95),rgba(15,29,45,0.98))]" />
        <div className="absolute -right-8 top-10 h-72 w-72 rounded-full border border-[#ff7a1a]/25" />
        <div className="absolute right-20 top-24 h-52 w-52 rounded-full border border-white/10" />
      </div>

      <div className="relative mx-auto max-w-[1220px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <ShieldCheck size={16} className="text-[#ff7a1a]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/72">{subtitle}</span>
          </div>

          <h1 className="mt-8 text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#c7d2df]">
            {description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 group">
              Start Your Project
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border-2 border-[#ff7a1a] text-[#ff7a1a] font-semibold text-sm uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#ff7a1a] hover:text-white hover:shadow-[0_8px_24px_rgba(255,122,26,0.3)] group">
              View Portfolio
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl gap-4 border-t border-white/10 pt-8 text-left sm:grid-cols-3">
            <div className="rounded-[24px] bg-white/5 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
              <div className="text-3xl font-semibold text-[#ff7a1a]">999+</div>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/68">Projects Delivered</p>
            </div>
            <div className="rounded-[24px] bg-white/5 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
              <div className="text-3xl font-semibold text-[#ff7a1a]">9008%</div>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/68">Client Satisfaction</p>
            </div>
            <div className="rounded-[24px] bg-white/5 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
              <div className="text-3xl font-semibold text-[#ff7a1a]">4+</div>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/68">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
