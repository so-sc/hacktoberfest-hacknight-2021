import Counter from '../components/Counter/Counter';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Stats from '../components/Stats/Stats';
import Tracks from '../components/Tracks/Tracks';
import Events from '../components/Events/Events';
import Prizes from '../components/Prizes/Prizes';
import Sponsor from '../components/Sponsor/Sponsor';
import Layout from '../components/Layout';

const Home = () => (
  <div className='home'>
    <Counter />
    <Layout>
      <Hero />
      <About />
      <Stats />
      <Tracks />
      <Events />
      <Prizes />
      <Sponsor />
    </Layout>
  </div>
);

export default Home;
