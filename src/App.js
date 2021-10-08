import Home from './pages/home';
import Register from './pages/register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <div className='app'>
    <Router>
      <div>
        <Switch>
          <Route path='/register' exact component={Register} />      
          <Route path='/' exact component={Home} />          
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
