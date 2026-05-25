import React from 'react'
import { LucideIcon } from 'lucide-react'

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
    <div
      className={`overflow-hidden rounded-2xl border border-[#dce3eb] bg-white shadow-[0_20px_55px_rgba(16,29,45,0.08)] transition-all duration-300 ${
        highlighted ? 'md:-translate-y-1 border-[#ff7a1a]/40 shadow-[0_26px_70px_rgba(255,122,26,0.14)]' : 'hover:-translate-y-1 hover:border-[#ff7a1a]/35'
      }`}
    >
      {image && (
        <div className="h-52 overflow-hidden">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
      )}

      <div className="p-7">
        <div className="mb-5 inline-flex rounded-xl bg-[#fff1e7] p-3">
          <Icon size={24} className="text-[#ff7a1a]" />
        </div>

        <h3 className="mb-3 text-2xl font-semibold text-[#101d2d]">{title}</h3>
        <p className="mb-6 leading-7 text-[#617080]">{description}</p>

        {features && (
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#ff7a1a]"></div>
                <span className="text-[#455466]">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
