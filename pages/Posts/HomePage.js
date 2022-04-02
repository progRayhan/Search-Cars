import Link from 'next/link'
import React from 'react'

function HomePage() {
  return (
    <div className='flex justify-center text-center flex-col'>
      <h1 className='mt-20 text-3xl'>Welcome to Next JS</h1>
      <br/>
      <Link href="/" passHref>
      <button>Go back to home</button>
      </Link>
    </div>
  )
}

export default HomePage