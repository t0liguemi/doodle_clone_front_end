import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/context";
import "./calendario.css";
const Calendar = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.countCalendar();
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
