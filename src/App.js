import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import injectContext from "./store/context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx"
import CreateEvent from "./views/CreateEvent.js";
import Welcome  from "./views/WelcomeSplash.js";
import Evento from "./views/Evento.js";
import "./custom.css";




function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<CreateEvent/>}/>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/evento" element={<Evento/>}/>
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    
      
    </div>

  );
}

export default injectContext(App);
