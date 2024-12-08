import Categories from "./components/Categories";
import CompanyLogo from "./components/CompanyLogo";
import Hero from "./components/Hero";
import HotProduct from "./components/HotProducts";
import OurProduct from "./components/OurProducts";

// Main Home Page Component
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Company Logo Section */}
      <CompanyLogo />

      {/* Categories Section */}
      <Categories />

      {/* Hot Products Section */}
      <HotProduct />

      {/* Our Products Section */}
      <OurProduct />
    </>
  );
}

