import React from 'react'
import { CheckCircle2 } from 'lucide-react'

interface FormInputProps {
  label: string
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  placeholder?: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  options?: { value: string; label: string }[]
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  options,
}) => {
  const baseClasses = 'w-full rounded-md border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder-black/35 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent-50'

  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-black">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          rows={5}
          className={baseClasses}
        />
      ) : type === 'select' && options ? (
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          className={baseClasses}
        >
          <option value="">Select an option</option>
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          className={baseClasses}
        />
      )}
    </div>
  )
}

interface SuccessMessageProps {
  title: string
  message: string
  details?: string[]
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({
  title,
  message,
  details,
}) => {
  return (
    <div className="rounded-lg border border-black/10 bg-white p-8 text-center shadow-[0_18px_45px_rgba(20,20,20,0.06)]">
      <div className="mb-6 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-50 text-accent">
          <CheckCircle2 size={34} />
        </div>
      </div>
      <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-black">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-base leading-7 text-black/62">{message}</p>
      {details && (
        <div className="mx-auto mt-6 grid max-w-md gap-3 text-left">
          {details.map(detail => (
            <p key={detail} className="flex items-start gap-3 text-sm leading-6 text-black/68">
              <CheckCircle2 size={17} className="mt-1 shrink-0 text-accent" />
              {detail}
            </p>
          ))}
        </div>
      )}
      <a href="/" className="mt-8 inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-accent">
        Back to Home
      </a>
    </div>
  )
}
