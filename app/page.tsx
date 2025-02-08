import Hero from "./components/Hero";
import NotYourAverageClubSection from "./components/NotYourAverageClubSection";
import ReadTogetherSection from "./components/ReadTogetherSection";


export default function Home() {
	return (
		<div>
			<Hero />
			<ReadTogetherSection />
			<NotYourAverageClubSection />
		</div>
	);
}
