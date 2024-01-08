import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/context";
import "./calendario.css";
const Calendar = (props) => {
  const { store, actions } = useContext(Context);
  const participantes = props.respuestas;
  const fechas = [];
  const contadorDias = new Date(props.inicio);

  const totalDays = //cantidad de dias en que puede hacerse el evento
    (props.final.getTime() - props.inicio.getTime()) / (1000 * 3600 * 24);

  for (let i = 0; i <= totalDays; i++) {
    //agrega a fechas las posibles fechas en formato yyyy-mm-dd
    fechas.push(contadorDias.toISOString().slice(0, 10));
    contadorDias.setDate(contadorDias.getDate() + 1);
  }
  let availableDays = []; //generar de las fechas las tuplas [yxxxx,mxx,dxx] para generar cada dia
  fechas.forEach((fecha)=>{availableDays.push(["y"+fecha.slice(0,4),"m"+fecha.slice(5,7),"d"+fecha.slice(8,10)])});

  useEffect(() => {
    actions.countCalendar(participantes, availableDays, props.idEvento);
  }, []);

  return (
    <div className="mainCalendario px-5 mx-auto my-4 overflow-x-scroll">
      <div className="d-flex">
        {store.horarios != undefined &&
          store.horarios.map(([anno, mes, dia, horario]) => {
            return (
              <div className="columnaDia" key={"diaCalendario" + mes + dia}>
                <div className="justify-content-center">
                  {dia.slice(1, 3) + "/" + mes.slice(1, 3)+"/"+anno.slice(1)}
                </div>
                <div className="timeStack gap-0">
                  {horario.map(([inicio, final]) => {
                    return (
                      <div
                        key={"bloqueInicia" + inicio}
                        className="greenBlock my-0 py-0"
                        style={{
                          height:
                            (final * 100) / 24 - (inicio * 100) / 24 + "%",
                          position: "sticky",
                          top: (inicio * 100) / 24 + "%",
                          padding: 0,
                          overflow: "hidden",
                        }}
                      >
                        {parseInt(inicio) +
                          ":" +
                          "00 - " +
                          parseInt(final) +
                          ":" +
                          "00"}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Calendar;
