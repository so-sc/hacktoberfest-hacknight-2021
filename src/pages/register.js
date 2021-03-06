import Counter from '../components/Counter/Counter';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import Container from '../components/Container/Container';
import Layout from '../components/Layout';

const Register = () => (
  <div className='app'>
    <Counter />
    <Layout>
        <Container>
          <RegisterForm />
        </Container>
    </Layout>
  </div>
);

export default Register;
