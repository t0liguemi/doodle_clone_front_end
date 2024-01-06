import Calendar from "../components/Calendario";
let evento = {
  nombre: "Cumpleaños Sole",
  lugar: "Por determinar (acepto propuestas)",
  inicio: 29102023, //ddmmyy
  final: 11112023,
  organizador: "user523", //id
  invitados: [
    "user523",
    "Alberto Asper",
    "Diego Armando",
    "Esteban Q.",
    "Lucía Fernández",
    "Pablo Poblete",
  ], //ids
  imprescindibles: [],
  rechazados: ["Alberto Asper"],
  respuestas: {
    user523: {
      m10: { d29: [[]], d30: [[]], d31: [[1000, 24000]] },
      m11: {
        d01: [[0, 2200]],
        d02: [[1400, 2200]],
        d03: [[1600, 2400]],
        d04: [[0, 4000]],
      },
    },
  },
  descripcion:
    "Puede ser en la sala de mi depto o podemos ir a algún bar, puse un minimo de 3 horas en la app para que no se haga muy corto. Si tienen ideas pongalas aca mismo o mandenmelas por wsp. Hay un fds en que no puedo en la tarde, los marqué ya eso si. No tengo el mail de la Sofi, alguien me lo manda pa agregarla? No me responde el wsp ni llamadas. Cariños Sole. PD: NO GASTEN EN REGALOS PORFA SOY FELIZ CON QUE VENGAN.",
};
function Evento() {
  return (
    <div><div className="container py-2">
        <div className="d-flex justify-content-between"><h1>Evento: {evento.nombre}</h1><div className="d-flex gap-2"><button className="btn btn-success px-3"> Aceptar</button><button className="btn btn-primary px-1">Rechazar</button></div></div>
      <Calendar />
      </div>
    </div>
  );
}

export default Evento;
