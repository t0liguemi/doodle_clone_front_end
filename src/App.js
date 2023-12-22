import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import injectContext from "./store/context.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx"
import './custom.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"/>
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
