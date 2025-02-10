import Image from "next/image"
import React from "react"
import Logo from "@/app/assets/images/logo.svg";
import Link from "next/link";
import icon_arrow_down from "@/app/assets/images/icon-arrow-down.svg";
import rating_image_avatars from "@/app/assets/images/image-avatars.webp";
import image_hero_bg from "@/app/assets/images/image-hero-mobile.webp";
import icon_start from "@/app/assets/images/icon-star.svg";

export default function Hero() {
    return (
        <section className="bg-tbc-neutral-100">
            <div className="bg-square-background bg-[auto_100vh] bg-no-repeat pt-6 px-4 pb-20">
                <Image src={Logo} alt="hero" />
                <div className="mt-12">
                    <h1 className="bg-text-gradient bg-clip-text text-transparent text-4xl font-martian-mono-bold leading-[120%] -tracking-[2px]">
                        Join the <br />
                        ultimate tech<br />
                        book club
                    </h1>
                    <p className="mt-6 text-xl leading-[140%] -tracking-[0.5px] font-inter-normal text-tbc-neutral-700">Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.</p>
                </div>
                <div className="mt-8">
                    <Link href="/" className="flex flex-row items-center gap-4 h-16 border-[2px] rounded-[8px] border-tbc-neutral-900 px-[23px] py-5 flex-nowrap">
                        <span className="font-martian-mono-semibold text-base -tracking-[1px] leading-[130%] from-tbc-neutral-700">REVIEW MEMBERSHIP OPTIONS</span>
                        <Image src={icon_arrow_down} alt="Arrow Down Icon" />
                    </Link>
                    <div className="mt-5 flex flex-row items-center gap-3">
                        <div>
                            <Image src={rating_image_avatars} alt="Rating Image Avatars" height={40} width={110} />
                        </div>
                        <div>
                            <span className="flex flex-row items-center">
                                {(new Array(5)).fill(0).map((_, index) => ( <Image src={icon_start} alt="Star" key={index} height={24} width={24} />)) }
                            </span>
                            <span className="font-martian-mono-normal text-sm leading-[120%] -tracking-[1px] text-tbc-neutral-700">200+ developers joined already</span>
                        </div>
                    </div>
                    <div className="rounded-md overflow-hidden mt-16">
                        <Image src={image_hero_bg} alt="Rating Image Avatars"  />
                    </div>
                </div>
            </div>
        </section>
    )
};
