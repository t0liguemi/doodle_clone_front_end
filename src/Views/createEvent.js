let listitaProvisoria = [
  "Diego Armando M.",
  "Lucila Godoy A.",
  "Neftalí Reyes B."
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
          <input type="text" className="form-control" placeholder="lugar(presencial) / app(online)"></input>
        </div>
      </div>
      <div className="my-2 row">
        <div className="col-6 d-flex flex-column">
          <h3>Privacidad</h3>
          <h4>Usuarios Pueden:</h4>
          <div class="form-check py-2  ">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="form-check-label fs-5 fw-semibold"
              for="flexCheckDefault"
            >
              Ver cuántos invitados hay
            </label>
          </div>
          <div className="form-check ms-5 py-2">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label
              className="form-check-label fs-5 fw-semibold"
              for="flexCheckChecked"
            >
              Ver a otros invitados
            </label>
          </div>
          <div className="form-check ms-5 py-2">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label
              className="form-check-label fs-5 fw-semibold"
              for="flexCheckChecked"
            >
              Ver quienes han respondido
            </label>
          </div>
          <div className="form-check py-2">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label
              className="form-check-label fs-5 fw-semibold"
              for="flexCheckChecked"
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
                id="flexCheckChecked"
                checked
              />
              <label
                className="form-check-label fs-5 fw-semibold"
                for="flexCheckChecked"
              >
                Email verificado
              </label>
            </div>
            <div className="col-6 form-check py-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label
                className="form-check-label fs-5 fw-semibold"
                for="flexCheckChecked"
              >
                Nombre
              </label>
            </div>
            <div className="col-6 form-check py-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label
                className="form-check-label fs-5 fw-semibold"
                for="flexCheckChecked"
              >
                Número de teléfono
              </label>
            </div>
            <div className="col-6 form-check py-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label
                className="form-check-label fs-5 fw-semibold"
                for="flexCheckChecked"
              >
                Dirección
              </label>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column">
        <div className="d-flex">
          <h2>Invitados</h2>
          <button className="btn btn-primary px-4 py-2 mx-5">
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
                        checked
                      />
                      <label
                        className="form-check-label fs-5 fw-semibold"
                        for="flexCheckChecked"
                      >
                        Hacer imprescindible
                      </label>
                    </div>
                    <div className="text-danger">X</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default CreateEvent;
