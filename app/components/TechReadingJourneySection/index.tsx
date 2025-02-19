
/**
 * DOCU: This component is a section that describes the tech reading journey of the book club. <br/>
 * Last Updated Date: January 12, 2025
 * @author Noel
 */
function TechReadingJourneySection() {
    const TECH_READING_JOURNEY = [
        { id: 1, title: 'Choose your membership tier' },
        { id: 2, title: 'Get your monthly book selection' },
        { id: 3, title: 'Join our discussion forums' },
        { id: 4, title: 'Attend exclusive meetups' },
    ];

    return (
        <section className="mt-16 px-4 mx-4 py-16 bg-tbc-neutral-100 rounded-xl bg-square-background relative overflow-hidden">
            <h2 className="text-tbc-neutral-900 font-martian-mono-semibold text-[34px] leading-[130%] -tracking-[2px]">
                Your tech <br className='hidden' />
                reading <br />
                journey
            </h2>
            <div className="flex flex-col gap-y-8 mt-8">
                {TECH_READING_JOURNEY.map(({id, title}, index) => (
                    <div className="grid gap-y-5" key={`tech-reading-journey-${index}`}>
                        <span className="flex items-center justify-center rounded-[4px] border-2 border-tbc-neutral-900 h-8 w-8 font-martian-mono-semibold text-base leading-[130%] -tracking-[1px] text-tbc-neutral-900">{id}</span>
                        <p className="font-martian-mono-semibold text-base leading-[130%] -tracking-[1px] text-tbc-neutral-900">{title}</p>
                    </div>
                ))}
            </div>
            <div className="bg-glow_circle bg-contain h-[684px] w-[684px] absolute top-[399.08px] l-[151.5px]" />
        </section>
    )
}

export default TechReadingJourneySection