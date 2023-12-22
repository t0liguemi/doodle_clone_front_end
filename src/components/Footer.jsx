import {ReactComponent as Logo} from '../resources/logo.svg'

function Footer() {
  return (
    <div className="container-fluid bg-success text-light fixed-bottom">
      <div className="w-75 mx-auto">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-3 my-2">
        <div className="col mb-3"></div>

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
            <li className='my-5 mx-4'><Logo fill='white' width='80'/></li>
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
