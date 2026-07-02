import ContactForm from "components/contact/ContactForm";
import ContactHero from "components/contact/ContactHero";
import ContactInfo from "components/contact/ContactInfo";

type ContactPageProps = {
  searchParams: Promise<{
    servizio?: string;
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;

  return (
    <main className="min-h-screen bg-background pt-28 text-foreground">
      <div className="container-page space-y-12 pb-24">
        <ContactHero />

        <ContactInfo />
      </div>
    </main>
  );
}
