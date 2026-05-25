import React from 'react'
import { Code2, Smartphone, Palette, TrendingUp, Zap, Shield } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="glow-border glass-dark p-8 rounded-xl card-hover group">
      <div className="mb-6 p-4 bg-gradient-to-r from-indigo-500/20 to-teal-500/20 rounded-lg w-fit group-hover:shadow-glow transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-300 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-slate-400 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

export const FeaturesOverview: React.FC = () => {
  const services = [
    {
      icon: <Code2 size={28} className="text-indigo-400" />,
      title: 'Web App Engineering',
      description: 'Modern, scalable web applications built with cutting-edge technologies and best practices.',
      features: ['React & TypeScript', 'Serverless Architecture', 'API Integration', 'Fast Deployment']
    },
    {
      icon: <Smartphone size={28} className="text-teal-400" />,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile solutions that engage users and drive conversions.',
      features: ['iOS & Android', 'React Native', 'Progressive Web Apps', 'Offline Support']
    },
    {
      icon: <Palette size={28} className="text-indigo-400" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed with user psychology and accessibility in mind.',
      features: ['Figma Design', 'User Research', 'Prototyping', 'Accessibility First']
    },
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Our Core Services</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Three pillars of digital excellence designed to transform your business and delight your users.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glow-border glass-dark p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-teal-400" size={24} />
              <h3 className="text-xl font-bold text-white">Proven Results</h3>
            </div>
            <p className="text-slate-300">
              Our data-driven approach ensures every project delivers measurable business impact. Track KPIs, boost conversion rates, and scale with confidence.
            </p>
          </div>

          <div className="glow-border glass-dark p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-indigo-400" size={24} />
              <h3 className="text-xl font-bold text-white">Security First</h3>
            </div>
            <p className="text-slate-300">
              Enterprise-grade security protocols, encrypted data handling, and compliance with GDPR, CCPA, and industry standards built into every solution.
            </p>
          </div>

          <div className="glow-border glass-dark p-8 rounded-xl md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-indigo-400" size={24} />
              <h3 className="text-xl font-bold text-white">Lightning-Fast Performance</h3>
            </div>
            <p className="text-slate-300">
              Optimized for speed with sub-second load times, efficient resource management, and infrastructure that scales globally. Your users won't wait.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
