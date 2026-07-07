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
      className={`overflow-hidden rounded-lg border bg-white transition ${
        highlighted
          ? 'border-accent shadow-[0_20px_55px_rgba(255,122,26,0.12)]'
          : 'border-black/10 shadow-[0_18px_45px_rgba(20,20,20,0.05)] hover:border-black/20'
      }`}
    >
      {image && (
        <img src={image} alt={title} className="h-44 w-full object-cover" />
      )}

      <div className="p-6">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-accent-50 text-accent">
          <Icon size={22} />
        </div>

        <h3 className="text-xl font-extrabold tracking-[-0.02em] text-black">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-black/62">{description}</p>

        {features && (
          <ul className="mt-6 space-y-3">
            {features.slice(0, 5).map(feature => (
              <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-black/68">
                <CheckCircle2 size={17} className="mt-1 shrink-0 text-accent" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
