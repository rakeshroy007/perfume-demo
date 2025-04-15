import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Autoplay from 'embla-carousel-autoplay'

const Hero = () => {
    return (
        <div className='mt-32 py-17'>
            <section className='w-full'>
                <Carousel
                    plugins={[Autoplay({ delay: 2000 })]}
                    className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">

                    <CarouselContent>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card className="rounded-lg overflow-hidden border-none">
                                        <CardContent className="">
                                            <img src={`/banner_${index + 1}.webp`} alt={`Banner ${index + 1}`} className="w-full h-auto object-cover" />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
        </div>
    )
}

export default Hero
