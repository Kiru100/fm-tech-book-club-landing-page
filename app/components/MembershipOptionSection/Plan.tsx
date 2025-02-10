import check_box_icon from "@/app/assets/images/icon-check.svg";
import Image from 'next/image';

type PlanProps = {
    title: string;
    price: string;
    features: string[];
    button_text?: string;
};

function Plan({
    title,
    price,
    features,
    button_text
}: PlanProps) {

    console.log(button_text);
    return (
        <div className="border border-tbc-neutral-200 rounded-lg p-6 mt-6">
            <h3 className="text-[2rem] leading-[130%] -tracking-[1px] font-martian-mono-semibold text-tbc-neutral-900">{title}</h3>
            <div>
                <div className="flex flex-row items-center gap-2 mt-6 border-b border-tbc-neutral-200 pb-6">
                    <span className="text-4xl font-martian-mono-semibold leading-[110%] -tracking-[2px] text-tbc-neutral-900">{price}</span>
                    {(price !== "Custom") && <span className="text-xl font-inter-normal leading-[140%] -tracking-[0.5px] text-tbc-neutral-700">/month</span>}
                </div>
            </div>
            <div className="grid mt-6 gap-4">
                {features?.map((feature, index) => (
                    <div key={index} className="flex flex-row items-center gap-3">
                        <Image src={check_box_icon} alt="Rating Image Avatars" height={24} width={24} />
                        <p className="text-xl font-inter-normal leading-[140%] -tracking-[0.5px] text-tbc-neutral-700">{feature}</p>
                    </div>
                ))}
            </div>
            <button className="mt-8 bg-light-salmon-50 border-2 border-tbc-neutral-900 rounded-lg w-full px-6 py-5 text-tbc-neutral-900 font-martian-mono-semibold text-base leading-[130%] -tracking-[1px]">
                {(button_text) ? button_text : "SUBSCRIBE NOW"}
            </button>
        </div>  
    )
}

export default Plan;
