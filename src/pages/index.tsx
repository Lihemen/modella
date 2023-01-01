import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';

export { default as HomePage } from './home';
export { default as ErrorPage } from './error';
export { default as AboutPage } from './about';
export { default as GalleryPage } from './gallery';

export const RootElement = () => {
  return (
    <main id='app'>
      <Navbar />
      <div className='inner-x'>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};
