import { useEffect, useState, useContext } from "react";
import { Context } from "../store/context";
import "./calendario.css";
const Calendar = (props) => {
  const { store, actions } = useContext(Context);
  let participantes = [];
  let persona1 = {
    m02: {
      d05: [
        [1000, 1400],
      ],
      d06: [
        [1000, 1400],
        [1500, 2400],
      ],
    },
  };
  let persona2 = {
    m02: {
      d05: [
        [1200, 1600],
        [1800, 2000],
      ],
      d06: [
        [1100, 1500],
        [1400, 1700],
      ],
    },
  };
  let persona3 = {
    m02: {
      d05: [[1800, 2200]],
      d06: [
        [900, 1400],
        [1500, 1900],
      ],
    },
  };

  let calendarioActual = { m02: { d05: [], d06: [] } };
  participantes = [persona1, persona2, persona3];
  let availableDays = [];
  for (let month in calendarioActual) {
    for (let day in calendarioActual[month]) {
      availableDays.push([month, day]);
    }
  }

  useEffect(() => {
    actions.countCalendar(participantes, availableDays);
  }, []);

  return (
    <div className="mainCalendario px-5 mx-auto my-4">
      <h4>Bloques disponibles</h4>
      <div className="row containerDiasColumnas d-flex">
        {store.horarios != undefined &&
          store.horarios.map(([mes, dia, horario]) => {
            return (
              <div className="col columnaDia">
                <div className="col d-flex justify-content-center">
                  {dia.slice(1,3) + "/" + mes.slice(1,3)}
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
}

export default Calendar;
