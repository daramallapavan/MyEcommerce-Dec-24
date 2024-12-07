import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import {TypeAnimation} from "react-type-animation"
const Search = () => {
  return (
    <div className='w-full min-w-[300px] lg:min-w-[420px] bg-slate-300  border h-10 rounded-lg hover:border-green-500 hover:border-1 container mx-auto'>
        <button className='flex items-center justify-center h-full px-3'>
            <IoSearchSharp size={22}/>
           <div className='text-sm px-3'>
           <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Search for "Mice"',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Search for "Hamsters"',
        1000,
        'Search for "Guinea Pigs"',
        1000,
        'Search for "Chinchillas"',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />

           </div>
        </button>
    
    </div>
  )
}

export default Search