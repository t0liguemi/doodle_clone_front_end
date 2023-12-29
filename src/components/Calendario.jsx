import "./calendario.css";
let participantes = [];
let persona1 = { m02: { d05: [] } };
let persona2 = { m02: { d05: [] } };

let calendarioActual = { m02: { d05: [] } };

persona1.m02.d05 = [
  [1030, 1200],
  [1600, 1800],
];
persona2.m02.d05 = [
  [1100, 1230],
  [1400, 1830],
];

participantes = [persona1, persona2];

let primeraHora = participantes[0].m02.d05[0][0];
for (let participante of participantes) {
  if (participante.m02.d05[0][0] > primeraHora) {
    primeraHora = participante.m02.d05[0][0];
  }
}
let ultimaHora =
  participantes[0].m02.d05[participantes[0].m02.d05.length - 1][1];
for (let participante of participantes) {
  if (participante.m02.d05[participante.m02.d05.length - 1][1] < ultimaHora) {
    ultimaHora = participante.m02.d05[participante.m02.d05.length - 1][1];
  }
}

let bloques = [[1000,1200],
  [1300, 1400],
];
let bloquesPorcentual = bloques.map(([inicio, fin]) => {
  return [inicio / 24, fin / 24];
});
let bloquesString = bloques.map(([inicio, final]) => {
  return [
    parseInt(inicio / 100) +
      ":" +
      parseInt(inicio % 100) / 10 +
      "0 - " +
      parseInt(final / 100) +
      ":" +
      parseInt(final % 100) / 10 +
      "0",
  ];
});

console.log(calendarioActual);
function Calendar() {
  return (
    <div className="mainCalendario px-5 mx-auto my-4">
      <div className="row containerDiasColumnas d-flex">
        <div className="col columnaDia">
          <div className="col d-flex justify-content-center">Lun</div>
          <div className="timeStack gap-0">
            {bloquesPorcentual.map(([inicio, fin], i) => {
              return (
                <div
                  className="greenBlock my-0 py-0"
                  style={{
                    height: fin * 4 - inicio * 4 + "px",
                    position: "relative",
                    top: inicio * 4 + "px",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {bloquesString[i]}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col columnaDia">
          <div className="col d-flex justify-content-center">Lun</div>
          <div className="timeStack">
            {bloquesPorcentual.map(([inicio, fin], i) => {
              return (
                <div
                  className="greenBlock"
                  style={{
                    height: fin*4-inicio*4 + "px",
                    position: "relative",
                    top: inicio * 4 + "px",
                  }}
                >
                  {bloquesString[i]}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col columnaDia">
          {" "}
          <div className="col d-flex justify-content-center">Lun</div>
          <div className="timeStack">
            {bloquesPorcentual.map(([inicio, fin], i) => {
              return (
                <div
                  className="greenBlock"
                  style={{
                    height: fin - inicio + "%",
                    position: "relative",
                    top: inicio + "%",
                  }}
                >
                  {bloquesString[i]}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col columnaDia">
          {" "}
          <div className="col d-flex justify-content-center">Lun</div>
          <div className="timeStack">
            {bloquesPorcentual.map(([inicio, fin], i) => {
              return (
                <div
                  className="greenBlock"
                  style={{
                    height: fin - inicio + "%",
                    position: "relative",
                    top: inicio + "%",
                  }}
                >
                  {bloquesString[i]}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col columnaDia">
          {" "}
          <div className="col d-flex justify-content-center">Lun</div>
          <div className="timeStack">
            {bloquesPorcentual.map(([inicio, fin], i) => {
              return (
                <div
                  className="greenBlock"
                  style={{
                    height: fin - inicio + "%",
                    position: "relative",
                    top: inicio + "%",
                  }}
                >
                  {bloquesString[i]}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col columnaDia">
          {" "}
          <div className="col d-flex justify-content-center">Lun</div>
          <div className="timeStack">
            {bloquesPorcentual.map(([inicio, fin], i) => {
              return (
                <div
                  className="greenBlock"
                  style={{
                    height: fin - inicio + "%",
                    position: "relative",
                    top: inicio + "%",
                  }}
                >
                  {bloquesString[i]}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col columnaDia">
          {" "}
          <div className="col d-flex justify-content-center">Lun</div>
          <div className="timeStack">
            {bloquesPorcentual.map(([inicio, fin], i) => {
              return (
                <div
                  className="greenBlock"
                  style={{
                    height: fin - inicio + "%",
                    position: "relative",
                    top: inicio + "%",
                  }}
                >
                  {bloquesString[i]}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
