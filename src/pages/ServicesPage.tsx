import React from 'react'
import { BarChart3, Code2, Layers, MonitorSmartphone, Palette, RefreshCw, Shield, Smartphone, TrendingUp } from 'lucide-react'
import { Hero } from '../components/Hero'
import { ServiceCard } from '../components/ServiceCard'
import { MainLayout } from '../layouts'

const photos = {
  webDevelopment: 'https://images.pexels.com/photos/12899161/pexels-photo-12899161.jpeg?cs=srgb&dl=pexels-mizunokozuki-12899161.jpg&fm=jpg',
  optimization: 'https://images.pexels.com/photos/34069/pexels-photo.jpg?cs=srgb&dl=pexels-negativespace-34069.jpg&fm=jpg',
  mobileApps: 'https://images.pexels.com/photos/4565770/pexels-photo-4565770.jpeg?cs=srgb&dl=pexels-plann-2999237-4565770.jpg&fm=jpg',
  uiux: 'https://images.pexels.com/photos/6322367/pexels-photo-6322367.jpeg?cs=srgb&dl=pexels-ai25studioai-6322367.jpg&fm=jpg',
  accessibility: 'https://images.pexels.com/photos/10567167/pexels-photo-10567167.jpeg?cs=srgb&dl=pexels-ron-lach-10567167.jpg&fm=jpg',
}

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
      image: photos.webDevelopment,
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
      image: photos.uiux,
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
      image: photos.optimization,
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
      image: photos.uiux,
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
      image: photos.uiux,
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
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="section-title mb-4 text-4xl font-semibold text-[#101d2d]">Web Development & Web Applications</h2>
            <p className="max-w-3xl text-xl text-[#617080]">
              From polished marketing sites to custom web platforms, we build digital products that are fast, dependable, and easier for customers to use.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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

      <section className="bg-[#f6f8fb] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="section-title mb-4 text-4xl font-semibold text-[#101d2d]">Mobile App Development</h2>
            <p className="max-w-3xl text-xl text-[#617080]">
              We design and build mobile experiences that feel intuitive, consistent, and ready for real users instead of just demos.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="section-title mb-4 text-4xl font-semibold text-[#101d2d]">UI/UX Design & Optimization</h2>
            <p className="max-w-3xl text-xl text-[#617080]">
              Better design is not just visual. We improve clarity, speed, hierarchy, and user flow so the entire experience feels more welcoming.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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

      <section className="border-t border-[#dce3eb] bg-[#f6f8fb] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-16 text-center text-4xl font-semibold text-[#101d2d]">Our Process</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {['Discovery', 'Design', 'Build', 'Deploy'].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="rounded-2xl border border-[#dce3eb] bg-white p-8 text-center shadow-[0_18px_50px_rgba(16,29,45,0.08)]">
                  <div className="mb-2 text-3xl font-bold text-[#ff7a1a]">0{idx + 1}</div>
                  <h3 className="text-lg font-semibold text-[#101d2d]">{step}</h3>
                </div>
                {idx < 3 && <div className="absolute top-1/2 -right-3 hidden h-0.5 w-6 bg-[#ff7a1a] md:block"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101d2d] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Let's build something people enjoy using</h2>
          <p className="mb-8 text-lg text-[#c7d2df]">
            Whether it is a web app, mobile app, faster website, or better UI/UX, we can shape it into something clearer and more compelling.
          </p>
          <a href="/contact" className="btn-primary inline-flex items-center gap-2">
            Get Started Today
          </a>
        </div>
      </section>
    </MainLayout>
  )
}
