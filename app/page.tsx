import Hero from "./components/Hero";
import NotYourAverageClubSection from "./components/NotYourAverageClubSection";
import ReadTogetherSection from "./components/ReadTogetherSection";
import TechReadingJourneySection from "./components/TechReadingJourneySection";


export default function Home() {
	return (
		<div>
			<Hero />
			<ReadTogetherSection />
			<NotYourAverageClubSection />
			<TechReadingJourneySection />
		</div>
	);
}
