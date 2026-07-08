import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface HeroProps {
  title?: string
  subtitle?: string
  description?: string
  backgroundImage?: string
}

export const Hero: React.FC<HeroProps> = ({
  title = 'Digital work built with clarity',
  subtitle = 'Huzz Solutions',
  description = 'We help businesses design, build, and improve practical digital experiences that look professional and work reliably.',
  backgroundImage,
}) => {
  return (
    <section className="relative overflow-hidden border-b border-black/10 bg-white">
      {backgroundImage && (
        <div className="pointer-events-none absolute inset-0">
          <img src={backgroundImage} alt="" className="h-full w-full object-cover brightness-[0.55] contrast-[0.95]" />
          <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-xl" />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-[1240px] px-5 py-16 min-h-[420px] sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_0.45fr] lg:items-end">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-accent">{subtitle}</p>
            <h1 className="mt-5 max-w-[780px] text-5xl font-extrabold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-[650px] text-base leading-8 text-slate-200">
              {description}
            </p>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-white/95 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.16)] backdrop-blur-xl">
            <p className="text-sm font-bold text-black">Have a project in mind?</p>
            <p className="mt-2 text-sm leading-6 text-black/60">
              Share your goals and we will help shape the next practical step.
            </p>
            <div className="mt-5 flex gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-3 text-sm font-bold text-white transition hover:bg-accent">
                Start
                <ArrowRight size={16} />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-md border border-black/10 px-4 py-3 text-sm font-bold text-black transition hover:border-black">
                Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
