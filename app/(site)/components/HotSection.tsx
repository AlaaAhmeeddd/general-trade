import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

export default function HotSection() {
    return (
        <div className="bg-secondary">
            <div className="px-4 py-20 h-auto">
                <div className="flex xl:flex-row flex-col items-center justify-center gap-8 container mx-auto">
                    <div className="relative h-auto xl:mb-0 mb-12">
                        <div className='rounded-xl overflow-hidden'>
                            <Image src="/kitchen2.jpg" alt='hot product' width={400} height={400} className='w-full h-full' />
                        </div>
                        <div className="absolute md:block hidden rounded-full overflow-hidden -bottom-12 -left-[50%] translate-x-[80%] border-[4px] border-white">
                                <Image src="/kitchen3.jpg" alt='hot product' width={200} height={400} className="w-[150px] h-[250px]" />
                        </div>
                    </div>
                    <div className="xl:w-[350px] w-full xl:text-left text-center flex flex-col xl:items-start items-center gap-4">
                        <h1 className="font-semibold text-[26px]">
                            Durable Stainless Steel Heating Machines
                        </h1>
                        <p className="text-[15px] text-dark-gray leading-relaxed">
                            A heating machine delivers reliable warmth with cutting-edge technology.
                            Crafted from high-quality stainless steel. Perfect for both commercial and industrial environments,
                            they ensure consistent heat distribution and optimal performance,
                            meeting all your heating needs with precision and ease.
                        </p>
                        <div className='mt-8 relative w-fit'>
                            <Link href="/product?type=hot">
                                <CustomButton
                                    title = 'See More'
                                    hasShadow = {true}
                                    hasArrow = {true}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
