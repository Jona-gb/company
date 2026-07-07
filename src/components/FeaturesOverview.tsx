import React from 'react'
import { CheckCircle2, Code2, Palette, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Engineering',
    description: 'Fast, maintainable websites and platforms with clear user flows.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Products',
    description: 'Mobile experiences designed around practical daily use.',
  },
  {
    icon: Palette,
    title: 'Brand & Interface Design',
    description: 'Visual systems that make your business feel polished and trustworthy.',
  },
]

export const FeaturesOverview: React.FC = () => {
  return (
    <section id="features" className="bg-white py-16">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="mb-10 max-w-2xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-orange-600">Capabilities</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-black sm:text-4xl">Digital support with a clear point of view</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map(service => (
            <article key={service.title} className="rounded-lg border border-black/10 bg-white p-6 shadow-[0_18px_45px_rgba(20,20,20,0.05)]">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-orange-50 text-orange-600">
                <service.icon size={22} />
              </div>
              <h3 className="text-lg font-extrabold text-black">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/62">{service.description}</p>
              <p className="mt-5 flex items-center gap-2 text-sm font-bold text-black">
                <CheckCircle2 size={17} className="text-orange-600" />
                Planned, designed, and delivered carefully
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
