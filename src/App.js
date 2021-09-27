import Counter from './components/Counter/Counter';
import Hero from './components/Hero/Hero';
import Layout from './components/Layout';

const App = () => (
  <div className='app'>
    <Counter />
    <Layout>
      <Hero />
    </Layout>
  </div>
);

export default App;
