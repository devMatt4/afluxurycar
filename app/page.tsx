import Categories from "../components/home/Categories";
import FeaturedVehicles from "../components/home/FeaturedVehicles";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Categories />
      <FeaturedVehicles />
    </main>
  );
}
