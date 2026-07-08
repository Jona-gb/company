import React, { useState, useMemo } from 'react'
import { MainLayout } from '../layouts'
import { Hero } from '../components/Hero'
import { ProjectCard } from '../components/ProjectCard'
import { X } from 'lucide-react'
import AccentPanel from '../components/AccentPanel'
import { imageUrls } from '../constants/images'

export const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const projects = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack marketplace with real-time inventory and payment processing.',
      category: 'Web',
      image: imageUrls.portfolio.ecommerce,
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#'
    },

    {
      id: '3',
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization platform for enterprise analytics.',
      category: 'Web',
      image: imageUrls.portfolio.analytics,
      tags: ['React', 'D3.js', 'WebSocket', 'AWS'],
      link: '#'
    },
    {
      id: '4',
      title: 'Design System Overhaul',
      description: 'Comprehensive UI kit redesign improving development efficiency by 40%.',
      category: 'Design',
      image: imageUrls.portfolio.design,
      tags: ['Figma', 'Component Library', 'Accessibility'],
      link: '#'
    },
    {
      id: '5',
      title: 'SaaS Management Tool',
      description: 'Enterprise SaaS platform with advanced permission and workflow systems.',
      category: 'Web',
      image: imageUrls.portfolio.saas,
      tags: ['React', 'TypeScript', 'GraphQL', 'PostgreSQL'],
      link: '#'
    },

    {
      id: '7',
      title: 'Content Management System',
      description: 'Headless CMS with intuitive editor and multi-language support.',
      category: 'Web',
      image: imageUrls.portfolio.cms,
      tags: ['Next.js', 'Prisma', 'MySQL', 'AWS S3'],
      link: '#'
    },
    

    {
      id: '9',
      title: 'Brand Redesign',
      description: 'Complete brand identity and website redesign increasing conversions by 35%.',
      category: 'Design',
      image: imageUrls.portfolio.branding,
      tags: ['Branding', 'UI/UX', 'Web Design'],
      link: '#'
    }
  ]

  const categories = ['All', 'Web', 'Mobile', 'Design']

  const filteredProjects = useMemo(() => {
    if (!selectedCategory || selectedCategory === 'All') return projects
    return projects.filter(p => p.category === selectedCategory)
  }, [selectedCategory])

  return (
    <MainLayout>
      <Hero
        title="Our Work Speaks for Itself"
        subtitle="Featured Projects & Case Studies"
        description="Explore a selection of projects that showcase our expertise across web, mobile, and design disciplines."
        backgroundImage={imageUrls.portfolio.hero}
      />

      <section className="bg-slate-950 py-16">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-accent">Portfolio</p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">Selected digital work</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                A focused sample of websites, tools, and design systems shaped for clarity and business value.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === 'All' ? '' : category)}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    (!selectedCategory && category === 'All') || selectedCategory === category
                      ? 'bg-accent text-white shadow-sm'
                      : 'border border-slate-200 bg-white text-slate-700 hover:border-accent hover:text-accent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                category={project.category}
                tags={project.tags}
                link={project.link}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="rounded-[32px] border border-white/15 bg-slate-950 py-16 text-center shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
              <p className="mb-6 text-base font-semibold text-slate-600">No projects found in this category</p>
              <button
                onClick={() => setSelectedCategory('')}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
              >
                <X size={18} />
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white py-8">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <p className="text-sm font-semibold text-black/58">
            Showing <span className="font-extrabold text-black">{filteredProjects.length}</span> of <span className="font-extrabold text-black">{projects.length}</span> projects
              {selectedCategory && selectedCategory !== 'All' && (
              <span className="text-accent"> in {selectedCategory}</span>
              )}
          </p>
        </div>
      </section>

      <section className="bg-slate-950 py-16">
        <AccentPanel
          eyebrow="Ready to start?"
          title={<>Your project could be next.</>}
          description={<>Let's collaborate to create a portfolio-worthy project that delivers real business results.</>}
          ctaText="Start a New Project"
          href="/contact"
        />
      </section>
    </MainLayout>
  )
}

