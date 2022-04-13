import Head from 'next/head'
import '../styles/navbar.module.css'

export default function Home() {
  return (
    <div className='body'>
      <Head>
        <title>Good Car</title>
      </Head>

      <div className='flex justify-center text-center flex-col'>
      <h1 className='mt-20 text-3xl'>Welcome to Next JS</h1>
      <br/>
    </div>
    </div>
  )
}
