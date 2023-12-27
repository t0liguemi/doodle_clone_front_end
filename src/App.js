import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import injectContext from "./store/context.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome  from "./Views/WelcomeSplash.js";
import "./custom.css";
import Footer from "./components/Footer.jsx"
import CreateEvent from "./Views/createEvent.js";


function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<CreateEvent/>}/>
          <Route path="/" element={<Welcome/>}/>
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    
      
    </div>

  );
}

export default injectContext(App);
