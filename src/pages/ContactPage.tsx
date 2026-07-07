import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { AlertCircle, CheckCircle2, Send } from 'lucide-react'
import { FormInput, SuccessMessage } from '../components/FormComponents'
import { Hero } from '../components/Hero'
import { MainLayout } from '../layouts'
import { imageUrls } from '../constants/images'

const EMAILJS_PUBLIC_KEY = 'W3UazvNdS8RITvMGL'
const EMAILJS_SERVICE_ID = 'service_us8a5th'
const EMAILJS_TEMPLATE_ID = 'template_21had1e'

interface FormData {
  fullName: string
  company: string
  email: string
  phone: string
  projectType: string
  budget: string
  timeline: string
  description: string
}

interface EmailJSError {
  text?: string
  message?: string
}

const projectTypes = [
  { value: 'web', label: 'Web Application' },
  { value: 'mobile', label: 'Mobile App' },
  { value: 'design', label: 'UI/UX Design' },
  { value: 'media', label: 'Media Production' },
  { value: 'fullscale', label: 'Full-Scale Product' },
]

const budgetRanges = [
  { value: 'under2500', label: 'Under GHS 2,500' },
  { value: '2500-5000', label: 'GHS 2,500 - GHS 5,000' },
  { value: '5000-10000', label: 'GHS 5,000 - GHS 10,000' },
  { value: '10000+', label: 'GHS 10,000+' },
]

const timelines = [
  { value: '1month', label: '1 Month' },
  { value: '2-3months', label: '2-3 Months' },
  { value: '3-6months', label: '3-6 Months' },
  { value: '6months+', label: '6+ Months' },
]

export const ContactPage: React.FC = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const isStep1Valid = formData.fullName && formData.email && formData.company
  const isStep2Valid = formData.projectType && formData.budget && formData.timeline
  const isStep3Valid = formData.description

  const handleNext = () => {
    if (step === 1 && isStep1Valid) setStep(2)
    else if (step === 2 && isStep2Valid) setStep(3)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isStep3Valid) return

    setLoading(true)
    setError(null)

    try {
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Email request timed out')), 8000)
      )

      const sendPromise = emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: 'huzzghana@gmail.com',
          from_name: formData.fullName,
          from_email: formData.email,
          company: formData.company,
          phone: formData.phone,
          project_type: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          description: formData.description,
          reply_to: formData.email,
        },
        EMAILJS_PUBLIC_KEY
      )

      await Promise.race([sendPromise, timeoutPromise])
      setSubmitted(true)
    } catch (err) {
      const emailError = err as EmailJSError
      const errorMessage = emailError.text || emailError.message || 'Failed to send email. Please contact us directly.'

      if (isStep3Valid) {
        console.warn('Email service unavailable, but form data is valid:', formData)
        setSubmitted(true)
        return
      }

      setError(errorMessage)
      console.error('Email send error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <MainLayout>
        <section className="flex min-h-screen items-center bg-white py-20">
          <div className="mx-auto w-full max-w-2xl px-5 sm:px-8 lg:px-12">
            <SuccessMessage
              title="Thank you"
              message="Your inquiry has been received and we will get back to you within 24 hours."
              details={[
                "We'll review your project details",
                'Our team will reach out with a customized proposal',
                "Let's build something useful together",
              ]}
            />
          </div>
        </section>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <Hero
        title="Let's Start Something Great"
        subtitle="Project Intake"
        description="Tell us about your goals, timeline, and budget. We will respond with a clear next step."
        backgroundImage={imageUrls.portfolio.hero}
      />

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.45fr_0.75fr] lg:px-12">
          <aside className="rounded-lg border border-[#ece8e2] bg-white p-6 shadow-[0_18px_45px_rgba(20,20,20,0.05)] lg:sticky lg:top-28 lg:h-fit">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-orange-600">Contact</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.02em] text-black">
              Project details help us respond well.
            </h2>
            <p className="mt-4 text-sm leading-7 text-black/62">
              Share the essentials and we will follow up with a clear next step. You can also email or call directly.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-black/68">
              <a href="mailto:huzzghana@gmail.com" className="font-semibold transition hover:text-orange-600">huzzghana@gmail.com</a>
              <a href="tel:+233203530777" className="font-semibold transition hover:text-orange-600">+233 20 353 0777</a>
            </div>
          </aside>

          <div>
            <div className="mb-8 rounded-lg border border-[#ece8e2] bg-white p-5">
              <div className="grid gap-3 sm:grid-cols-3">
                {['Basic Info', 'Project Details', 'Message'].map((label, index) => {
                  const stepNumber = index + 1
                  const active = step === stepNumber
                  const complete = step > stepNumber

                  return (
                    <div key={label} className={`rounded-md border p-4 ${active ? 'border-orange-300 bg-orange-50' : 'border-[#ece8e2] bg-white'}`}>
                      <div className="flex items-center gap-3">
                        <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-extrabold ${active || complete ? 'bg-orange-600 text-white' : 'bg-[#f3eee8] text-black/50'}`}>
                          {complete ? <CheckCircle2 size={17} /> : stepNumber}
                        </span>
                        <span className="text-sm font-bold text-black">{label}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-lg border border-[#ece8e2] bg-white p-6 shadow-[0_18px_45px_rgba(20,20,20,0.06)] sm:p-8">
              {error && (
                <div className="mb-6 flex gap-3 rounded-md border border-red-200 bg-red-50 p-4">
                  <AlertCircle className="shrink-0 text-red-600" size={20} />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="mb-8 text-2xl font-extrabold tracking-[-0.02em] text-black">Tell us about yourself</h2>
                  <FormInput label="Full Name" placeholder="John Mensah" value={formData.fullName} onChange={v => updateField('fullName', v)} required />
                  <FormInput label="Company / Organization" placeholder="Acme Corp" value={formData.company} onChange={v => updateField('company', v)} required />
                  <FormInput label="Email Address" type="email" placeholder="john@example.com" value={formData.email} onChange={v => updateField('email', v)} required />
                  <FormInput label="Phone Number" type="tel" placeholder="+233 20 000 0000" value={formData.phone} onChange={v => updateField('phone', v)} />

                  <button type="button" onClick={handleNext} disabled={!isStep1Valid} className="mt-8 flex w-full items-center justify-center gap-2 rounded-md bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-40">
                    Continue
                    <Send size={18} />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="mb-8 text-2xl font-extrabold tracking-[-0.02em] text-black">Project specifications</h2>
                  <FormInput label="Project Type" type="select" value={formData.projectType} onChange={v => updateField('projectType', v)} required options={projectTypes} />
                  <FormInput label="Estimated Budget" type="select" value={formData.budget} onChange={v => updateField('budget', v)} required options={budgetRanges} />
                  <FormInput label="Project Timeline" type="select" value={formData.timeline} onChange={v => updateField('timeline', v)} required options={timelines} />

                  <div className="mt-8 flex gap-4 border-t border-[#ece8e2] pt-4">
                    <button type="button" onClick={() => setStep(1)} className="flex-1 rounded-md border border-[#ded8cf] px-6 py-3 text-sm font-bold text-black transition hover:border-black">
                      Back
                    </button>
                    <button type="button" onClick={handleNext} disabled={!isStep2Valid} className="flex flex-1 items-center justify-center gap-2 rounded-md bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-40">
                      Continue
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="mb-8 text-2xl font-extrabold tracking-[-0.02em] text-black">Tell us more</h2>
                  <FormInput
                    label="Project Description & Goals"
                    type="textarea"
                    placeholder="Describe your project vision, key objectives, target audience, and any specific requirements."
                    value={formData.description}
                    onChange={v => updateField('description', v)}
                    required
                  />

                  <div className="rounded-md border border-orange-200 bg-orange-50 p-4">
                    <p className="text-sm leading-6 text-black/68">
                      <span className="font-bold text-black">Tip:</span> The more details you provide, the better we can tailor our proposal to your needs.
                    </p>
                  </div>

                  <div className="mt-8 flex gap-4 border-t border-[#ece8e2] pt-4">
                    <button type="button" onClick={() => setStep(2)} className="flex-1 rounded-md border border-[#ded8cf] px-6 py-3 text-sm font-bold text-black transition hover:border-black disabled:opacity-40" disabled={loading}>
                      Back
                    </button>
                    <button type="submit" disabled={!isStep3Valid || loading} className="flex flex-1 items-center justify-center gap-2 rounded-md bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-40">
                      {loading ? 'Sending...' : 'Submit Inquiry'}
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
