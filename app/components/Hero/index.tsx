import Image from 'next/image'
import React from 'react'
import Logo from '@/app/assets/images/logo.svg';

export default function Hero() {
    return (
        <div className="pt-6 px-4">
            <div className=''>
                <Image src={Logo} alt="hero" />
               
            </div>
        </div>
    )
};
