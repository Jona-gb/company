import React from 'react'
import { ExternalLink } from 'lucide-react'

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
    <div className="glass-dark glow-border rounded-xl overflow-hidden card-hover group">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-slate-800">
        <div
          className="w-full h-full bg-gradient-to-br from-indigo-600/20 to-teal-600/20 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform duration-500"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)`,
          }}
        >
          {image}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full border border-indigo-500/30">
            {category}
          </span>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-slate-700 rounded-lg transition-colors duration-300"
            >
              <ExternalLink size={18} className="text-slate-400 group-hover:text-indigo-400" />
            </a>
          )}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded-full border border-slate-700/50 hover:border-slate-600 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
