import Plan from "./Plan";

/**
 * DOCU: This component is a section that describes the membership options of the book club. <br>
 * Last Updated Date: January 12, 2025
 * @author Noel
 */
function MembershipOptionSection() {
    const PLAN_DATA = [
        { id: 1, title: "Starter", price: "$19", features: ["1 book/month", "Online forums"] },
        { id: 2, title: "Pro", price: "$29", features: ["2 books/month", "Virtual meetups"], card_type: "highlight" },
        { id: 3, title: "Enterprise", price: "Custom", features: ["Team access", "Private sessions"], button_text: "TALK TO US" },
    ];

    return (
        <section className="mt-16 px-4 lg:container lg:mx-auto lg:max-w-[970px]">
             <h2 className="text-tbc-neutral-900 font-martian-mono-semibold text-[34px] leading-[130%] -tracking-[2px] md:mx-4 md:text-[3.125rem] lg:text-center">
                Membership options
            </h2>
            <div className="md:mx-4 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8 lg:mt-16">
                {PLAN_DATA.map(({id, title, price, features, button_text, card_type}, index) => (
                    <Plan key={`plan-${index}-${id}`} index={index} title={title} price={price} features={features} button_text={button_text} card_type={card_type}/>
                ))}
            </div>
        </section>
    )
}

export default MembershipOptionSection;
