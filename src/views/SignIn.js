import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../resources/logo.svg";

function LoginView() {
  return (
    <>
      <form className="container p-3">
        <Logo width={30} height={35} fill="#f18805" className="ms-2" />{" "}
        <h1 className="h3 mb-3 mt-3 fw-normal"></h1>
        <div className="form-floating text-center ">
          <input
            type="email"
            className="form-control text-center m-2"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput text-center">Email</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control text-center m-2"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Contraseña</label>
        </div>
        <div className="form-check text-start my-3">
          <input
            className="form-check-input ms-1 "
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Recordar
          </label>
        </div>
        <button className="btn btn-primary w-100 m-2 py-2" type="submit">
          Ingresar
        </button>
        <button className="btn btn-outline-primary m-2 w-100 ">
          Crear Cuenta
        </button>
      </form>{" "}
    </>
  );
}

export default LoginView;
