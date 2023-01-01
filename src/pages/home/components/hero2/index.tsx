import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import AutoPlay from 'embla-carousel-autoplay';

import model1 from '../../../../assets/gallery/model1.jpg';
import model2 from '../../../../assets/gallery/model2.jpg';
import model3 from '../../../../assets/gallery/model3.jpg';
import model4 from '../../../../assets/gallery/model4.jpg';

import category1 from '../../../../assets/gallery/category1.jpg';
import category2 from '../../../../assets/gallery/category2.jpg';
import category3 from '../../../../assets/gallery/category3.jpg';
import category4 from '../../../../assets/gallery/category4.jpg';
import category5 from '../../../../assets/gallery/category5.jpg';
import { Link } from 'react-router-dom';

const HeroSectionTwo = () => {
  const autoplay = useRef(AutoPlay({ delay: 15000 }));
  return (
    <section
      id='hero_categories'
      className='py-16 flex inner-x flex-col-reverse lg:flex-row'>
      <div className='flex-1'>
        <Carousel
          slidesToScroll={1}
          withIndicators={false}
          height='100%'
          align='center'
          loop
          plugins={[autoplay.current]}
          styles={{ controls: { opacity: 0 } }}
          className='h-96 lg:h-full'>
          <Carousel.Slide>
            <img
              src={model1}
              alt=''
              className='object-cover flex-1 w-full h-full'
            />
          </Carousel.Slide>
          <Carousel.Slide className='flex w-full'>
            <img
              src={model2}
              alt=''
              className='object-cover flex-1 w-full h-full'
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src={model3}
              alt=''
              className='object-cover flex-1 w-full h-full'
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src={model4}
              alt=''
              className='object-cover flex-1 w-full h-full'
            />
          </Carousel.Slide>
        </Carousel>
      </div>
      <div className='flex-1'>
        <div className='grid grid-cols-2 gap-0'>
          <Link
            to='models/women'
            className='relative block opacity-60 hover:opacity-90 w-full h-64 lg:h-80 transition-all'>
            <img
              src={category1}
              alt=''
              className='h-full w-full object-cover'
            />
            <span className='absolute top-3/4 left-1/2 -translate-x-1/2 uppercase font-serif text-white'>
              Women
            </span>
          </Link>
          <Link
            to='models/men'
            className='relative block opacity-60 hover:opacity-90 w-full h-64 lg:h-80 transition-all'>
            <img
              src={category2}
              alt=''
              className='h-full w-full object-cover'
            />
            <span className='absolute top-3/4 left-1/2 -translate-x-1/2 uppercase font-serif text-white'>
              men
            </span>
          </Link>
          <Link
            to='models/outlet-fashion'
            className='relative block opacity-60 hover:opacity-90 w-full h-64 lg:h-80 transition-all'>
            <img
              src={category3}
              alt=''
              className='h-full w-full object-cover'
            />
            <span className='absolute top-3/4 left-1/2 -translate-x-1/2 uppercase font-serif text-white'>
              street wear
            </span>
          </Link>
          <Link
            to='models/sexy'
            className='relative block opacity-60 hover:opacity-90 w-full h-64 lg:h-80 transition-all'>
            <img
              src={category4}
              alt=''
              className='h-full w-full object-cover'
            />
            <span className='absolute top-3/4 left-1/2 -translate-x-1/2 uppercase font-serif text-white'>
              sexy
            </span>
          </Link>
          <Link
            to='models/curve'
            className='relative block opacity-60 hover:opacity-90 w-full h-64 lg:h-80 transition-all'>
            <img
              src={category5}
              alt=''
              className='h-full w-full object-cover'
            />
            <span className='absolute top-3/4 left-1/2 -translate-x-1/2 uppercase font-serif text-white'>
              curve
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTwo;
