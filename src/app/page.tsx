import Reviews from "@/components/content/Reviews";
import SeePreview from "@/components/content/SeePreview";
import TopContent from "@/components/content/TopContent";
import ContactForm from "@/components/forms/contact/ContactForm";

export default function Home() {
  return (
    <main>
      <TopContent />
      <Reviews />
      <SeePreview />
      <ContactForm />
    </main>
  );
}
