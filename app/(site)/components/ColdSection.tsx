import Image from 'next/image'
import CustomButton from './CustomButton'
import Link from 'next/link'

export default function ColdSection() {
    return (
        <div className="px-4 py-16 h-auto mb-8">
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-8 container mx-auto">
                <div className='flex flex-col justify-center bg-gray-100 text-basic-text md:p-12 p-8 rounded-xl'>
                    <p className='md:text-[24px] text-[20px] leading-relaxed font-semibold'>
                        A refrigeration machine keeps items cold using a cooling system. 
                        Our stainless steel models are durable, efficient, and designed for 
                        both commercial and industrial use, ensuring long-lasting performance.
                    </p>
                    <div className='mt-12 relative w-fit'>
                        <Link href="/product?type=cold">
                            <CustomButton
                                title = 'See More'
                                hasShadow = {true}
                                hasArrow = {true}
                            />
                        </Link>
                    </div>
                </div>
                <div className='rounded-xl overflow-hidden h-auto relative'>
                    <Image src="/kitchen.jpg" alt='Cold product' width={400} height={400} className='w-full h-full' />
                </div>
            </div>
        </div>
    )
}
