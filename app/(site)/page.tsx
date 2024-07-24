import Categories from "./components/Categories"
import CollectionTypes from "./components/CollectionTypes"
import FeatureHighlights from "./components/FeatureHighlights"
import Hero from "./components/Hero"

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureHighlights />
      <Categories />
      <CollectionTypes />
    </main>
  )
}
