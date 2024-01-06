import Calendar from "../components/Calendario";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/context";
const Evento = (props) => {
  const { store, actions } = useContext(Context);
  const evento=store.eventos[0]
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const inicioString=evento.inicio.toLocaleDateString(undefined,dateOptions)
  const finalString=evento.final.toLocaleDateString(undefined,dateOptions)
  return (
    <div>
      <div className="container py-2">
        <div className="d-flex justify-content-between">
          <h1 className="fw-semibold">Evento: {evento.nombre}</h1>
          <div className="d-flex gap-2">
            <button className="btn btn-success px-5"> Aceptar</button>
            <button className="btn btn-primary px-2">Rechazar</button>
          </div>
        </div>
        <div className="py-4">
          <div className="row">
            <h3 className="fw-semibold">
              Desde el {inicioString}
              hasta el {finalString}
            </h3>
            <h3 className="fw-semibold">Duración: {evento.duracion} horas.</h3>
            <h3 className="fw-semibold">Lugar: {evento.lugar}.</h3>
            {evento.privacidad[0] == true ? (
              <h3 className="fw-semibold">
                {evento.invitados.length} invitaciones,{" "}
                {Object.keys(evento.respuestas).length} aceptada
                {Object.keys(evento.respuestas).length != 1 ? "s" : ""},{" "}
                {evento.rechazados.length} rechazada
                {evento.rechazados.length != 1 ? "s" : ""}.
              </h3>
            ) : (
              <></>
            )}
            <h3 className="mt-4 fw-semibold">
              Evento creado por {evento.organizador}
            </h3>
            {evento.privacidad[1] == true ? (
              <div>
                <h3 className="mt-4 fw-semibold">Invitados:</h3>
                <p>
                  {evento.invitados.map((invitado, i) => {
                    if (Object.hasOwn(evento.respondidos, invitado)) {
                      return (
                        <span className="text-success fw-semibold">
                          {invitado}
                          {i != evento.invitados.length - 1 ? "," : ""}{" "}
                        </span>
                      );
                    } else if (
                      evento.rechazados.find((usuario) => usuario == invitado)
                    ) {
                      return (
                        <span className="text-danger fw-semibold">
                          {invitado}
                          {i != evento.invitados.length - 1 ? "," : ""}{" "}
                        </span>
                      );
                    } else {
                      return (
                        <span className="fw-semibold">
                          {invitado}
                          {i != evento.invitados.length - 1 ? "," : ""}{" "}
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
              {evento.imprescindibles == [] ? (
                evento.imprescindibles.map((imprescindible) => {
                  <span className="fw-semibold">{imprescindible}</span>;
                })
              ) : (
                <span className="fw-semibold">
                  Evento sin invitados imprescindibles
                </span>
              )}
            </p>
            <p className="pt-4 fw-semibold">{evento.descripcion}</p>
          </div>
        </div>
        <h2 className="fw-semibold">Resultados de encuesta</h2>
        <Calendar respuestas={evento.respuestas} inicio={evento.inicio} final={evento.final}/>
        <div>
          <h3>Bloques aprobados:</h3>
        </div>
      </div>
    </div>
  );
};

export default Evento;
