import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import injectContext from "./store/context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Evento from "./views/Evento.js";
import Footer from "./components/Footer.jsx";
import "./custom.css";
import CreateEvent from "./views/CreateEvent.js";
import Navbar from "./components/Navbar.jsx";
import LoggedInNavbar from "./components/LoggedInNavbar.jsx";
import LoginView from "./views/SignIn.js";
import Welcome from "./views/WelcomeSplash.js";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <BrowserRouter>
        <LoggedInNavbar />
        <Navbar />
        <Routes>
          <Route path="/signin" element={<LoginView />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/evento" element={<Evento />} />
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
