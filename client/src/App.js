import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Fib from './Fib';
import { HomePage } from './HomePage';
function App() {
console.log('lo')
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/home">welcome page</Link>
        
      </div>
      <Route exact={true} path="/" component={Fib}/>
      <Route exact={true} path="/home" component={HomePage}/>
    </Router>
  );
}

export default App;
