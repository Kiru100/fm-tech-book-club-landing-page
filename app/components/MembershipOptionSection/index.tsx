import Plan from "./Plan";

/**
 * DOCU: This component is a section that describes the membership options of the book club. <br>
 * Last Updated Date: January 12, 2025
 * @author Noel
 */
function MembershipOptionSection() {
    const PLAN_DATA = [
        { id: 1, title: "Starter", price: "$19", features: ["1 book/month", "Online forums"] },
        { id: 2, title: "Pro", price: "$29", features: ["2 books/month", "Virtual meetups"], button_text: "GET STARTED", card_type: "highlight" },
        { id: 3, title: "Enterprise", price: "Custom", features: ["Team access", "Private sessions"], button_text: "TALK TO US" },
    ];

    return (
        <section className="mt-16 px-4">
             <h2 className="text-tbc-neutral-900 font-martian-mono-semibold text-[34px] leading-[130%] -tracking-[2px] md:mx-8 md:text-[3.125rem]">
                Membership <br/>
                options <br/>
            </h2>
            <div className="md:mx-8 md:grid md:grid-cols-2 md:gap-4">
                {PLAN_DATA.map(({id, title, price, features, button_text, card_type}, index) => (
                    <Plan key={`plan-${index}-${id}`} title={title} price={price} features={features} button_text={button_text} card_type={card_type}/>
                ))}
            </div>
        </section>
    )
}

export default MembershipOptionSection;
