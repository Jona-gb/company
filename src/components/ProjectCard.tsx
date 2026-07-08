import React from 'react'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  link?: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  category,
  tags,
  link,
}) => {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_22px_55px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_28px_70px_rgba(14,165,164,0.12)]">
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {category}
          </span>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-slate-900 transition hover:border-accent hover:text-accent"
              aria-label={`Open ${title}`}
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>

        <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-slate-950">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.slice(0, 4).map(tag => (
            <span
              key={tag}
              className="rounded-full border border-black/10 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
