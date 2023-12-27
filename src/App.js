import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import injectContext from "./store/context.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import "./custom.css";
import CreateEvent from "./Views/createEvent.js";
//import Welcome from "./views/Welcome";
import Navbar from "./components/Navbar.jsx";
import LoggedInNavbar from "./components/LoggedInNavbar.jsx";
import LoginView from "./Views/loginView.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LoggedInNavbar />
        <Navbar />
        <Routes>
          <Route path="/Sign-in" element={<LoginView />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
