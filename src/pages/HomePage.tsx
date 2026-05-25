import React from 'react'
import { ArrowRight, CheckCircle2, Code2, MonitorSmartphone, MoveRight, PlayCircle, ShieldCheck, Smartphone, Users, Palette } from 'lucide-react'
import { MainLayout } from '../layouts'

const photos = {
  webDevelopment: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
  optimization: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=800&h=600&fit=crop',
  mobileApps: 'https://images.unsplash.com/photo-1512941691920-e872e0838a17?w=800&h=600&fit=crop',
  uiux: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
}

const highlightCards = [
  {
    title: 'Web development & web applications',
    tone: 'bg-[#ff7a1a]',
    text: 'Custom business websites, portals, and web apps that look polished and work hard.',
  },
  {
    title: 'Mobile app development',
    tone: 'bg-[linear-gradient(135deg,#f0f4f8_0%,#d8e2ef_100%)]',
    text: 'Cross-platform mobile experiences designed to feel smooth, useful, and easy to trust.',
  },
  {
    title: 'Website optimization & UI/UX design',
    tone: 'bg-[#ff7a1a]',
    text: 'Faster sites, clearer journeys, and stronger visual systems that help visitors convert.',
  },
]

const serviceCards = [
  { title: 'Web development', icon: Code2, image: photos.webDevelopment },
  { title: 'Web application', icon: MonitorSmartphone, image: photos.optimization },
  { title: 'Mobile app development', icon: Smartphone, image: photos.mobileApps },
  { title: 'UI & UX design', icon: Users, image: photos.uiux },
]

const metrics = [
  { value: '100', label: 'Projects completed' },
  { value: '50', label: 'Happy customers' },
  { value: '960', label: 'Support tickets solved' },
  { value: '95', label: 'Project deployments' },
]

const team = [
  { name: 'Eliezer Ahorlu', role: 'Web Application Lead', image: '/assets/IMG_20260524_221102_275.jpg' },
  { name: 'Jonathan Gbekli', role: 'Mobile Product Designer', image: '/assets/IMG-20250202-WA0012.jpg' },
  { name: 'Marco Diaz', role: 'UX Optimization Specialist', image: 'https://images.unsplash.com/photo-1519085360771-9852dc00d837?w=400&h=400&fit=crop' },
]

export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <section className="border-b border-[#dfe5ec] bg-white">
        <div className="mx-auto max-w-[1240px] px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6b7887] md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <span>Web applications</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#ff7a1a] md:block" />
              <span>Mobile apps</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#ff7a1a] md:block" />
              <span>UI / UX design</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span>huzzghana@gmail.com</span>
              <span>+233 203 530 777</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="overflow-hidden rounded-[24px] border border-[#d7dee7] bg-[#0f1d2d] shadow-[0_24px_70px_rgba(11,26,43,0.16)]">
            <div className="relative min-h-[520px] overflow-hidden sm:min-h-[560px]">
              <img
                src={photos.webDevelopment}
                alt="Web development team collaborating in an office"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,29,45,0.92)_0%,rgba(15,29,45,0.78)_42%,rgba(15,29,45,0.28)_100%)]" />

              <div className="relative z-10 flex min-h-[520px] items-center px-5 py-10 sm:min-h-[560px] sm:px-8 lg:px-12">
                <div className="max-w-[610px]">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/78 hover:bg-white/10 transition-colors">
                    <ShieldCheck size={15} className="text-[#ff7a1a]" />
                    Welcoming digital services
                  </div>

                  <h1 className="mt-5 max-w-[560px] text-[40px] font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl tracking-[-1px]">
                    Web, Mobile, UX <span className="text-[#ff7a1a] inline-block">&amp;</span> Optimization
                  </h1>
                  <p className="mt-5 max-w-[560px] text-base leading-8 text-[#d7e0ea] sm:text-lg">
                    We design and build web applications, websites, mobile apps, and better user experiences that make your brand feel more approachable and more capable.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a href="/contact" className="btn-primary inline-flex items-center justify-center gap-2 group">
                      Get started now
                      <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                    </a>
                    <a href="/services" className="btn-dark inline-flex items-center justify-center gap-2 group hover:bg-white/15 transition-colors">
                      Explore services
                      <MoveRight size={17} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>

                  <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                    <div className="group">
                      <div className="text-3xl sm:text-4xl font-bold text-[#ff7a1a] transition-transform group-hover:scale-105">15+</div>
                      <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.15em] text-white/60 font-medium">Projects</p>
                    </div>
                    <div className="group">
                      <div className="text-3xl sm:text-4xl font-bold text-[#ff7a1a] transition-transform group-hover:scale-105">98%</div>
                      <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.15em] text-white/60 font-medium">Client Satisfaction</p>
                    </div>
                    <div className="group">
                      <div className="text-3xl sm:text-4xl font-bold text-[#ff7a1a] transition-transform group-hover:scale-105">4+</div>
                      <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.15em] text-white/60 font-medium">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-gradient-to-b from-white via-white to-[#f8fafb] pb-24 pt-32 sm:pt-36 lg:pt-40">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {highlightCards.map((card, idx) => {
              const icons = [Code2, Smartphone, Palette];
              const Icon = icons[idx];
              return (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#e5e7eb]"
                >
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-gradient-to-br from-[#ff7a1a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex rounded-lg bg-gradient-to-br from-[#ff7a1a]/10 to-[#ff7a1a]/5 p-3 mb-4">
                      <Icon className="h-6 w-6 text-[#ff7a1a]" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-[#101d2d] transition-colors group-hover:text-[#ff7a1a]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#617080]">
                      {card.text}
                    </p>
                    <a
                      href="/services"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ff7a1a] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:gap-3"
                    >
                      Learn more
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="relative rounded-[28px] bg-[#f3f6fa] p-6 shadow-[0_24px_60px_rgba(13,31,48,0.08)] sm:p-8">
            <div className="absolute -left-3 top-16 h-40 w-40 rounded-full border-[14px] border-[#111f2f]" />
            <div className="relative z-10 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="min-h-[300px] overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#102033_0%,#28405a_100%)] p-5 text-white">
                <div className="-m-5 mb-5 h-40 overflow-hidden">
                  <img src={photos.uiux} alt="Design team working on UI and UX ideas" className="h-full w-full object-cover opacity-80" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/62">Case spotlight</p>
                <div className="mt-6 rounded-[18px] bg-white/10 p-5 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-[#ff7a1a]" />
                    <div>
                      <p className="font-semibold">Experience team</p>
                      <p className="text-sm text-white/70">UI / UX direction</p>
                    </div>
                  </div>
                  <p className="mt-8 text-4xl font-semibold">87,450</p>
                  <p className="mt-2 text-sm text-white/72">Monthly supported interactions</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-36 overflow-hidden rounded-[22px]">
                  <img src={photos.mobileApps} alt="Mobile app interface on a phone" className="h-full w-full object-cover" />
                </div>
                <div className="h-36 overflow-hidden rounded-[22px]">
                  <img src={photos.optimization} alt="Analytics screen for website optimization" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff7a1a]">About our company</p>
            <h2 className="mt-4 max-w-[540px] text-4xl font-semibold leading-tight text-[#101d2d] sm:text-5xl">
              Professional design and development for growing brands
            </h2>
            <p className="mt-6 max-w-[620px] text-base leading-8 text-[#617080]">
              We help teams launch clearer websites, smarter web apps, better mobile experiences, and more usable interfaces. The goal is strong delivery without making the brand feel cold or overly technical.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Web application strategy',
                'Mobile product planning',
                'Website optimization audits',
                'UI / UX design systems',
              ].map(item => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-[#f6f8fb] p-4">
                  <CheckCircle2 size={18} className="mt-0.5 text-[#ff7a1a]" />
                  <span className="text-sm font-medium text-[#1a2b3f]">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                Discover more
                <ArrowRight size={16} />
              </a>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-[#101d2d]">
                  <img src={photos.webDevelopment} alt="Project lead" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#101d2d]">Mark Johnson</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#7f8b99]">Lead consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] py-8">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[28px] border border-[#d9e1ea] p-6 sm:p-8 lg:p-10">
            <img src={photos.webDevelopment} alt="Developers collaborating on a laptop" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,29,45,0.7),rgba(16,29,45,0.28),rgba(255,122,26,0.22))]" />
            <div className="relative flex min-h-[260px] items-center justify-center">
              <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#ff7a1a] shadow-[0_18px_40px_rgba(16,29,45,0.16)] transition hover:scale-105">
                <PlayCircle size={32} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff7a1a]">What we're offering</p>
            <h2 className="mx-auto mt-4 max-w-[620px] text-4xl font-semibold leading-tight text-[#101d2d] sm:text-5xl">
              Digital services that look polished and feel welcoming
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map(card => (
              <article key={card.title} className="overflow-hidden rounded-[26px] border border-[#dce3eb] bg-white shadow-[0_18px_50px_rgba(13,31,48,0.1)]">
                <div className="h-52 overflow-hidden">
                  <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="rounded-2xl bg-[#fff1e7] p-3">
                      <card.icon size={22} className="text-[#ff7a1a]" />
                    </div>
                    <span className="rounded-full bg-[#ff7a1a] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      Service
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold text-[#101d2d]">{card.title}</h3>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-[#617080]">
                      Thoughtful planning, strong execution, and visuals that help the service feel approachable from the first scroll.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map(metric => (
              <article key={metric.label} className="rounded-[26px] border border-[#dde4ec] bg-[#fbfcfd] px-6 py-8 text-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#cad4df] text-4xl font-semibold text-[#ff7a1a]">
                  {metric.value}
                </div>
                <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-[#5f6d7d]">{metric.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#dce3eb] bg-[#f6f8fb] py-16">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff7a1a]">Expert team</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#101d2d] sm:text-5xl">
                A team that makes digital work feel more human
              </h2>
              <p className="mt-5 max-w-[460px] text-base leading-8 text-[#617080]">
                Our consultants, designers, and developers combine technical execution with interface thinking so the end result is effective without feeling sterile.
              </p>
              <a href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#101d2d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#16283c]">
                Book your consultation
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {team.map((member) => (
                <article key={member.name} className="overflow-hidden rounded-[24px] border border-[#dce3eb] bg-white shadow-[0_14px_40px_rgba(17,36,57,0.08)]">
                  <div className="h-52 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-[#101d2d]">{member.name}</h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[#ff7a1a]">{member.role}</p>
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
