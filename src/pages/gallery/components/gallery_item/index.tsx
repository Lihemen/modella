import { Link } from 'react-router-dom';

const GalleryItem = ({
  id,
  firstname,
  lastname,
  images,
}: Pick<Model, 'id' | 'firstname' | 'lastname' | 'images'>) => {
  return (
    <Link to={`/models/talents/${id}`} className='w-full cursor-zoom-in'>
      <img
        src={images[0]}
        alt={firstname + lastname}
        className='w-full object-top object-cover h-auto aspect-square grayscale '
      />

      <span className='text-neutral-300 uppercase tracking-wide text-center block'>
        {firstname} {lastname}
      </span>
    </Link>
  );
};

export default GalleryItem;
