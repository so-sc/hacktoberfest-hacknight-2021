import Counter from '../components/Counter/Counter';
import Container from '../components/Container/Container';
import Rules from '../components/Rules/Rules';
import Layout from '../components/Layout';

const Register = () => (
  <div className='app'>
    <Counter />
    <Layout>
        <Container>
            <Rules />
        </Container>
    </Layout>
  </div>
);

export default Register;
