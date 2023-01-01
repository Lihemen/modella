import { Carousel } from '@mantine/carousel';
import { FaInstagram } from 'react-icons/fa';

import { nFormatter } from '../../../../utils/formatter';

import news1 from '../../../../assets/news/news1.jpg';
import news2 from '../../../../assets/news/news2.jpg';
import news3 from '../../../../assets/news/news3.jpg';
import news4 from '../../../../assets/news/news4.jpg';
import news5 from '../../../../assets/news/news5.jpg';
import { useNavigate } from 'react-router-dom';

interface DigitalGridItemInterface {
  id: number;
  image: string;
  name: string;
  instagram: string;
  followers: string;
}

const DigitalGridItem = ({
  id,
  image,
  name,
  instagram,
  followers,
}: DigitalGridItemInterface) => {
  const navigate = useNavigate();

  return (
    <Carousel.Slide
      className='relative h-64 lg:h-80 w-full digital-grid-item child:hover:visible cursor-pointer '
      onClick={() => navigate(`news/publications/${id}`)}>
      <div className='absolute h-full w-full flex items-center text-center flex-col justify-end z-10 py-10 bg-neutral-800 bg-opacity-50 text-white invisible  transition duration-300 '>
        <a
          href={instagram}
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center self-center absolute top-1/2 -translate-y-1/2'>
          <FaInstagram
            className='text-3xl mb-2'
            onClick={(e) => e.stopPropagation()}
          />
          <span className='uppercase '>{followers}</span>
        </a>

        <span className='uppercase tracking-wider font-semibold'>{name} </span>
      </div>
      <img
        src={image}
        alt={name}
        className='grayscale h-full w-full object-cover'
      />
    </Carousel.Slide>
  );
};

export default function DigitalGrid() {
  return (
    <section id='digital' className='py-28'>
      <h3 className='text-center font-serif font-semibold text-6xl mb-10 uppercase'>
        Digital
      </h3>
      <Carousel
        slidesToScroll={'auto'}
        slideSize='20%'
        withIndicators={false}
        align='start'
        styles={{ controls: { opacity: 0 } }}
        loop
        breakpoints={[
          {
            maxWidth: 'md',
            slideSize: '50%',
          },
          // { maxWidth: 'lg', slideSize: '33.33%' },
        ]}>
        <DigitalGridItem
          id={1}
          followers={nFormatter(1234)}
          image={news1}
          instagram='https://instagram.com'
          name='Jess clements'
        />
        <DigitalGridItem
          id={2}
          followers={nFormatter(1234)}
          image={news2}
          instagram='https://instagram.com'
          name='Jess clements'
        />
        <DigitalGridItem
          id={3}
          followers={nFormatter(12345)}
          image={news3}
          instagram='https://instagram.com'
          name='Jess clements'
        />
        <DigitalGridItem
          id={4}
          followers={nFormatter(1234)}
          image={news4}
          instagram='https://instagram.com'
          name='Jess clements'
        />
        <DigitalGridItem
          id={5}
          followers={nFormatter(1234908)}
          image={news5}
          instagram='https://instagram.com'
          name='Jess clements'
        />
      </Carousel>
    </section>
  );
}
