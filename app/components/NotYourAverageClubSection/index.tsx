import image_not_average from "@/app/assets/images/image-not-average-mobile.webp";
import Image from "next/image";

/**
 * DOCU: This component is a section that describes the book club as not your average book club.
 * Last Updated Date: January 12, 2025
 * @author Noel
 */
function NotYourAverageClubSection() {
    return (
        <section className="mt-16 px-4 md:p-8 lg:container lg:mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
            <div>
                <h2 className="text-tbc-neutral-900 font-martian-mono-semibold text-[34px] leading-[130%] -tracking-[2px] max-w-[33.375rem] md:text-[3.125rem]">
                    <span> 
                        Not your average book{" "}
                        <span className="relative pl-2 py-4 pr-4 -inset-x-2 bg-no-repeat bg-center bg-contain bg-pattern_circle">
                            club
                        </span>
                    </span>
                </h2>
                <div className="grid mt-6 gap-4">
                <p className="text-tbc-neutral-700 text-xl leading-[140%] -tracking-[0.5px] font-inter-normal">
                        Connect with a community that speaks your language - from <span className="font-inter-semibold">Python</span> to <span className="font-inter-semibold">TypeScript</span> and everything in between. Our discussions blend technical depth with practical applications.
                    </p>
                </div>  
            </div>
            <div className="mt-10 rounded-[12.25px] overflow-hidden">
                <Image src={image_not_average} alt="People laughing." className="w-full h-full object-cover" />
            </div>
        </section>
    )
}

export default NotYourAverageClubSection;
