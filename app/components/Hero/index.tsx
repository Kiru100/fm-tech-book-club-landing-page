import image_hero_bg from "@/app/assets/images/image-hero-mobile.webp";
import Logo from "@/app/assets/images/logo.svg";
import Image from "next/image";
import ReviewMemberShipOptions from "../ReviewMemberShipOptions";

export default function Hero() {
    return (
        <section className="bg-tbc-neutral-100">
            <div className="bg-square-background bg-[auto_100vh] pt-6 px-4 pb-20 md:p-8">
                <Image src={Logo} alt="hero" />
                <div className="mt-12">
                    <h1 className="bg-text-gradient bg-clip-text text-transparent text-4xl font-martian-mono-bold leading-[120%] -tracking-[2px] md:text-[3.875rem]">
                        Join the <br />
                        ultimate tech<br/>
                        book club
                    </h1>
                    <p className="mt-6 text-xl leading-[140%] -tracking-[0.5px] font-inter-normal text-tbc-neutral-700">Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.</p>
                </div>
                <div className="mt-8">
                    <ReviewMemberShipOptions mode="light" />
                    <div className="rounded-md overflow-hidden mt-16">
                        <Image src={image_hero_bg} alt="Rating Image Avatars" className="w-full" />
                    </div>
                </div>
            </div>
        </section>
    )
};
