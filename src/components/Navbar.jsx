import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as Logo } from "../resources/logo.svg";
import './navbarStyle.css'


function Navbar() {  

 /* const [showView, setShowView] = useState('home')
    
    
  const handleButtonClick = (view) => {
    setShowView(view)
  }
  */

  return (
    <>

        <nav
          className="navbar navbar-expand-md border"
          id="navbar-yessir"
          aria-label="Fourth navbar example"
        >
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold d-inline" to="#">
              <Logo width={30} height={35} fill="#f18805" /> <span className="text-primary fw-bold">Reu</span><span className="fw-bold text-success">plan</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample04"
              aria-controls="navbarsExample04"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse  " id="navbarsExample04">
              <ul className="navbar-nav  me-auto mb-2 mb-md-0 ">
                <li className="nav-item ">
                  <Link className="nav-link " aria-current="page" to="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link disabled " to="#">
                    Sobre Reuplan
                  </Link>
                </li>
              </ul>
              <button className="btn btn-primary fs-6 fw-bold" id="login-btn" /*onClick={handleButtonClick('loginView')}*/ >Iniciar Sesión</button>

           
            </div>
          </div>
        </nav>
    </>
  );
}

export default Navbar;
