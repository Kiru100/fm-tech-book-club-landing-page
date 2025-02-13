import icon_arrow_down from "@/app/assets/images/icon-arrow-down.svg";
import icon_arrow_up from "@/app/assets/images/icon-arrow-up.svg";
import icon_start from "@/app/assets/images/icon-star.svg";
import rating_image_avatars from "@/app/assets/images/image-avatars.webp";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type ReviewMemberShipOptionsProps = {
    mode: "dark" | "light";
};

function ReviewMemberShipOptions({mode = "light"} : ReviewMemberShipOptionsProps) {
    const is_light_mode = (mode === "light");
    
    return (
        <>
            <Link 
                href="/" 
                className={clsx("flex flex-row items-center gap-4 h-16 border-[2px] rounded-[8px] py-5 flex-nowrap px-[23px]", 
                    (is_light_mode) ? "border-tbc-neutral-900" : "border-tbc-neutral-0")
                }>
                <span className={clsx("font-martian-mono-semibold text-base -tracking-[1px] leading-[130%]",
                    (is_light_mode) ? "text-tbc-neutral-900" : "text-tbc-neutral-0")
                }>
                    REVIEW MEMBERSHIP OPTIONS
                </span>
                {(mode === "light") ? (<Image src={icon_arrow_down} alt="Arrow Down Icon" />) : (<Image src={icon_arrow_up} alt="Arrow Down Icon" />)}
            </Link>
            <div className="mt-5 flex flex-row items-center gap-3">
                <div>
                    <Image src={rating_image_avatars} alt="Rating Image Avatars" height={40} width={110} />
                </div>
                <div>
                    <span className="flex flex-row items-center">
                        {(new Array(5)).fill(0).map((_, index) => ( <Image src={icon_start} alt="Star" key={index} height={24} width={24} />))}
                    </span>
                    <span className={clsx("font-martian-mono-normal text-sm leading-[120%] -tracking-[1px]", 
                        (is_light_mode) ? "text-tbc-neutral-900" : "text-tbc-neutral-100"
                    )}>200+ developers joined already</span>
                </div>
            </div>
        </>
    )
}

export default ReviewMemberShipOptions;