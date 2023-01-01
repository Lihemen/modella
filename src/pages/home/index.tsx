import { JoinNewsletter } from '../../components';
import { DigitalGrid, HeroSection, HeroSectionTwo } from './components';

const Home = () => {
  return (
    <main id='home'>
      <HeroSection />
      <HeroSectionTwo />
      <DigitalGrid />
      <JoinNewsletter />
    </main>
  );
};

export default Home;
