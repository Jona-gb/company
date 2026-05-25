import React, { useState, useMemo } from 'react'
import { MainLayout } from '../layouts'
import { Hero } from '../components/Hero'
import { ProjectCard } from '../components/ProjectCard'
import { Filter, X } from 'lucide-react'

export const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const projects = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack marketplace with real-time inventory and payment processing.',
      category: 'Web',
      image: '🛍️',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#'
    },
    {
      id: '2',
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking with AI-powered workout recommendations.',
      category: 'Mobile',
      image: '💪',
      tags: ['React Native', 'Firebase', 'ML Kit'],
      link: '#'
    },
    {
      id: '3',
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization platform for enterprise analytics.',
      category: 'Web',
      image: '📊',
      tags: ['React', 'D3.js', 'WebSocket', 'AWS'],
      link: '#'
    },
    {
      id: '4',
      title: 'Design System Overhaul',
      description: 'Comprehensive UI kit redesign improving development efficiency by 40%.',
      category: 'Design',
      image: '🎨',
      tags: ['Figma', 'Component Library', 'Accessibility'],
      link: '#'
    },
    {
      id: '5',
      title: 'SaaS Management Tool',
      description: 'Enterprise SaaS platform with advanced permission and workflow systems.',
      category: 'Web',
      image: '🔧',
      tags: ['React', 'TypeScript', 'GraphQL', 'PostgreSQL'],
      link: '#'
    },
    {
      id: '6',
      title: 'Progressive Web App',
      description: 'Offline-capable PWA with native app performance and instant loading.',
      category: 'Mobile',
      image: '📱',
      tags: ['PWA', 'Service Workers', 'IndexedDB'],
      link: '#'
    },
    {
      id: '7',
      title: 'Content Management System',
      description: 'Headless CMS with intuitive editor and multi-language support.',
      category: 'Web',
      image: '📝',
      tags: ['Next.js', 'Prisma', 'MySQL', 'AWS S3'],
      link: '#'
    },
    {
      id: '8',
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication.',
      category: 'Mobile',
      image: '🏦',
      tags: ['iOS', 'Android', 'Encryption', 'API Integration'],
      link: '#'
    },
    {
      id: '9',
      title: 'Brand Redesign',
      description: 'Complete brand identity and website redesign increasing conversions by 35%.',
      category: 'Design',
      image: '✨',
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
      {/* Hero Section */}
      <Hero
        title="Our Work Speaks for Itself"
        subtitle="Featured Projects & Case Studies"
        description="Explore a selection of projects that showcase our expertise across web, mobile, and design disciplines."
      />

      {/* Portfolio Section */}
      <section className="py-24 bg-gradient-to-b from-white via-[#f8fafb] to-white">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Filter size={20} className="text-[#ff7a1a]" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ff7a1a]">FILTER BY CATEGORY</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === 'All' ? '' : category)}
                  className={`px-6 py-2.5 rounded-lg font-semibold text-sm uppercase tracking-[0.18em] transition-all duration-300 ${
                    (!selectedCategory && category === 'All') || selectedCategory === category
                      ? 'bg-[#ff7a1a] text-white shadow-[0_8px_24px_rgba(255,122,26,0.3)] hover:shadow-[0_12px_32px_rgba(255,122,26,0.4)]'
                      : 'bg-white border-2 border-[#e5e7eb] text-[#101d2d] hover:border-[#ff7a1a] hover:text-[#ff7a1a] transition-all'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl font-medium text-[#617080] mb-6">No projects found in this category</p>
              <button
                onClick={() => setSelectedCategory('')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#ff7a1a] text-white font-semibold uppercase tracking-[0.18em] text-sm transition-all hover:bg-[#f26f10] hover:shadow-[0_8px_24px_rgba(255,122,26,0.3)]"
              >
                <X size={18} />
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-12 bg-white border-t border-[#e5e7eb]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#617080] text-base font-medium">
              Showing <span className="font-semibold text-[#101d2d]">{filteredProjects.length}</span> of <span className="font-semibold text-[#101d2d]">{projects.length}</span> projects
              {selectedCategory && selectedCategory !== 'All' && (
                <span className="text-[#ff7a1a]"> in {selectedCategory}</span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[#0f1d2d] py-24 sm:py-32">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(255,122,26,0.15),transparent_30%)]" />
          <div className="absolute -right-20 top-1/2 h-80 w-80 rounded-full border border-[#ff7a1a]/15" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ff7a1a] mb-4">Ready to start?</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            Your Project Could Be <span className="text-[#ff7a1a]">Next</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#d7e0ea] mb-10">
            Let's collaborate to create a portfolio-worthy project that delivers real business results.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#ff7a1a] text-white font-semibold uppercase tracking-[0.18em] text-sm transition-all hover:bg-[#f26f10] hover:shadow-[0_12px_32px_rgba(255,122,26,0.3)] group">
            Start a New Project
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </MainLayout>
  )
}
