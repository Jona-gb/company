import React from 'react'
import { BarChart3, Code2, Layers, MonitorSmartphone, Palette, RefreshCw, Shield, Smartphone, TrendingUp } from 'lucide-react'
import AccentPanel from '../components/AccentPanel'
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
        <AccentPanel
          eyebrow="Ready to partner?"
          title={<>Build a standout digital product together.</>}
          description={<>We help brands move faster with polished websites, apps, and design systems that customers trust.</>}
          ctaText="Start a New Project"
          href="/contact"
        />
      </section>
    </MainLayout>
  )
}

