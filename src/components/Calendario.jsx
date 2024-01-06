import { useEffect, useState, useContext } from "react";
import { Context } from "../store/context";
import "./calendario.css";
const Calendar = (props) => {
  const { store, actions } = useContext(Context);
  const participantes = props.respuestas;
  const fechas = [];
  const contadorDias = new Date(props.inicio);
  const calendarioActual = {};

  const totalDays =
    (props.final.getTime() - props.inicio.getTime()) / (1000 * 3600 * 24);

  for (let i = 0; i <= totalDays; i++) {
    fechas.push(contadorDias.toISOString().slice(0,10));
    contadorDias.setDate(contadorDias.getDate() + 1);
  }
  const meses=[]
  for (let fecha of fechas){
    if (meses.includes(fecha.slice(5,7))==false){
      meses.push(fecha.slice(5,7))
    }
  }
  for (let mes of meses){
    calendarioActual["m"+mes]=[]
    for (let fecha of fechas){
      if (fecha.slice(5,7)==mes){
      calendarioActual["m"+mes].push("d"+fecha.slice(8,10))}
    }
  }
  console.log("calendarioActual",calendarioActual)

  let availableDays = [];
  for (let month in calendarioActual) {
    for (let day of calendarioActual[month]) {
      availableDays.push([month, day]);
    }
  }
  console.log("dias disponibles:",availableDays)

  useEffect(() => {
    actions.countCalendar(participantes, availableDays);
  }, []);

  return (
    <div className="mainCalendario px-5 mx-auto my-4">
      <div className="row containerDiasColumnas d-flex">
        {store.horarios != undefined &&
          store.horarios.map(([mes, dia, horario]) => {
            return (
              <div className="col columnaDia">
                <div className="col d-flex justify-content-center">
                  {dia.slice(1, 3) + "/" + mes.slice(1, 3)}
                </div>
                <div className="timeStack gap-0">
                  {horario.map(([inicio, final]) => {
                    return (
                      <div
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
