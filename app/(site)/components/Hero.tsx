"use client"
import { LazyMotion, domAnimation, m, motion } from "framer-motion"
import Image from "next/image"
import CustomButton from "./CustomButton"

const containerVariants =  ({
  initial: {
      opacity: 0,
      y: 30,
  },
  animate: {
      opacity: 1,
      y: 0,
      transition: {
          type: 'spring',
          duration: 2,
      }
  }
})

function Hero() {
  const handleClick = ()=> {

  }

  return <LazyMotion features={domAnimation}>
    <div className="bg-secondary px-4 py-16 h-auto">
      <div className="flex xl:flex-row flex-col items-center justify-between gap-8 container mx-auto text-basic-text">

        <motion.div 
          variants={containerVariants} 
          initial="initial" 
          animate="animate"  
          className="flex flex-col gap-y-6 xl:items-start items-center text-center xl:text-left"
        >
          <h1 className="md:text-[48px] text-4xl font-semibold leading-snug xl:w-[450px]">
            Crafting Excellence in Stainless Steel
          </h1>
          <p className="text-dark-gray leading-relaxed">
            At our company, we pride ourselves on delivering top-quality stainless steel 
            products designed to stand the test of time.
          </p>
          <div className="w-fit mt-4">
            <CustomButton title={"Explore Our Categories"} handleOnClick={handleClick} hasShadow={true} hasArrow={true} />
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants} 
          initial="initial" 
          animate="animate" 
          className="flex gap-x-4 xl:mt-0 m-4 xl:h-[350px] 2xl:h-[450px]"
        >
          <div className="relative z-10 xl:flex xl:items-end">
              <Image src='/machine.jpg' alt='image' width={700} height={600} className="object-contain rounded-t-full rounded-b-[400px]" />
          </div>
          <div className="relative z-10 xl:flex xl:items-start">
              <Image src='/kitchen2.jpg' alt='image' width={700} height={600} className="object-contain rounded-b-full rounded-t-[400px]" />
          </div>
        </motion.div>

      </div>
    </div>
  </LazyMotion>
}

export default Hero
