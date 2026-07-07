import React from 'react'

interface StatProps {
  number: string
  label: string
  suffix?: string
}

export const StatCard: React.FC<StatProps> = ({ number, label, suffix }) => {
  return (
    <div className="rounded-lg border border-black/10 bg-white p-6 text-center shadow-[0_18px_45px_rgba(20,20,20,0.05)]">
      <div className="mb-2 text-4xl font-extrabold tracking-[-0.02em] text-black md:text-5xl">
        {number}
        {suffix && <span className="text-accent">{suffix}</span>}
      </div>
      <p className="text-sm font-semibold text-black/58">{label}</p>
    </div>
  )
}
