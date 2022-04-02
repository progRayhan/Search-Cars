import React from 'react'
import Link from 'next/link'

function AboutPage() {
  return (
    <div className='flex justify-center text-center flex-col'>
      <h1 className='text-center mt-10 text-3xl'>About Us</h1>
      <h1 className='text-center mt-10 bold text-2xl'>Worlds Largest Automotive Marketplace</h1>
      <p className='text-center mt-10'>Bhalogari.com is the leading and most reliable online auto marketplace launched 
        on September 15, 2017. Headquarter is in Dhaka(Bangladesh), its mission is to bring 
        ease and delight in car buying and selling process Bhalogari offers a bouquet of 
        reliable tools and services to help car consumers decide on buying the right car, 
        at the right price and from the right partner. Innovative and prompt technical 
        solutions, certified partners, genuine product listing with authentic information 
        are at the core of Bhalogari.com. The platform carries rich automotive content 
        such as expert reviews, detailed specs and prices, comparisons as well as videos 
        and pictures of all car brands and models available in Bangladesh. Our vision is
         to construct a transparent ecosystem for consumers and carmanufacturers, dealers,
          re-sellers to ensure most reliable and enjoyable car buying and selling experience.</p>

      <Link href="/" passHref>
      <button className='mt-10'>Go back to home</button>
      </Link>
    </div>
  )
}

export default AboutPage