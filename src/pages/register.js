import Counter from '../components/Counter/Counter';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import Layout from '../components/Layout';

const Register = () => (
  <div className='app'>
    <Counter />
    <Layout>
        <RegisterForm />
    </Layout>
  </div>
);

export default Register;
