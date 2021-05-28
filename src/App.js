import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Document from './components/Document';
import Apicall from './components/Apicall';
import Lecture from './components/Lecture';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
    <div className="App">
      <Header name="Essential"/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/document" component={Document} />
        <Route path="/lecture" component={Lecture} />
        <Route path="/apicall" component={Apicall} />
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
