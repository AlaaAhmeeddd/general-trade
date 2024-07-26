"use client"
import { products } from "@/constants"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperInstance } from 'swiper'
import { IoIosArrowRoundForward } from "react-icons/io";
import SwiperBtn from "./SwiperBtn"
import Image from "next/image"
import Link from "next/link"

export default function FeaturedProducts() {
    const [product, setProduct] = useState(products[0])
    const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(null);

    const handleSlideChange = (swiper: any) => {
        const currentIndex = swiper.activeIndex;
        setProduct(products[currentIndex]);
    }

    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.on('slideChange', handleSlideChange);
        }
        return () => {
            if (swiperInstance) {
                swiperInstance.off('slideChange', handleSlideChange);
            }
        }
    }, [swiperInstance]);

    return (
        <div className='px-4 py-8 h-auto w-full'>
            <div className="container mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="md:text-4xl text-2xl font-semibold">Featured Products</h1>
                    <SwiperBtn 
                        swiper={swiperInstance} 
                        containerStyle="flex gap-2 justify-between xl:justify-none" 
                        btnStyle="bg-primary hover:bg-[#967F52]/80 text-white rounded-full text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" 
                    />
                </div>
                <div className="flex gap-4 lg:flex-row flex-col">
                    <div className="lg:w-[50%] w-full">
                        <Image src={product.mainImage} alt="image" width={500} height={500} className="w-full h-full rounded-md" />
                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        onSwiper={setSwiperInstance}
                        className="lg:w-[50%] w-full"
                    >
                        {products.map((product, index) => (
                            <SwiperSlide key={index}>
                                <div className="grid grid-cols-2 gap-3 h-full">
                                    {product.items.map((item, idx) => (
                                        <div key={idx} className="bg-gray-100 p-2 rounded-md flex flex-col gap-2 justify-between items-center">
                                            <Image 
                                                src={item.productImage} 
                                                alt={item.title} 
                                                width={200} 
                                                height={200} 
                                                className="rounded-md object-contain relative top-[50%] -translate-y-[67%]" 
                                            />
                                            <Link href="" className="bg-white p-3 rounded-md w-full group hover:bg-primary transition-all duration-150">
                                                <p className="font-semibold group-hover:text-white text-dark-gray flex justify-between items-center transition-all duration-150">
                                                    {item.title}
                                                    <IoIosArrowRoundForward className="text-2xl" />
                                                </p>
                                            </Link>
                                        </div>
                                    ))}
                                </div>    
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
