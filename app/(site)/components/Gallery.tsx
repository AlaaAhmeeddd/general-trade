import Image from "next/image"

export default function Gallery() {
  return (
    <div className="px-4 py-16 h-auto">
      <div className="container mx-auto">
        <h1 className="text-basic-text text-[30px] font-semibold text-center">
          Some Of Our Products
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 my-12">
          <div className="flex flex-col gap-4">
            <div>
              <Image
                src="/kitchen2.jpg"
                className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                src="/kitchen.jpg"
                className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
                alt=""
                width={500}
                height={600}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Image
                src="/kitchen7.jpg"
                className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                src="/machine.jpg"
                className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 md">
            <div>
              <Image
                src="/kitchen3.jpg"
                className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                src="/kitchen6.jpg"
                className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 md">
            <div>
              <Image
                src="/kitchen5.jpg"
                className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                src="/machine.jpg"
                className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
