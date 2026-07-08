import React from 'react'
import { ArrowRight } from 'lucide-react'

interface AccentPanelProps {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  ctaText?: string
  href?: string
}

export const AccentPanel: React.FC<AccentPanelProps> = ({
  eyebrow,
  title,
  description,
  ctaText = 'Get started',
  href = '/contact',
}) => {
  return (
    <div className="mx-auto max-w-[960px] p-6">
      <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-teal-600 to-cyan-600 p-8 text-white shadow-[0_40px_100px_rgba(14,165,164,0.25)]">
        {eyebrow && <p className="text-sm uppercase tracking-[0.28em] text-teal-100">{eyebrow}</p>}
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">{title}</h2>
        {description && <p className="mt-4 max-w-2xl text-base leading-7 text-teal-100/90">{description}</p>}

        <a href={href} className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100">
          {ctaText}
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  )
}

export default AccentPanel
