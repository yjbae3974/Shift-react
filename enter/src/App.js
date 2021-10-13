import logo from './logo.svg';
import {useState} from 'react';
import {Link, Route, Switch, useHistory} from 'react-router-dom';
import './App.css';
import NavbarMain from './components/NavbarMain';
import Announce from "./components/Announce";
import 공지사항 from "./components/공지사항-onclick";
import History from "./components/History";
import Home from "./components/Home";
import Partners from "./components/Partners";
import Footer from './components/Footer';
import './style/style.scss';
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
        <Route exact path="/announce">
          <Announce></Announce>
        </Route>
        <Route exact path="/announce/:id" component={공지사항}>
        </Route>
        <Route exact path ="/history">
          <History></History>
        </Route>
        <Route exact path="/partners">
          <Partners></Partners>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
