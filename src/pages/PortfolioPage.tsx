import React, { useState, useMemo } from 'react'
import { MainLayout } from '../layouts'
import { Hero } from '../components/Hero'
import { ProjectCard } from '../components/ProjectCard'
import { ArrowRight, X } from 'lucide-react'
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

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-orange-600">Portfolio</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-black sm:text-4xl">Selected digital work</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-black/62">
                A focused sample of websites, tools, and design systems shaped for clarity and business value.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === 'All' ? '' : category)}
                  className={`rounded-md px-4 py-2.5 text-sm font-bold transition ${
                    (!selectedCategory && category === 'All') || selectedCategory === category
                      ? 'bg-black text-white'
                      : 'border border-[#ece8e2] bg-white text-black/64 hover:border-orange-600 hover:text-orange-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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
            <div className="rounded-lg border border-black/10 bg-white py-16 text-center">
              <p className="mb-6 text-base font-semibold text-black/62">No projects found in this category</p>
              <button
                onClick={() => setSelectedCategory('')}
                className="inline-flex items-center gap-2 rounded-md bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
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
              <span className="text-orange-600"> in {selectedCategory}</span>
              )}
          </p>
        </div>
      </section>

      <section className="bg-black py-16">
        <div className="mx-auto max-w-[900px] px-5 text-center sm:px-8 lg:px-12">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-orange-500">Ready to start?</p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-5xl">
            Your project could be next.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/68">
            Let's collaborate to create a portfolio-worthy project that delivers real business results.
          </p>
          <a href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-orange-500 hover:text-white">
            Start a New Project
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </MainLayout>
  )
}

