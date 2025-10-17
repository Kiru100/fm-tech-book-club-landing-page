import React from 'react'
import ReviewMemberShipOptions from '../ReviewMemberShipOptions';
import Link from 'next/link';
import Image from 'next/image';
import logo_bluesky from '@/app/assets/images/logo-bluesky.svg';
import logo_linkedin from '@/app/assets/images/logo-linkedin.svg';

function Footer() {
    return (
        <div className="mt-16 bg-tbc-neutral-900 bg-square-background-dark rounded-t-2xl pt-12 px-4 md:p-8">
            <div>
                <h2 className="text-tbc-neutral-100 font-martian-mono-semibold leading-[130%] -tracking-[2px] text-[2.125rem] md:text-center">Ready to debug your reading list?</h2>
            </div>
            <div className="mt-10 display-grid justify-items-center">
                <ReviewMemberShipOptions mode="dark" />
            </div>
            <div className="flex flex-col mt-16 py-6 px-8 items-center gap-y-4 border-t border-tbc-neutral-700 md:justify-between md:flex-row">
                <p className="text-tbc-neutral-100 font-martian-mono-normal leading-[120%] -tracking-[1px] text-sm">© 2024 – Tech Book Club</p>
                <div className="flex flex-row gap-x-6 ">
                    <Link href="/"><Image src={logo_bluesky} alt="Blue Sky Logo" height={22} width={22} /></Link>
                    <Link href="/"><Image src={logo_linkedin} alt="Linked In Logo" height={22} width={22} /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;
