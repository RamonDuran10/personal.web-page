import Grid from "./components/Grid";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import History from "./components/History";
import React, {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/history">
            <History/>
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/galeria">
            <Grid />
          </Route>
          <Route>
            <Content exact path="/" />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
