import "normalize.css/normalize.css";
import "./css/main.css";
import React from "react";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Accelerator from "./pages/accelerator/Accelerator";
import Mystery from "./pages/mystery/Mystery";
import Analyzer from "./pages/analyzer/Analyzer";
import Counter from "./pages/counter/Counter";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PentUnfold from "./pages/pentunfold/PentUnfold";
import Support from "./pages/support/Support";
import Comments from "./pages/comments/Comments";
import classes from "./css/App.module.css";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Header />
        <main className={classes.main}>
            <Navbar/>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/mystery" component={Mystery} />
                <Route path="/analyzer" component={Analyzer} />
                <Route path="/counter" component={Counter} />
                <Route path="/accelerator" component={Accelerator} />
                <Route path="/pent-un-fold" component={PentUnfold} />
                <Route path="/support" component={Support} />
                <Route path="/comments" component={Comments} />
                <Route path="/" component={Home} />
            </Switch>
        </main>
    </div>
  );
};

export default App;
