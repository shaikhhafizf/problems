import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import ProblemA from './Components/ProblemA';
import ProblemB from './Components/ProblemB';
import ProblemC from './Components/ProblemC';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='Header'>
          <NavLink activeClassName='ActiveHeaderLink' to='/ProblemA' >Problem A</NavLink>
          <NavLink activeClassName='ActiveHeaderLink' to='/ProblemB' >Problem B</NavLink>
          <NavLink activeClassName='ActiveHeaderLink' to='/ProblemC' >Problem C</NavLink>
        </div>
        <Switch>
          <Route path='/ProblemA' component={ProblemA} />
          <Route path='/ProblemB' component={ProblemB} />
          <Route path='/ProblemC' component={ProblemC} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
