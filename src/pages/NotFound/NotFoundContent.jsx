import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundContent = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);  
  };

  return (
    <div className='grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8'>
      <div className="text-center">
        <p className="text-3xl font-semibold text-indigo-400">404</p>
        <h1 className="mt-4 text-3l font-semibold tracking-tight text-balance text-white sm:text-7xl">Page not found</h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button className="btn btn-primary" onClick={handleGoBack}>
            Go back
          </button>
        </div>
      </div>
    </div>

  )
}

export default NotFoundContent