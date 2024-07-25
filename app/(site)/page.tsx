import Categories from "./components/Categories"
import ColdSection from "./components/ColdSection"
import CollectionTypes from "./components/CollectionTypes"
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
      <CollectionTypes />
      <ColdSection />
      <HotSection />
      <Gallery />
    </main>
  )
}
