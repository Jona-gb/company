import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-5">
      <div className="max-w-md rounded-lg border border-[#ece8e2] bg-white p-8 text-center shadow-[0_18px_45px_rgba(20,20,20,0.06)]">
        <div className="mb-6 text-7xl font-extrabold tracking-[-0.04em] text-orange-600">404</div>
        <h1 className="mb-4 text-3xl font-extrabold tracking-[-0.02em] text-black">Page Not Found</h1>
        <p className="mb-8 text-base leading-7 text-black/62">
          Oops! The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Link to="/" className="inline-flex items-center rounded-md bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

