// Page Components
import Home from './Pages/Home/Home';
import Experiences from './Pages/Experiences/Experiences';
import About from './Pages/About/About';

// Components

// Other imports
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Expertise from './Pages/Expertise/Experties';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/experiences" component={Experiences} exact/>
          <Route path="/about" component={About} exact/>
          <Route path="/experties" component={Expertise} exact/>
          <Route path="/contact" component={Footer} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
