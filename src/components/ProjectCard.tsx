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
    <article className="group overflow-hidden rounded-lg border border-[#ece8e2] bg-white shadow-[0_18px_45px_rgba(20,20,20,0.05)] transition hover:-translate-y-1 hover:border-[#ded8cf]">
      <div className="relative h-56 overflow-hidden bg-white">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded-md bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-orange-700">
            {category}
          </span>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-[#ece8e2] text-black transition hover:border-orange-600 hover:text-orange-600"
              aria-label={`Open ${title}`}
            >
              <ArrowUpRight size={17} />
            </a>
          )}
        </div>

        <h3 className="text-xl font-extrabold tracking-[-0.02em] text-black">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-black/62">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.slice(0, 4).map(tag => (
            <span
              key={tag}
              className="rounded-md border border-black/10 px-3 py-1 text-xs font-semibold text-black/58"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
