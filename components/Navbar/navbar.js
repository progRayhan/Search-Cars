import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div>
    <nav className='bg-black'>
        <ul className='flex p-5 justify-around'>
        <li className='list-none inline'>
            <Link href="/Posts/HomePage">
                <a className='text-white block'>Home</a>
            </Link>
        </li>
        <li className='list-none inline'>
            <Link href="/Posts/AboutPage">
            <a className='text-white block'>About</a>
            </Link>
        </li>
        {/* <li className='list-none inline'>
            <Link href="/Posts/CarsPage">
            <a className='text-white block'>Cars</a>
            </Link>
        </li> */}
        <li className='list-none inline'>
            <Link href="/Posts/UploadCarPage">
            <a className='text-white block'>UploadCar</a>
            </Link>
        </li>
        <li className='list-none inline'>
            <Link href="/Posts/Car">
            <a className='text-white block'>Car</a>
            </Link>
        </li>
        <li className='list-none inline'>
            <Link href="/Posts/SearchCar">
            <a className='text-white block'>SearchCar</a>
            </Link>
        </li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar