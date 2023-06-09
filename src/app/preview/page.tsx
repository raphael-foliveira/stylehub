import Reviews from "@/components/preview/reviews/Reviews";
import Pictures from "@/components/preview/pictures/Pictures";
import Services from "@/components/preview/services/Services";
import MapSection from "@/components/preview/map/MapSection";

export default function Preview() {
  return (
    <main>
      <MapSection />
      <Pictures />
      <Services />
      <Reviews />
    </main>
  );
}
