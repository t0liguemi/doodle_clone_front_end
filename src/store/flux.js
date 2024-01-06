const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      horarios: [],
      eventos: [
        {
          id: "evento001",
          nombre: "Cumpleaños Sole",
          lugar: "Por determinar (acepto propuestas)",
          inicio: new Date(2023, 9, 29),
          final: new Date(2023, 10, 11),
          duracion: 3,
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
          respondidos: ["user523"],
          respuestas: [
            {
              m10: { d29: [[]], d30: [[]], d31: [[1000, 24000]] },
              m11: {
                d01: [[0, 2200]],
                d02: [[1400, 2200]],
                d03: [[1600, 2400]],
                d04: [[0, 400]],
                d05: [],
                d06: [],
                d07: [],
                d08: [],
                d09: [],
                d10: [],
                d11: [],
              },
            },
          ],
          descripcion:
            "Puede ser en la sala de mi depto o podemos ir a algún bar, puse un minimo de 3 horas en la app para que no se haga muy corto. Si tienen ideas pongalas aca mismo o mandenmelas por wsp. Hay un fds en que no puedo en la tarde, los marqué ya eso si. No tengo el mail de la Sofi, alguien me lo manda pa agregarla? No me responde el wsp ni llamadas. Cariños Sole. PD: NO GASTEN EN REGALOS PORFA SOY FELIZ CON QUE VENGAN.",
          privacidad: [true, true, true, true],
          requisitos: [true, false, false, false],
        },
      ],
    },
    actions: {
      countCalendar: (invitados, fechas) => {
        setStore({ horarios: [] });
        fechas.forEach(([mes, dia]) => {
          let countingCalendar = new Array(24);
          countingCalendar.fill(0, 0);
          let booleanCalendar = new Array(24);
          let possibleHours = [];
          let possibleBlock = [];
          let invitadoMensual = {};
          let invitadoDiario = {};
          const currentStore = getStore();
          for (let invitado of invitados) {
            booleanCalendar = booleanCalendar.map((element) => 0);
            invitadoMensual = invitado[mes];
            console.log("horario de invitado por mes", invitadoMensual);
            invitadoDiario = invitadoMensual[dia];
            console.log("horario de invitado por dia", invitadoDiario);
            for (let horario of invitadoDiario) {
              booleanCalendar.fill(true, horario[0] / 100, horario[1] / 100);
            }
            booleanCalendar.forEach((hour, i) => {
              if (hour === true) {
                countingCalendar[i] += 1;
              }
            });
          }
          countingCalendar.forEach((hour, i) => {
            if (hour == invitados.length) {
              possibleHours.push(i);
            }
          });
          if (possibleHours.length == 0) {
            setStore({ horarios: [...currentStore.horarios, [mes, dia, []]] });
          } else {
            possibleBlock.push([possibleHours[0], possibleHours[0] + 1]);
            possibleHours.forEach((hour, i) => {
              if (i == 0 && possibleHours[i + 1] - hour > 1) {
              } else if (possibleHours.length == 1) {
              } else if (
                possibleHours[i + 1] - hour == 1 &&
                hour - possibleHours[i - 1] == 1
              ) {
              } else if (
                i == possibleHours.length - 1 &&
                hour - possibleHours[i - 1] > 1
              ) {
                possibleBlock.push([hour, hour + 1]);
              } else if (i == possibleHours.length - 1) {
                possibleBlock[possibleBlock.length - 1][1] = hour + 1;
              } else if (possibleHours[i + 1] - hour > 1) {
                possibleBlock[possibleBlock.length - 1][1] = hour + 1;
              } else if (hour - possibleHours[i - 1] > 1) {
                possibleBlock.push([hour, hour + 1]);
              }
            });

            setStore({
              horarios: [...currentStore.horarios, [mes, dia, possibleBlock]],
            });
          }
        });
      },
    },
  };
};
export default getState;
