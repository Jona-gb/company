import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-7xl font-bold gradient-text mb-6">404</div>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-lg text-slate-400 mb-8 max-w-md">
          Oops! The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
