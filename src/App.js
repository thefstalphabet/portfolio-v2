// Page Components
import Home from './Pages/Home/Home';

// Components

// Other imports
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
