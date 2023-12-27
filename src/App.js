import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import injectContext from "./store/context.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Welcome  from "./views/WelcomeSplash.js";
import "./custom.css";
import Footer from "./components/Footer.jsx"
import CreateEvent from "./views/CreateEvent.js";
import EventList from "./views/EventList.js";
=======
import Footer from "./components/Footer.jsx"
import CreateEvent from "./views/CreateEvent.js";
import Welcome  from "./views/WelcomeSplash.js";
import "./custom.css";


>>>>>>> a40d72bd749c0a72cb77e0d4d6bf6de9ff3a5c74


function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<CreateEvent/>}/>
          <Route path="/eventList" element={<EventList/>}/>
          <Route path="/" element={<Welcome/>}/>
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    
      
    </div>

  );
}

export default injectContext(App);