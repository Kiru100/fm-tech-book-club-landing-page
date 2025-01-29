import Image from 'next/image'
import React from 'react'
import Logo from '@/app/assets/images/logo.svg';

export default function Hero() {
    return (
        <div className="pt-6 px-4 bg-tbc-neutral-100">
            <div className=''>
                <Image src={Logo} alt="hero" />
               <h1>
                    Join the 
                    ultimate tech 
                    book club
               </h1>
            </div>
        </div>
    )
};
