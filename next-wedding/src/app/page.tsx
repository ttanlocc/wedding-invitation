import IntroSection from "@/components/IntroSection";
import { weddingData } from "@/data/sampleData";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <IntroSection
        name={weddingData.name}
        to={weddingData.to}
        heroes={weddingData.heroes}
      />

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js" strategy="afterInteractive" />
    </>
  );
}
