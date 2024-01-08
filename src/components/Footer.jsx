import { ReactComponent as Logo } from "../resources/logo.svg";

function Footer() {
  return (
    <div className="mt-auto">
      <footer className="footer pt-3 bg-success text-light">
        <div className="row w-50 mx-auto">
          <div className="col mb-3 text-light">
            <h5>Aplicación</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2" key="1">
                <a href="#" className="nav-link p-0 text-light">
                  Personal
                </a>
              </li>
              <li className="nav-item mb-2" key="2">
                <a href="#" className="nav-link p-0 text-light">
                  Organizaciones
                </a>
              </li>
              <li className="nav-item mb-2">Eres nuevo?</li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Recursos</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2" key="3">
                <a href="#" className="nav-link p-0 text-light">
                  Tutoriales
                </a>
              </li>
              <li className="my-4 mx-3" key="4">
                <Logo fill="white" width="70" />
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5>Nosotros</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2" key="5">
                <a href="#" className="nav-link p-0 text-light">
                  Preguntas frecuentes
                </a>
              </li>
              <li className="nav-item mb-2" key="6">
                <a href="#" className="nav-link p-0 text-light">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      </div>
  );
}
export default Footer;
