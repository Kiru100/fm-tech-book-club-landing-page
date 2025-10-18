import Image from "next/image";
import React from "react"
import check_box_icon from "@/app/assets/images/icon-check.svg";
import image_together_bg from "@/app/assets/images/image-read-together-mobile.webp";

/**
 * DOCU: This component is a section that describes the book club as a place where members can read together and grow together. <br>
 * Last Updated Date: January 12, 2025
 * @author Noel
 */
function ReadTogetherSection() {
    return (
        <section className="mt-16 px-4 md:p-8 lg:container lg:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* 1st Column */}
            <div className="lg:order-2">
                <h2 className="text-tbc-neutral-900 font-martian-mono-semibold text-[34px] leading-[130%] -tracking-[2px] md:text-[3.125rem]">
                    Read together, <br/>
                    grow together
                </h2>
                <div className="grid mt-6 gap-4">
                    <div className="flex flex-row gap-[14px]">
                        <Image src={check_box_icon} alt="Rating Image Avatars" height={24} width={24} />
                        <p className="text-tbc-neutral-700 font-inter-normal leading-[140%] -tracking-[0.5px] text-xl">Monthly curated tech reads selected by industry experts</p>
                    </div>
                    <div className="flex flex-row gap-[14px]">
                        <Image src={check_box_icon} alt="Rating Image Avatars" height={24} width={24} />
                        <p className="text-tbc-neutral-700 font-inter-normal leading-[140%] -tracking-[0.5px] text-xl">Virtual and in-person meetups for deep-dive discussions</p>
                    </div>
                    <div className="flex flex-row gap-[14px]">
                        <Image src={check_box_icon} alt="Rating Image Avatars" height={24} width={24} />
                        <p className="text-tbc-neutral-700 font-inter-normal leading-[140%] -tracking-[0.5px] text-xl">Early access to new tech book releases</p>
                    </div>
                    <div className="flex flex-row gap-[14px]">
                        <Image src={check_box_icon} alt="Rating Image Avatars" height={24} width={24} />
                        <p className="text-tbc-neutral-700 font-inter-normal leading-[140%] -tracking-[0.5px] text-xl">Author Q&A sessions with tech thought leaders</p>
                    </div>
                </div>  
            </div>
            {/* 2nd Column */}
            <div className="mt-10 rounded-[12.25px] overflow-hidden lg:order-1">
                <Image src={image_together_bg} alt="People reading together." className="w-full h-full object-cover" />
            </div>
        </section>
    )
}

export default ReadTogetherSection;
