import TypeCard from "./TypeCard";

export default function CollectionTypes() {
    return (
        <div className="px-4 py-16 h-auto">
            <div className="container mx-auto grid xl:grid-cols-2 grid-cols-1 gap-8">
                <TypeCard 
                    href="/product?type=burner"
                    title="fire extinguisher"
                    description="A fire extinguisher puts out small fires."
                    imageHref="/Fire-Extinguisher-nobackground.png"
                />
                <TypeCard 
                    href="/product?type=burner"
                    title="Boilers & Burners"
                    description="Boilers & Burners generate heat and hot water."
                    imageHref="/boiler-nobackground.png"
                />
            </div>
        </div>

    )
}
