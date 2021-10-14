import NavBar from "./Pages/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Project from "./Pages/Project/Project";
import { Container } from "@material-ui/core";
import Footer from "./Pages/Footer";
import LandingContent from "./Pages/Landing/LandingContent";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <LandingContent />
      <Container style={{ backgroundColor: "#ccc" }}>
        <Router>
          <Switch>
            <Route>
              <About />
              <Project />
              <Contact />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
