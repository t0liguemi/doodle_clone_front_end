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
  [1200, 1730],
];
participantes = [persona1, persona2];


let primeraHora = participantes[0].m02.d05[0][0];
for (let participante of participantes) {
  if (participante.m02.d05[0][0] > primeraHora) {
    primeraHora = participante.m02.d05[0][0];
  }
}
let ultimaHora = participantes[0].m02.d05[participantes[0].m02.d05.length-1][1];
for (let participante of participantes) {
  if (participante.m02.d05[participante.m02.d05.length-1][1] < ultimaHora) {
    ultimaHora = participante.m02.d05[participante.m02.d05.length-1][1];
  }
}

console.log(calendarioActual)
function Calendar() {
  return (
    <div>
    </div>
  );
}

export default Calendar;
