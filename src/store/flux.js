const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      horarios: [],
      evento: {
        idEvento: "evento001",
        nombre: "Cumpleaños Sole",
        lugar: "Por determinar (acepto propuestas)",
        inicio: new Date(2023, 9, 28),
        final: new Date(2023, 10, 12),
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
        respondidos: ["user523", "Esteban Q."],
        respuestas: [
          {
            userID: "user523",
            y2023: {
              m10: { d28: [], d29: [], d30: [], d31: [[1000, 24000]] },
              m11: {
                d01: [
                  [0, 100],
                  [1200, 1800],
                ],
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
                d12: [],
              },
            },
          },
          {
            userID: "Esteban Q.",
            y2023: {
              m10: { d28: [], d29: [], d30: [], d31: [[1000, 2000]] },
              m11: {
                d01: [[0, 2400]],
                d02: [[1800, 2200]],
                d03: [[1600, 2400]],
                d04: [[0, 400],[1100,1700]],
                d05: [],
                d06: [],
                d07: [],
                d08: [],
                d09: [],
                d10: [],
                d11: [],
                d12: [],
              },
            },
          },
        ],
        descripcion:
          "Puede ser en la sala de mi depto o podemos ir a algún bar, puse un minimo de 3 horas en la app para que no se haga muy corto. Si tienen ideas pongalas aca mismo o mandenmelas por wsp. Hay un fds en que no puedo en la tarde, los marqué ya eso si. No tengo el mail de la Sofi, alguien me lo manda pa agregarla? No me responde el wsp ni llamadas. Cariños Sole. PD: NO GASTEN EN REGALOS PORFA SOY FELIZ CON QUE VENGAN.",
        privacidad: [true, true, true, true],
        requisitos: [true, false, false, false],
      },
    },
    actions: {
      userBlocksToDate: (userID) => {
        const currentStore = getStore();
        const userBlocksAsDates=[]
        const userBlocks = currentStore.evento.respuestas.find(
          (respuesta) => respuesta.userID == userID
        );
        console.log("userBlock",userBlocks)
        const dates = currentStore.horarios.filter(
          (element) => currentStore.evento.idEvento == element[4]
        );
        for (let [year,month,day,h,id] of dates){
          userBlocks[year][month][day].forEach(value=>userBlocksAsDates.push([year,month,day,value]))
        }
        const dateAndSchedule = userBlocksAsDates.map(([y, m, d, h, id]) => {
          return [new Date(y.slice(1, 5), m.slice(1, 3) - 1, d.slice(1, 3)), h];
        });
        console.log("date&sch",dateAndSchedule)
        return dateAndSchedule
      },
      thisEventsSchedules: (eventID) => {
        const currentStore = getStore();
        const result = currentStore.horarios.filter(
          (element) => eventID == element[4]
        );
        return result;
      },
      meetingResultsToDate: () => {
        const currentStore = getStore();
        const meetingResults = currentStore.horarios.filter(
          (element) => element[3] != ""
        );
        const dateAndSchedule = meetingResults.map(([y, m, d, h, id]) => {
          return [new Date(y.slice(1, 5), m.slice(1, 3) - 1, d.slice(1, 3)), h];
        });
        const result = [];
        dateAndSchedule.forEach((element) => {
          element[1].forEach((schedule) => {
            result.push([element[0], schedule]);
          });
        });
        return result;
      },
      countCalendar: (invitados, fechas, idEvento) => {
        const currentStore = getStore();
        setStore({ horarios: [] });
        fechas.forEach(([anno, mes, dia]) => {
          //Por cada fecha en que el evento es posible mira las posibilidades de los asistentes
          let countingCalendar = new Array(24);
          countingCalendar.fill(0, 0);
          let booleanCalendar = new Array(24);
          let possibleHours = [];
          let possibleBlock = [];
          let invitadoMensual = {};
          let invitadoDiario = {};
          let invitadoAnual = {};

          for (let invitado of invitados) {
            //respuesta por invitado => horario de booleanos => countingCalendar muestra la suma de true's (asistencias)
            booleanCalendar = booleanCalendar.map((element) => 0);
            invitadoAnual = invitado[anno];
            invitadoMensual = invitadoAnual[mes];
            invitadoDiario = invitadoMensual[dia];
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
            // por cada bloque: Suma de asistencias = Cantidad de asistentes ? = ese bloque es posible
            if (hour == invitados.length) {
              possibleHours.push(i);
            }
          });

          //Condiciones para ver como se comporta cada bloque de una hora para generar los pares [inicio,final]
          if (possibleHours.length == 0) {
            //No hay bloques posibles
            setStore({
              horarios: [
                ...currentStore.horarios,
                [anno, mes, dia, [], idEvento],
              ],
            });
          } else {
            possibleBlock.push([possibleHours[0], possibleHours[0] + 1]);
            possibleHours.forEach((hour, i) => {
              if (i == 0 && possibleHours[i + 1] - hour > 1) {
                //El bloque a es el primero y esta solo => [[a,a+1],...]
              } else if (possibleHours.length == 1) {
                //El bloque a es el único  [[a,a+1]]
              } else if (
                possibleHours[i + 1] - hour == 1 && //El bloque a esta rodeado de bloques consecutivos => no cambia las tuplas
                hour - possibleHours[i - 1] == 1
              ) {
              } else if (
                i == possibleHours.length - 1 && //El bloque a es el último y está solo => [...[a,a+1]]
                hour - possibleHours[i - 1] > 1
              ) {
                possibleBlock.push([hour, hour + 1]);
              } else if (i == possibleHours.length - 1) {
                //El bloque a es el último => [...,[x,a]]
                possibleBlock[possibleBlock.length - 1][1] = hour + 1;
              } else if (possibleHours[i + 1] - hour > 1) {
                //El bloque no es último y cierra un bloque consecutivo => [...,[x,a+1],...]
                possibleBlock[possibleBlock.length - 1][1] = hour + 1;
              } else if (hour - possibleHours[i - 1] > 1) {
                //El bloque no es el primero y abre bloques consecutivos [...,[a,x],...]
                possibleBlock.push([hour, hour + 1]);
              }
            });

            setStore({
              horarios: [
                ...currentStore.horarios,
                [anno, mes, dia, possibleBlock, idEvento],
              ], //possibleBlock es un array con arrays del tipo [inicio,final] de horarios posibles
            });
          }
        });
      },
    },
  };
};
export default getState;
