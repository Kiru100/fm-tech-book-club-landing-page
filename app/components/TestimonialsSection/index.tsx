import icon_start from "@/app/assets/images/icon-star.svg";
import Image from "next/image";

/**
 * DOCU: This component is a section that describes the book club as a place where members can read together and grow together. <br>
 * Last Updated Date: January 12, 2025
 * @author Noel
 */
function TestimonialsSection() {
    return (
        <div className="mt-16 px-4">
            <div className="flex flex-row items-center gap-[6px]">
                {(new Array(5)).fill(0).map((_, index) => (<Image src={icon_start} alt="Star" key={index} height={24} width={24} />))}
            </div>
            <p className="text-tbc-neutral-900 font-martian-mono-semibold leading-[110%] -tracking-[1px] text-2xl mt-8">&quot;This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!&quot;</p>
            <p className="mt-8 text-tbc-neutral-700 font-inter-normal leading-[140%] -tracking-[0.5px] text-xl">Sarah Chen, Software Architect</p>
        </div>
    )
}

export default TestimonialsSection;
