import React from 'react';
import NavBar from "./components/NavBar";
import {Switch, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Accelerator from "./pages/Accelerator";
import Mystery from "./pages/Mystery";
import Analyzer from "./pages/Analyzer";
import Counter from "./pages/Counter";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PentUnfold from "./pages/PentUnfold";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/mystery" component={Mystery}/>
        <Route path="/analyzer" component={Analyzer}/>
        <Route path="/counter" component={Counter}/>
        <Route path="/accelerator" component={Accelerator}/>
        <Route path="/pent-un-fold" component={PentUnfold} />
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
};

export default App;
