import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import AutoPlay from 'embla-carousel-autoplay';

import slider1 from '../../../../assets/sliders/slider1.jpeg';
import slider2 from '../../../../assets/sliders/slider2.jpeg';
import slider3 from '../../../../assets/sliders/slider3.jpeg';
import slider4 from '../../../../assets/sliders/slider4.jpeg';
import slider5 from '../../../../assets/sliders/slider5.jpg';
import slider6 from '../../../../assets/sliders/slider6.jpg';

const HeroSection = () => {
  const autoplay = useRef(AutoPlay({ delay: 5000 }));
  return (
    <section id='hero' className='pb-8 xl:pb-32'>
      <Carousel
        slidesToScroll={1}
        withIndicators={false}
        height='82vmin'
        align='center'
        loop
        plugins={[autoplay.current]}
        styles={{ controls: { opacity: 0 } }}
        className='h-[90vmin] md:h-[82vmin] pt-0'>
        <Carousel.Slide>
          <img src={slider1} alt='' className='h-full w-full' />
        </Carousel.Slide>
        <Carousel.Slide className='flex w-full'>
          <img src={slider2} alt='' className='object-cover h-full w-full' />
          <img src={slider4} alt='' className='object-cover h-full w-full' />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src={slider3} alt='' className='h-full w-full' />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src={slider5} alt='' className='h-full w-full' />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src={slider6} alt='' className='h-full w-full' />
        </Carousel.Slide>
      </Carousel>
    </section>
  );
};

export default HeroSection;
