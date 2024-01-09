import Calendar from "../components/Calendario";
import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/context";

const Evento = (props) => {
  const { store, actions } = useContext(Context);
  const [userBlocks, setUserBlocks] = useState();
  const currentUser = "user523";
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const inicioString = store.evento.inicio.toLocaleDateString("es", dateOptions);
  const finalString = store.evento.final.toLocaleDateString("es", dateOptions);

  useEffect(() => {
    actions.meetingResultsToDate();
    actions.userBlocksToDate(currentUser);
  },[store.evento] );

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between">
        <h1 className="fw-semibold">Evento: {store.evento.nombre}</h1>
        <div className="d-flex gap-2">
          <button className="btn btn-success px-5 fw-semibold"> {store.bloquesUsuarioActual.length>0?"Modificar Asistencia":"Aceptar"}</button>
          <button className="btn btn-primary px-2 fw-semibold">Rechazar</button>
        </div>
      </div>  
      <div className="py-4">
        <div className="row">
          <h3 className="fw-semibold">
            Desde el {inicioString} hasta el {finalString}
          </h3>
          <h3 className="fw-semibold">Duración: {store.evento.duracion} horas.</h3>
          <h3 className="fw-semibold">Lugar: {store.evento.lugar}.</h3>
          {store.evento.privacidad[0] == true ? (
            <h3 className="fw-semibold">
              {store.evento.invitados.length} invitaciones,{" "}
              {Object.keys(store.evento.respuestas).length} aceptada
              {Object.keys(store.evento.respuestas).length != 1 ? "s" : ""},{" "}
              {store.evento.rechazados.length} rechazada
              {store.evento.rechazados.length != 1 ? "s" : ""}.
            </h3>
          ) : (
            <></>
          )}
          <h3 className="mt-4 fw-semibold">
            Evento creado por {store.evento.organizador}
          </h3>
          {store.evento.privacidad[1] == true ? (
            <div>
              <h3 className="mt-4 fw-semibold">Invitados:</h3>
              <p>
                {store.evento.invitados.map((invitado, i) => {
                  if (
                    store.evento.respondidos.some(
                      (respondido) => invitado == respondido
                    )
                  ) {
                    return (
                      <span className="text-success fw-semibold" key={invitado}>
                        {invitado}
                        {i != store.evento.invitados.length - 1 ? "," : ""}{" "}
                      </span>
                    );
                  } else if (
                    store.evento.rechazados.find((usuario) => usuario == invitado)
                  ) {
                    return (
                      <span className="text-danger fw-semibold" key={invitado}>
                        {invitado}
                        {i != store.evento.invitados.length - 1 ? "," : ""}{" "}
                      </span>
                    );
                  } else {
                    return (
                      <span className="fw-semibold" key={invitado}>
                        {invitado}
                        {i != store.evento.invitados.length - 1 ? "," : ""}{" "}
                      </span>
                    );
                  }
                })}
              </p>
            </div>
          ) : (
            <></>
          )}
          <p className="pt-4">
            {store.evento.imprescindibles == [] ? (
              store.evento.imprescindibles.map((imprescindible) => {
                <span className="fw-semibold">{imprescindible}</span>;
              })
            ) : (
              <span className="fw-semibold">
                Evento sin invitados imprescindibles
              </span>
            )}
          </p>
          <p className="pt-4 fw-semibold">{store.evento.descripcion}</p>
        </div>
      </div>
      <h2 className="fw-semibold">Resultados de encuesta</h2>
      <Calendar/>
      <div className="mb-4">
        <h3>Bloques aprobados:</h3>
        {store.fechasPosiblesSeparadas != [] &&
          store.fechasPosiblesSeparadas.map((horario, i) => {
            return (
              <h5 className="fw-semibold" key={"horario" + i}>
                {horario[0]
                  .toLocaleDateString("es", dateOptions)
                  .charAt(0)
                  .toUpperCase() +
                  horario[0].toLocaleDateString("es", dateOptions).slice(1)}
                : Desde las {horario[1][0]}:00 hasta las {horario[1][1]}:00.
              </h5>
            );
          })}
      </div>
      <hr />
      <div className="my-4">
        <form>
        <h2 className="mb-4 fw-semibold">Tu Respuesta:</h2>
        <div className="my-4">
          <h4 className="fw-semibold">Agregar bloques de disponibilidad:</h4>
          <div className="row my-3">
            <h5 className="col fw-semibold">El día</h5>
            <input name="fechaNuevoBloque" type="date" className="col form-select fw-semibold" min={store.evento.inicio.toISOString().slice(0,10)} max={store.evento.final.toISOString().slice(0,10)}></input>
            <h5 className="col fw-semibold">desde las</h5>
            <select name="horaInicioNuevoBloque" className="form-select form-select-sm col fw-semibold">
              <option value="0">0:00</option>
              <option value="1">1:00</option>
              <option value="2">2:00</option>
              <option value="3">3:00</option>
              <option value="4">4:00</option>
              <option value="5">5:00</option>
              <option value="6">6:00</option>
              <option value="7">7:00</option>
              <option value="8">8:00</option>
              <option value="9">9:00</option>
              <option value="10">10:00</option>
              <option value="11">11:00</option>
              <option value="12">12:00</option>
              <option value="13">13:00</option>
              <option value="14">14:00</option>
              <option value="15">15:00</option>
              <option value="16">16:00</option>
              <option value="17">17:00</option>
              <option value="18">18:00</option>
              <option value="19">19:00</option>
              <option value="20">20:00</option>
              <option value="21">21:00</option>
              <option value="22">22:00</option>
              <option value="23">23:00</option>
            </select>
            <h5 className="col fw-semibold">hasta las</h5>
            <select name="horaFinalNuevoBloque" className="form-select form-select-sm col fw-semibold">
              <option value="1">1:00</option>
              <option value="2">2:00</option>
              <option value="3">3:00</option>
              <option value="4">4:00</option>
              <option value="5">5:00</option>
              <option value="6">6:00</option>
              <option value="7">7:00</option>
              <option value="8">8:00</option>
              <option value="9">9:00</option>
              <option value="10">10:00</option>
              <option value="11">11:00</option>
              <option value="12">12:00</option>
              <option value="13">13:00</option>
              <option value="14">14:00</option>
              <option value="15">15:00</option>
              <option value="16">16:00</option>
              <option value="17">17:00</option>
              <option value="18">18:00</option>
              <option value="19">19:00</option>
              <option value="20">20:00</option>
              <option value="21">21:00</option>
              <option value="22">22:00</option>
              <option value="23">23:00</option>
              <option value="24">24:00</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center">
          <button className="btn btn-primary fw-semibold w-25" onClick={(event)=>actions.addNewAvailability(event,currentUser)}>
            Agregar Bloque
          </button>
        </div>
        </form>
        <div className="my-3">
          <h4 className="fw-semibold">Tus bloques:</h4>
          {store.bloquesUsuarioActual != [] &&
            store.bloquesUsuarioActual.map((horario, i) => {
              return (
                <div
                  className="row align-items-baseline"
                  key={"disponibilidad" + i}
                >
                  <h5 className="fw-semibold col-5">
                    {horario[0]
                      .toLocaleDateString("es", dateOptions)
                      .charAt(0)
                      .toUpperCase() +
                      horario[0].toLocaleDateString("es", dateOptions).slice(1)}
                    : {horario[1][0] / 100}:00 - {horario[1][1] / 100}:00
                  </h5>

                  <button
                    className="btn col-1 fs-5 fw-bold text-danger"
                    onClick={() =>{
                      actions.deleteAvailability(
                        horario[2],
                        horario[1],
                        currentUser
                      )}
                    }
                  >
                    X
                  </button>
                  <div className="col-5"></div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Evento;
