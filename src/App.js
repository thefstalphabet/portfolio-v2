// Page Components
import Home from './Pages/Home/Home/Home';
import Experiences from './Pages/Home/Experiences/Experiences';

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
          <Route path="/experiences" component={Experiences} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
