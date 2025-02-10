import image_not_average from "@/app/assets/images/image-not-average-mobile.webp";
import Image from "next/image";

function NotYourAverageClubSection() {
    return (
        <section className="mt-16 px-4">
            <h2 className="text-tbc-neutral-900 font-martian-mono-semibold text-[34px] leading-[130%] -tracking-[2px]">
                Not your <br/>
                average book <br/>
                <span className="relative pl-2 py-4 pr-4 -inset-x-2 bg-no-repeat bg-center bg-contain bg-pattern_circle">
                    club
                </span>
            </h2>
            <div className="grid mt-6 gap-4">
               <p className="text-tbc-neutral-700 text-xl leading-[140%] -tracking-[0.5px] font-inter-normal">
                    Connect with a community that speaks your language - from <span className="font-inter-semibold">Python</span> to <span className="font-inter-semibold">TypeScript</span> and everything in between. Our discussions blend technical depth with practical applications.
                </p>
            </div>  
            <div className="mt-10 rounded-[12.25px] overflow-hidden">
                <Image src={image_not_average} alt="People laughing." />
            </div>
        </section>
    )
}

export default NotYourAverageClubSection;
