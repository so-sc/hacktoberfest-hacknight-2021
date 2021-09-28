import Counter from './components/Counter/Counter';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Layout from './components/Layout';

const App = () => (
  <div className='app'>
    <Counter />
    <Layout>
      <Hero />
      <About />
    </Layout>
  </div>
);

export default App;
