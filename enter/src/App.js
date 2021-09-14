import logo from './logo.svg';
import {useState} from 'react';
import {Link, Route, Switch, useHistory} from 'react-router-dom';
import './App.css';
import NavbarMain from './components/NavbarMain';
import Announce from "./components/Announce";
import History from "./components/History";
import Home from "./components/Home";
import Partners from "./components/Partners";
import './style.scss';
function App() {
  let [activePath, setActivePath] = useState(1);
  return (
    <div className="App">
      <NavbarMain activePath={activePath} setActivePath={setActivePath}></NavbarMain>
      <Switch>
      <Route exact path="/"><Home></Home></Route>
      <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path ="/history">
          <div>heoolo</div>
        </Route>
        <Route exact path="/partners">
          <div>history</div>
        </Route>
      </Switch>
      <div>{activePath}</div>
    </div>
  );
}

export default App;
