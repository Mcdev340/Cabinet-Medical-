import Hero from "@/components/home/Hero";
import DoctorsPreview from "@/components/home/DoctorsPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import ReviewsPreview from "@/components/home/ReviewsPreview";
import LocationBlock from "@/components/home/LocationBlock";

export default function Home() {
  return (
    <>
      <Hero />
      <DoctorsPreview />
      <ServicesPreview />
      <ReviewsPreview />
      <LocationBlock />
    </>
  );
}
