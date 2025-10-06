import IntroSection from "@/components/IntroSection";
import TabSection from "@/components/TabSection";
import { weddingData } from "@/data/sampleData";

export default function Home() {
  return (
    <>
      <IntroSection
        name={weddingData.name}
        to={weddingData.to}
        heroes={weddingData.heroes}
      />

      <TabSection
        brides={weddingData.brides}
        details={weddingData.details}
        galleries={weddingData.galleries}
        thanks={weddingData.thanks}
        gifts={weddingData.gifts}
        banks={weddingData.banks}
        to={weddingData.to}
      />
    </>
  );
}
