import Hero from "./components/Hero";
import MembershipOptionSection from "./components/MembershipOptionSection";
import NotYourAverageClubSection from "./components/NotYourAverageClubSection";
import ReadTogetherSection from "./components/ReadTogetherSection";
import TechReadingJourneySection from "./components/TechReadingJourneySection";
import TestimonialsSection from "./components/TestimonialsSection";


export default function Home() {
	return (
		<div>
			<Hero />
			<ReadTogetherSection />
			<NotYourAverageClubSection />
			<TechReadingJourneySection />
			<MembershipOptionSection />
			<TestimonialsSection />
		</div>
	);
}
