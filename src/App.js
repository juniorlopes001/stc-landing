import React from "react";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import DesktopSystem from "./DesktopSystem";
import MobileSystem from "./MobileSystem";
import Form from "./Form";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sobre" component={About} />
          <Route path="/sistemaweb" component={DesktopSystem} />
          <Route path="/aplicativo" component={MobileSystem} />
          <Route path="/contato" component={Form} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
