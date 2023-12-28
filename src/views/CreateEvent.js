let listitaProvisoria = [
  "Diego Armando M.",
  "Lucila Godoy A.",
  "Neftalí Reyes B.",
];

function CreateEvent() {
  return (
    <div className="container py-2">
      <h1 className="fw-semibold">Nuevo evento:</h1>
      <br />
      <div className="d-flex align-items-center">
        <div className="w-50">
          <h2>Nombre del evento:</h2>
        </div>
        <input
          className="form-control w-75 my-1"
          placeholder="inserta el nombre de tu evento"
        ></input>
      </div>
      <div className="d-flex align-items-center my-3">
        <div className="col-6 d-flex align-items-center me-4">
          <h2 className="col-6">Fecha inicio:</h2>
          <input type="date" className="form-control col-6"></input>
        </div>
        <div className="col-6 d-flex align-items-center">
          <h2 className="col-6">Fecha final:</h2>{" "}
          <input type="date" className="form-control"></input>
        </div>
      </div>
      <div className="d-flex align-items-center my-3">
        <div className="col-6 d-flex align-items-center me-4">
          <h3 className="col-7">Duración mínima</h3>
          <input
            className="form-control"
            type="number"
            min="1"
            max="12"
          ></input>
        </div>
        <div className="col-6 d-flex align-items-center">
          <h3 className="col-3">Lugar</h3>{" "}
          <input
            type="text"
            className="form-control"
            placeholder="lugar(presencial) / app(online)"
          ></input>
        </div>
      </div>
      <div className="my-5 row">
        <div className="col-6 d-flex flex-column">
          <h3>Privacidad</h3>
          <h4>Usuarios Pueden:</h4>
          <div class="form-check py-2  ">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="cantidadInvitados"
            />
            <label
              className="form-check-label fs-5 fw-semibold"
              for="cantidadInvitados"
            >
              Ver cuántos invitados hay
            </label>
          </div>
          <div className="form-check ms-5 py-2">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invitadosID"
            />
            <label
              className="form-check-label fs-5 fw-semibold"
              for="invitadosID"
            >
              Ver a otros invitados
            </label>
          </div>
          <div className="form-check ms-5 py-2">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="respuestasInvitados"
            />
            <label
              className="form-check-label fs-5 fw-semibold"
              for="respuestasInvitados"
            >
              Ver quienes han respondido
            </label>
          </div>
          <div className="form-check py-2">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invitadosImprescindibles"
            />
            <label
              className="form-check-label fs-5 fw-semibold"
              for="invitadosImprescindibles"
            >
              Saber si hay, o no, invitados imprescindibles
            </label>
          </div>
        </div>
        <div className="col-6 d-flex flex-column">
          <h3>Requisitos de invitación:</h3>
          <h4>Usuarios deben tener:</h4>
          <div className="d-flex flex-column">
            <div className="col-6 form-check py-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="email"
              />
              <label className="form-check-label fs-5 fw-semibold" for="email">
                Email verificado
              </label>
            </div>
            <div className="col-6 form-check py-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="nombre"
              />
              <label className="form-check-label fs-5 fw-semibold" for="nombre">
                Nombre
              </label>
            </div>
            <div className="col-6 form-check py-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="telefono"
              />
              <label
                className="form-check-label fs-5 fw-semibold"
                for="telefono"
              >
                Número de teléfono
              </label>
            </div>
            <div className="col-6 form-check py-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="direccion"
              />
              <label
                className="form-check-label fs-5 fw-semibold"
                for="direccion"
              >
                Dirección
              </label>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column my-5">
        <div className="d-flex">
          <h2>Invitados</h2>
          <button
            type="button"
            className="btn btn-primary px-4 py-2 mx-5 fw-semibold"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Agregar invitado
          </button>
        </div>
        <div className="py-2">
          <ul className="list-group list-group-flush">
            {listitaProvisoria.map((item) => {
              return (
                <li className="list-group-item fs-4 fw-semibold">
                  <div className="d-flex align-items-center">
                    <h4 className="col-6">{item}</h4>
                    <div className="form-check mx-4 col-5">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label fs-5 fw-semibold"
                        for="flexCheckChecked"
                      >
                        Hacer imprescindible
                      </label>
                    </div>
                    <button className="btn text-danger fw-bold fs-4">X</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Agregar invitado
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h5>Ingresa el e-mail al que llegará la invitación:</h5>
              <input type="text" className="input form-control my-3" placeholder="email"/>
              <p>Si el correo indicado está registrado, tu invitado recibirá la invitación por la aplicación y por e-mail</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                className="btn btn-secondary rounded-0"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateEvent;
