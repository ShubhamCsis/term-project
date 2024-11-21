import React from 'react'

const Hero = () => {
  return (
    <div className='h-[75vh] flex'>
        <div className='w-3/6 flex flex-col items-start justify-center'>
            <h1 className=' text-6xl font-semibold text-white-100'>
                Discover You Love for Reading
            </h1>
            <p className='mt-4 text-xl text-zinc-300'>
                We will help you keep track of your books
            </p>
            <div className='mt-8'>
            <button className='text-white text-2xl font-semibold border border-white px-10 py-2 hover:bg-zinc-800 transition-duration-300 rounded-full'>
                Discover Books
            </button>
            </div>
        </div>
        <div className='w-3/6 h-auto flex items-center justify-center' >
            <img src="./banner.png" alt="" />
        </div>
    </div>
  )
}

export default Hero;