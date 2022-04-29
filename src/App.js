import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Quiz } from "./components/Pages/Quiz";
import { Contact } from "./components/Pages/Contact";
import Footer from "./components/Footer";
import ProgressBar from "./components/Pages/Progress.js";
// changes in whole About design,contact,quiz,blog,home
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <ProgressBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
