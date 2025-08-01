"use client"

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import {ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, icons, Car, Clock} from 'lucide-react'
import { WhatsappLogoIcon } from '@phosphor-icons/react'
import { title } from 'process'
import { Content } from 'next/font/google'
import tutor1 from '../../../public/tutor1.png'

const testimonials = [
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus tellus vitae elit egestas pellentesque. Suspendisse potenti. Aliquam erat volutpat. Phasellus convallis nisl non dui malesuada consectetur. Etiam viverra vulputate ex et venenatis. Nullam consequat erat nunc, sit amet sollicitudin sem imperdiet ac. Vivamus auctor metus at erat tincidunt iaculis vel nec leo. Etiam convallis lacus venenatis gravida aliquet. Suspendisse volutpat, purus in porta semper, ante erat scelerisque magna, vitae condimentum magna nisi in elit. Vivamus vitae lacinia magna. Suspendisse tellus felis, fermentum nec ultrices ut, luctus eget turpis. Suspendisse pretium magna a lacus elementum, in porttitor arcu sollicitudin.",
    author: "Mariana Souza",
    role: "Tutora da Luna (Golden Retriever)",
    image: tutor1,
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus tellus vitae elit egestas pellentesque. Suspendisse potenti. Aliquam erat volutpat. Phasellus convallis nisl non dui malesuada consectetur. Etiam viverra vulputate ex et venenatis. Nullam consequat erat nunc, sit amet sollicitudin sem imperdiet ac. Vivamus auctor metus at erat tincidunt iaculis vel nec leo. Etiam convallis lacus venenatis gravida aliquet. Suspendisse volutpat, purus in porta semper, ante erat scelerisque magna, vitae condimentum magna nisi in elit. Vivamus vitae lacinia magna. Suspendisse tellus felis, fermentum nec ultrices ut, luctus eget turpis. Suspendisse pretium magna a lacus elementum, in porttitor arcu sollicitudin.",
    author: "Mariana Souza",
    role: "Tutora da Luna (Golden Retriever)",
    image: tutor1,
  },

]
export function Testimonials(){

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  })

  function scrollPrev(){
    emblaApi?.scrollPrev()
  }
  function scrollNext(){
    emblaApi?.scrollNext()
  }
  return(
    <section className="bg-[#ffd449] py-16">
      <div className="container mx-auto px-4">

        <h2 className="font-4xl font-bold text-center mb-12">Depoimentos de nossos clientes</h2>

        <div className="relative max-w-4xl mx-auto">
          
          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
              {testimonials.map((item, index) => (
                <div key={index} className='flex-[0_0_100%] min-w-0 px-3'>
                  <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                    
                    <div className='flex flex-col items-center text-center space-y-4'>
                      <div className='relative w-24 h-24'>
                        <Image src={item.image} alt={item.author} fill sizes='96px' className='object-cover rounded-full'/>
                      </div>

                      <p className='text-gray-200'>{item.content}</p>
                      <p className='font-bold'>{item.author}</p>
                      <p className='text-sm font-gray-400'>{item.role}</p>

                      <div>

                      </div>
                    </div>

                  </article>
                </div>
              ))}
            </div>
          </div>

          <button className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 translate-y-1/2 -translate-x-1/2 top-1/2'>
            <ChevronLeft onClick={scrollPrev} className='2-6 h-6 text-gray-600'/>
          </button>
          <button className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 translate-y-1/2 -translate-x-1/2 top-1/2'>
            <ChevronRight onClick={scrollNext} className='2-6 h-6 text-gray-600'/>
          </button>
          
        </div>
      </div>
    </section>
  )
}
export default Testimonials