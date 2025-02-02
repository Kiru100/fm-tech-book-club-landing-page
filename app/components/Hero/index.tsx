import Image from 'next/image'
import React from 'react'
import Logo from '@/app/assets/images/logo.svg';

export default function Hero() {
    return (
        <div className="pt-6 px-4 bg-tbc-neutral-100">
            <div className=''>
                <Image src={Logo} alt="hero" />
                <div className="mt-12">
                    <h1 className="bg-text-gradient bg-clip-text text-transparent text-4xl font-martian-mono-bold leading-[120%] -tracking-[2px]">
                        Join the <br />
                        ultimate tech<br />
                        book club
                    </h1>
                    <p className="mt-6 text-xl leading-[140%] -tracking-[0.5px] font-inter-normal text-tbc-neutral-700">Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.</p>
                </div>
               
            </div>
        </div>
    )
};
