import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import injectContext from "./store/context.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./views/Welcome";
import Bienvenida from './componets/welcomeSplah.js';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>

      <Bienvenida/>
      
    </div>

  );
}

export default injectContext(App);
