import React from 'react'

interface StatProps {
  number: string
  label: string
  suffix?: string
}

export const StatCard: React.FC<StatProps> = ({ number, label, suffix }) => {
  return (
    <div className="glass-dark glow-border rounded-xl p-8 text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {number}
        {suffix && <span className="text-slate-300">{suffix}</span>}
      </div>
      <p className="text-slate-400">{label}</p>
    </div>
  )
}
