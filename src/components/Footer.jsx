import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
<footer className='border-t mt-2'>
    <div className='container mx-auto text-center'>
        <p className='font-semibold'>@All Rights Reserved</p>
        <div className='flex items-center justify-center gap-4 mt-2'>
            <div className=''>
            <p className='text-lg '><FaFacebook/></p>
            <p className='text-xs text-center'>Facebook</p>

            </div>
            <div>
            <p className='text-lg'><FaWhatsapp/></p>
            <p className='text-xs text-center'>WhatsApp</p>
            </div>
           <div>
           <p className='text-lg'><FaInstagram/></p>
           <p className='text-xs text-center'>Instagram</p>
           </div>


        </div>

    </div>
</footer>
  )
}

export default Footer