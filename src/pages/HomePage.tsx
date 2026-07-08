import React from 'react'
import { ArrowRight, CheckCircle2, Code2, MonitorSmartphone, ShieldCheck, Smartphone, Users, Palette } from 'lucide-react'
import { MainLayout } from '../layouts'
import { imageUrls } from '../constants/images'

const photos = imageUrls.services



const serviceCards = [
  {
    title: 'Web Development',
    icon: Code2,
    description: 'Modern websites and platforms built for speed, accessibility, and measurable results.',
  },
  {
    title: 'Web Applications',
    icon: MonitorSmartphone,
    description: 'Enterprise-ready web apps with polished UI, clean architecture, and seamless collaboration.',
  },
  {
    title: 'Mobile Products',
    icon: Smartphone,
    description: 'Native and cross-platform apps designed for ease of use, retention, and everyday value.',
  },
  {
    title: 'UI / UX Design',
    icon: Users,
    description: 'Clear interaction systems and visual identities that feel premium without being overdesigned.',
  },
]

const team = [
  { name: 'Eliezer Ahorlu', role: 'Web Application Lead', image: imageUrls.team.eliezer },
  { name: 'Jonathan Gbekli', role: 'Mobile Product Designer', image: imageUrls.team.jonathan },
  { name: 'Godwin Homadzi', role: 'UX Optimization Specialist', image: imageUrls.team.godwin },
]

export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <section className="bg-slate-950 border-b border-white/10">
        <div className="mx-auto flex flex-col gap-4 px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            <span>Web apps</span>
            <span className="hidden h-1 w-1 rounded-full bg-accent sm:inline-block" />
            <span>Mobile products</span>
            <span className="hidden h-1 w-1 rounded-full bg-accent sm:inline-block" />
            <span>UX systems</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="mailto:huzzghana@gmail.com" className="transition hover:text-white">huzzghana@gmail.com</a>
            <a href="tel:+233203530777" className="transition hover:text-white">+233 203 530 777</a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,164,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.15),_transparent_30%)]" />
        <div className="relative mx-auto grid max-w-[1240px] gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(380px,520px)_1fr] lg:items-center lg:px-12">
          <div className="flex flex-col justify-center lg:min-h-[560px] lg:max-w-[520px]">
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-accent">Digital growth for ambitious brands</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-extrabold tracking-[-0.04em] text-white sm:mt-5 sm:text-6xl">
              Build elegant web and mobile experiences that feel trusted and easy to use.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200 sm:mt-6 sm:text-xl">
              We design, develop, and optimize digital products with attention to clarity, conversion, and long-term brand consistency.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-accent-600">
                Start a project
                <ArrowRight size={18} />
              </a>
              <a href="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:border-accent hover:bg-white/15">
                See our work
                <ArrowRight size={18} />
              </a>
            </div>

          </div>

          <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[520px] overflow-hidden rounded-[32px] bg-black shadow-[0_28px_90px_rgba(0,0,0,0.22)]">
            <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_center,_rgba(14,165,164,0.3),_rgba(14,165,164,0)_36%)] blur-3xl opacity-95" />
            <div className="pointer-events-none absolute left-[-12%] top-[18%] hidden h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.35),_transparent_68%)] blur-3xl opacity-100 lg:block" />
            <div className="pointer-events-none absolute right-[-10%] bottom-[8%] hidden h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,_rgba(20,184,166,0.22),_transparent_70%)] blur-2xl opacity-95 lg:block" />
            <img src={photos.collaboration} alt="Team collaborating on product design" className="relative h-full w-full object-cover brightness-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="relative flex h-full items-end p-8">
              <div className="rounded-3xl border border-white/15 bg-black/55 p-6 backdrop-blur-xl text-white shadow-[0_14px_40px_rgba(0,0,0,0.25)]">
                <p className="text-sm uppercase tracking-[0.22em] text-teal-200">Feature launch support</p>
                <p className="mt-4 text-2xl font-semibold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]">Launch faster with product-ready design and development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              {
                title: 'Digital strategy',
                description: 'We shape digital offerings with clear goals, measurable milestones, and strong storytelling.',
                icon: Code2,
              },
              {
                title: 'Product design',
                description: 'Design systems, interfaces, and flows that feel polished without losing simplicity.',
                icon: Palette,
              },
              {
                title: 'Optimization',
                description: 'We improve performance, accessibility, and conversion so every touchpoint works harder.',
                icon: ShieldCheck,
              },
            ].map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-[28px] border border-black/10 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-50 text-accent shadow-sm">
                  <item.icon size={24} />
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                <a href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Learn how
                  <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,164,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.15),_transparent_30%)]" />
        <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-[32px] border border-white/10 bg-white/10 p-10 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
              <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-accent">Core services</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Work that blends strong strategy with polished execution
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-200/85">
                We deliver digital products that feel calm, credible, and easy to use — from early concept to launch and ongoing improvement.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {serviceCards.map((card) => (
                <article key={card.title} className="rounded-[26px] border border-white/10 bg-white/10 p-6 text-white shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:bg-white/15">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-50 text-accent shadow-sm">
                    <card.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-200/85">{card.description}</p>
                  <a href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    Explore
                    <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-accent">Impact</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-black sm:text-5xl">
                Digital products with measurable returns
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-black/60">
                We combine user-centered design with dependable engineering so you can launch confidently and keep improving.
              </p>

            </div>

            <div className="rounded-[28px] bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-[24px] bg-white">
                  <img src={photos.optimization} alt="Optimization dashboard" className="h-full w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-[24px] bg-white">
                  <img src={photos.productGrowth} alt="Growth planning" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-accent">Team</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-black sm:text-5xl">
                A focused team anchored in strategy and craft
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-black/60">
                We stay deliberately small so every project gets senior attention and every decision stays aligned with your business goals.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {team.map((member) => (
                <article key={member.name} className="overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-black">{member.name}</h3>
                    <p className="mt-3 text-sm uppercase tracking-[0.16em] text-accent">{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
