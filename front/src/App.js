import React from "react";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Accelerator from "./components/pages/accelerator/Accelerator";
import Mystery from "./components/pages/mystery/Mystery";
import Analyzer from "./components/pages/analyzer/Analyzer";
import Counter from "./components/pages/counter/Counter";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import PentUnfold from "./components/pages/pentunfold/PentUnfold";
import Support from "./components/pages/support/Support";
import Comments from "./components/pages/comments/Comments";
import HydrogenPosition from "./components/pages/hydrogen/HydrogenPosition";
import Ussa from "./components/pages/ussa/Ussa";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/mystery" component={Mystery} />
        <Route path="/analyzer" component={Analyzer} />
        <Route path="/counter" component={Counter} />
        <Route path="/ussa" component={Ussa} />
        <Route path="/accelerator" component={Accelerator} />
        <Route path="/pent-un-fold" component={PentUnfold} />
        <Route path="/support" component={Support} />
        <Route path="/comments" component={Comments} />
        <Route path="/hydrogen" component={HydrogenPosition} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
