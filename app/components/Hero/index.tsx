import image_hero_bg from "@/app/assets/images/image-hero-mobile.webp";
import Logo from "@/app/assets/images/logo.svg";
import Image from "next/image";
import ReviewMemberShipOptions from "@/app/components/ReviewMemberShipOptions";

export default function Hero() {
    return (
        <section className="bg-tbc-neutral-100 bg-square-background bg-cover lg:max-h-screen">
            <div className="pt-6 px-4 pb-20 md:p-8 h-full lg:h-screen lg:max-h-screen">
                <div className="lg:container lg:mx-auto lg:flex lg:flex-col lg:h-screen  lg:max-h-screen">
                    <div className="mb-8 lg:mb-0">  
                        <Image src={Logo} alt="hero" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center flex-grow-2 lg:items-center lg:flex lg:flex-1 lg:flex-grow-2 lg:align-self-center lg:justify-center">
                        {/* Left Column */}
                        <div className="space-y-8 lg:py-8">
                            <div>
                                <h1 className="bg-text-gradient bg-clip-text text-transparent text-4xl font-martian-mono-bold leading-[120%] -tracking-[2px] md:text-[3.875rem]">
                                    Join the <br />
                                    ultimate tech<br/>
                                    book club
                                </h1>
                                <p className="mt-6 text-xl leading-[140%] -tracking-[0.5px] font-inter-normal text-tbc-neutral-700">Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.</p>
                            </div>
                            <div className="lg:pt-4">
                                <ReviewMemberShipOptions mode="light" />
                            </div>
                        </div>
                        {/* Right Column */}
                        <div className="flex justify-center w-full lg:justify-end">
                            <div className="rounded-md overflow-hidden w-full lg:h-[606px]">
                                <Image 
                                    src={image_hero_bg} 
                                    alt="Rating Image Avatars" 
                                    className="w-full h-full object-cover"
                                    width={540}
                                    height={606}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
