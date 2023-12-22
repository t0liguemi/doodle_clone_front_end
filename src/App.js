import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import injectContext from "./store/context.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Footer from "./components/Footer.jsx";
import "./custom.css";
import Navbar from "./components/Navbar.jsx";
=======
import Footer from "./components/Footer.jsx"
import './custom.css';
import CreateEvent from "./Views/createEvent.js";

>>>>>>> 57f788ae848001db08d28bead93bb547f7458244

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"/>
          <Route path="/create" element={<CreateEvent/>}/>
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
