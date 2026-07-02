import RentalBenefits from "components/rental/RentalBenefits";
import RentalCategories from "components/rental/RentalCategories";
import RentalCTA from "components/rental/RentalCTA";
import RentalFaq from "components/rental/RentalFaq";
import RentalHero from "components/rental/RentalHero";
import RentalSteps from "components/rental/RentalSteps";

export default function RentalPage() {
  return (
    <main className="min-h-screen bg-background pt-28 text-foreground">
      <div className="container-page pb-24">
        <RentalHero />
        <RentalSteps />
        <RentalBenefits />
        <RentalCategories />
        <RentalFaq />
        <RentalCTA />
      </div>
    </main>
  );
}
