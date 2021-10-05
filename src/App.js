import Home from './pages/home';
import Register from './pages/register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <div className='app'>
    <Router>
      <div>
        <Switch>
          <Route path='/register' component={Register} />          
          <Route path='/' component={Home} />          
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
