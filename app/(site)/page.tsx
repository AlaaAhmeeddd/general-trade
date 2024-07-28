import Categories from "./components/Categories"
import ColdSection from "./components/ColdSection"
import FeaturedProducts from "./components/FeaturedProducts"
import FeatureHighlights from "./components/FeatureHighlights"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import HotSection from "./components/HotSection"

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureHighlights />
      <Categories />
      <FeaturedProducts />
      <ColdSection />
      <HotSection />
      <Gallery />
    </main>
  )
}
