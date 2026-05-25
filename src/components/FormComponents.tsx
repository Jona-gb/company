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
  const baseClasses = 'w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300'

  return (
    <div>
      <label className="block text-sm font-semibold text-white mb-2">
        {label}
        {required && <span className="text-indigo-400 ml-1">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          rows={4}
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
    <div className="text-center py-12">
      <div className="mb-6 flex justify-center">
        <div className="p-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full">
          <CheckCircle2 size={48} className="text-emerald-400" />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-white mb-3">{title}</h2>
      <p className="text-lg text-slate-400 mb-6">{message}</p>
      {details && (
        <div className="space-y-2 text-slate-300 mb-8">
          {details.map((detail, idx) => (
            <p key={idx} className="flex items-center justify-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              {detail}
            </p>
          ))}
        </div>
      )}
      <a href="/" className="btn-primary inline-flex items-center">
        Back to Home
      </a>
    </div>
  )
}
