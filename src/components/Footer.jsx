import {ReactComponent as Logo} from '../resources/logo.svg'

function Footer() {
  return (
    <div className="container-fluid bg-success text-light fixed-bottom">
      <div className="w-50 mx-auto">
      <footer className="row pt-3">
        <div className="col mb-3 text-light">
          <h5>Aplicación</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-light">
                Personal
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-light">
                Organizaciones
              </a>
            </li>
            <li className="nav-item mb-2">
                Eres nuevo?
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Recursos</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-light">
                Tutoriales
              </a>
            </li>
            <li className='my-4 mx-3'><Logo fill='white' width='70'/></li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5>Nosotros</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-light">
                Preguntas frecuentes
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-light">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </footer>
      </div>
    </div>
  );
}
export default Footer;
