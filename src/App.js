import Counter from './components/Counter/Counter';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Stats from './components/Stats/Stats';
import Events from './components/Events/Events';
import Sponsor from './components/Sponsor/Sponsor';
import Layout from './components/Layout';

const App = () => (
  <div className='app'>
    <Counter />
    <Layout>
      <Hero />
      <About />
      <Stats />
      <Events />
      <Sponsor />
    </Layout>
  </div>
);

export default App;
