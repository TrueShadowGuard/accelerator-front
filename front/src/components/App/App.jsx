import React from 'react';
import classes from './App.module.css';
import NavBar from "../NavBar";
import AsideNav from "../AsideNav";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Mystery from "../pages/mystery/Mystery";
import Analyzer from "../pages/analyzer/Analyzer";
import Counter from "../pages/counter/Counter";
import Ussa from "../pages/ussa/Ussa";
import Accelerator from "../pages/accelerator/Accelerator";
import PentUnfold from "../pages/pentunfold/PentUnfold";
import Support from "../pages/support/Support";
import Comments from "../pages/comments/Comments";
import HydrogenPosition from "../pages/hydrogen/HydrogenPosition";
import Home from "../pages/home/Home";
import Footer from "../Footer/Footer";

const App = () => {
  const routerMatch = useRouteMatch("/");
  const isHome = routerMatch.isExact;

  return (
    <div className={classes.app}>
      <NavBar/>
      <div className={classes.columns}>
        <Routes/>
        <AsideNav/>
      </div>
      {isHome && <Footer />}
    </div>
  );
};

function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/mystery" component={Mystery}/>
      <Route path="/analyzer" component={Analyzer}/>
      <Route path="/counter" component={Counter}/>
      <Route path="/ussa" component={Ussa}/>
      <Route path="/accelerator" component={Accelerator}/>
      <Route path="/pent-un-fold" component={PentUnfold}/>
      <Route path="/support" component={Support}/>
      <Route path="/comments" component={Comments}/>
      <Route path="/hydrogen" component={HydrogenPosition}/>
      <Route path="/" component={Home}/>
    </Switch>
  )
}

export default App;
