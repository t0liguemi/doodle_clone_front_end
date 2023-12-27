import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../resources/logo.svg";

function LoginView() {
  return (
    <>
      <form className="container p-3">
        <Logo width={30} height={35} fill="#f18805" />{" "}
        <h1 class="h3 mb-3 mt-3 fw-normal">Please sign in</h1>
        <div class="form-floating text-center ">
          <input
            type="email"
            class="form-control text-center"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput text-center">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control text-center"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div class="form-check text-start my-3">
          <input
            class="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
      </form>{" "}
    </>
  );
}

export default LoginView;
