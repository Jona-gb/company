import React from 'react'
import { CheckCircle2, LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  highlighted?: boolean
  image?: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  highlighted = false,
  image,
}) => {
  return (
    <article
      className={`group overflow-hidden rounded-[32px] border bg-white transition duration-300 ${
        highlighted
          ? 'border-accent/30 shadow-[0_26px_60px_rgba(14,165,164,0.14)]'
          : 'border-black/10 shadow-[0_20px_50px_rgba(15,23,42,0.07)] hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_28px_70px_rgba(14,165,164,0.12)]'
      }`}
    >
      {image && (
        <div className="relative h-52 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
        </div>
      )}

      <div className="space-y-5 p-6">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-50 text-accent shadow-sm">
          <Icon size={22} />
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-extrabold tracking-[-0.02em] text-slate-950">{title}</h3>
          <p className="text-sm leading-7 text-slate-600">{description}</p>
        </div>

        {features && (
          <ul className="space-y-3">
            {features.slice(0, 5).map(feature => (
              <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                <CheckCircle2 size={18} className="mt-1 shrink-0 text-accent" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
