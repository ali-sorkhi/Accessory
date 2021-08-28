import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Calendar from "./pages/Calendar";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/contactUs" component={ContactUs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
