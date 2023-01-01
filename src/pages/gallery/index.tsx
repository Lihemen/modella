import { GalleryItem } from './components';

import gallery1 from '../../assets/gallery/model1.jpg';
import gallery2 from '../../assets/gallery/model2.jpg';
import gallery3 from '../../assets/gallery/model3.jpg';
import gallery4 from '../../assets/gallery/model4.jpg';
import gallery5 from '../../assets/gallery/model5.jpg';
import gallery6 from '../../assets/gallery/model6.jpeg';
import gallery7 from '../../assets/gallery/model7.jpg';
import gallery8 from '../../assets/gallery/model8.jpg';
import gallery9 from '../../assets/gallery/model9.jpg';

const Gallery = () => {
  return (
    <section className='pb-20'>
      <ul className='hidden lg:flex items-center gap-x-4 pt-10 cursor-pointer text-xs text-neutral-200'>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
        <li>G</li>
        <li>H</li>
        <li>I</li>
        <li>J</li>
        <li>K</li>
        <li>L</li>
        <li>M</li>
        <li>O</li>
        <li>P</li>
        <li>Q</li>
        <li>R</li>
        <li>S</li>
        <li>T</li>
        <li>U</li>
        <li>V</li>
        <li>W</li>
        <li>X</li>
        <li>Y</li>
        <li>Z</li>
        <li>...</li>
        <li>All</li>
      </ul>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 assymetric py-24 gap-6'>
        <GalleryItem
          firstname='Jess'
          lastname='Clements'
          id={1234}
          images={[gallery1]}
        />
        <GalleryItem
          firstname='Jess'
          lastname='Clements'
          id={1234}
          images={[gallery2]}
        />
        <GalleryItem
          firstname='Jess'
          lastname='Clements'
          id={1234}
          images={[gallery3]}
        />
        <GalleryItem
          firstname='Jess'
          lastname='Clements'
          id={1234}
          images={[gallery4]}
        />
        <GalleryItem
          firstname='Jess'
          lastname='Clements'
          id={1234}
          images={[gallery5]}
        />
        <GalleryItem
          firstname='Jess'
          lastname='Clements'
          id={1234}
          images={[gallery6]}
        />
        <GalleryItem
          firstname='Jess'
          lastname='Clements'
          id={1234}
          images={[gallery7]}
        />
        <GalleryItem
          firstname='Jess'
          lastname='Clements'
          id={1234}
          images={[gallery8]}
        />
        <GalleryItem
          firstname='Jess'
          lastname='Clements'
          id={1234}
          images={[gallery9]}
        />
      </div>
    </section>
  );
};

export default Gallery;
