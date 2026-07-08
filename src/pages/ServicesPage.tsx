import React from 'react'
import { ArrowRight, BarChart3, Code2, Layers, MonitorSmartphone, Palette, RefreshCw, Shield, Smartphone, TrendingUp } from 'lucide-react'
import { Hero } from '../components/Hero'
import { ServiceCard } from '../components/ServiceCard'
import { MainLayout } from '../layouts'
import { imageUrls } from '../constants/images'

const photos = imageUrls.services

export const ServicesPage: React.FC = () => {
  const webServices = [
    {
      icon: Code2,
      title: 'Custom Website Development',
      description: 'Modern business websites built to feel credible, fast, and easy to navigate on every device.',
      image: photos.webDevelopment,
      features: [
        'Marketing sites and service websites',
        'Responsive page systems',
        'CMS-ready content structures',
        'Conversion-focused layouts',
        'Clear technical SEO foundations',
        'Launch-ready QA and polish',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Website Optimization',
      description: 'Speed, clarity, and technical cleanup that helps your current website feel sharper and convert better.',
      image: photos.optimization,
      features: [
        'Performance and page speed improvements',
        'UX friction reduction',
        'Analytics and behavior review',
        'On-page SEO improvements',
        'Conversion path cleanup',
        'Accessibility and responsiveness fixes',
      ],
    },
    {
      icon: MonitorSmartphone,
      title: 'Web Applications',
      description: 'Client portals, dashboards, and internal tools that bring together design clarity and practical functionality.',
      image: photos.webApplication,
      features: [
        'Dashboards and custom workflows',
        'Admin and client-facing portals',
        'Scalable frontend architecture',
        'Integrated APIs and data views',
        'Secure auth flows',
        'Long-term maintainability',
      ],
      highlighted: true,
    },
  ]

  const mobileServices = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile apps designed to feel intuitive, useful, and smooth in real-world use.',
      image: photos.mobileApps,
      features: [
        'iOS and Android-ready experiences',
        'User-friendly interface flows',
        'Feature planning and prototyping',
        'Account, content, and notification flows',
        'Testing across screen sizes',
        'Launch support and iteration',
      ],
    },
    {
      icon: Layers,
      title: 'Mobile Product UX',
      description: 'Interface systems and user journeys that help mobile products feel trustworthy from the first tap.',
      image: photos.mobileUx,
      features: [
        'User flow design',
        'Wireframes and high-fidelity screens',
        'Interaction and feedback states',
        'Design system alignment',
        'Usability improvements',
        'Handoff-ready specs',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Product Growth Support',
      description: 'Post-launch iteration focused on onboarding, retention, and measurable product improvements.',
      image: photos.productGrowth,
      features: [
        'Behavior-based refinement',
        'Feature prioritization',
        'Performance monitoring',
        'Funnel review',
        'Experiment-ready screens',
        'Continuous product tuning',
      ],
    },
  ]

  const designServices = [
    {
      icon: Palette,
      title: 'UI Design',
      description: 'Clean, modern interfaces that make your brand feel premium, capable, and easy to trust.',
      image: photos.uiDesign,
      features: [
        'Landing page and website UI',
        'Reusable visual systems',
        'Clear hierarchy and spacing',
        'Brand-consistent components',
        'Developer-friendly files',
        'Responsive layouts',
      ],
    },
    {
      icon: BarChart3,
      title: 'UX Design',
      description: 'Journey mapping and interface decisions that reduce confusion and guide people toward action.',
      image: photos.uxDesign,
      features: [
        'User journey design',
        'Wireframes and content structure',
        'Navigation and information architecture',
        'Prototype-ready concepts',
        'Usability-minded decisions',
        'Conversion-oriented flow design',
      ],
    },
    {
      icon: Shield,
      title: 'Design QA & Accessibility',
      description: 'Polish and validation work that makes the final interface easier to use for more people.',
      image: photos.accessibility,
      features: [
        'Readable contrast and type hierarchy',
        'Keyboard and device-friendly patterns',
        'Consistent states and behaviors',
        'Responsive behavior checks',
        'Accessibility-minded refinement',
        'Launch readiness review',
      ],
    },
  ]

  return (
    <MainLayout>
      <Hero
        title="Web, Mobile, Optimization, and Design"
        subtitle="What We Build"
        description="We create web applications and websites, mobile apps, website optimization improvements, and UI/UX design systems that help brands look better and perform better."
        backgroundImage={photos.sectionServices}
      />

      <section className="bg-slate-950 py-14">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: 'Focused outcomes',
                description: 'We build digital products that move faster, feel premium, and perform with confidence.',
              },
              {
                title: 'Clear process',
                description: 'From strategy to launch, every step is organized around measurable business value.',
              },
              {
                title: 'Teal-first polish',
                description: 'Consistent visual systems, contrast, and motion that make your brand feel modern.',
              },
            ].map(item => (
              <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-white shadow-[0_18px_45px_rgba(14,165,164,0.18)]">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-200/85">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-accent">Web</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-slate-950 sm:text-4xl">Websites & web applications</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              From polished marketing sites to custom web platforms, we build digital products that are fast, dependable, and easier for customers to use.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {webServices.map((service, idx) => (
              <ServiceCard
                key={idx}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
                features={service.features}
                highlighted={service.highlighted}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950 py-16">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-accent">Mobile</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-white sm:text-4xl">Mobile app development</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
              We design and build mobile experiences that feel intuitive, consistent, and ready for real users instead of just demos.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {mobileServices.map((service, idx) => (
              <ServiceCard
                key={idx}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-accent">Design</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-slate-950 sm:text-4xl">UI/UX design & optimization</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              Better design is not just visual. We improve clarity, speed, hierarchy, and user flow so the entire experience feels more welcoming.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {designServices.map((service, idx) => (
              <ServiceCard
                key={idx}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white py-16">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-accent">Process</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-black sm:text-4xl">How projects move</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            {['Discovery', 'Design', 'Build', 'Deploy'].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="rounded-lg border border-black/10 bg-white p-6 shadow-[0_18px_45px_rgba(20,20,20,0.05)]">
                  <div className="mb-4 text-sm font-extrabold text-accent">0{idx + 1}</div>
                  <h3 className="text-lg font-extrabold text-black">{step}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16">
        <div className="mx-auto max-w-[960px] px-5 text-center sm:px-8 lg:px-12">
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-teal-600 to-cyan-600 p-10 text-white shadow-[0_40px_100px_rgba(14,165,164,0.25)]">
            <p className="text-sm uppercase tracking-[0.28em] text-teal-100">Ready to partner?</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
              Build a standout digital product together.
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-lg leading-8 text-teal-100/90">
              We help brands move faster with polished websites, apps, and design systems that customers trust.
            </p>
            <a href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100">
              Start a New Project
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

