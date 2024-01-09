const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      bloquesUsuarioActual: [],
      fechasPosiblesSeparadas: [],
      horarios: [],
      evento: {
        idEvento: "evento001",
        nombre: "Cumpleaños Sole",
        lugar: "Por determinar (acepto propuestas)",
        inicio: new Date(2023, 9, 28), //parse para el backend
        final: new Date(2023, 10, 12), //parse para el backend
        duracion: 3, //aun no del todo definitivo
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
              m10: { d28: [], d29: [], d30: [], d31: [[1000, 2400]] },
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
                d02: [[1800, 2300]],
                d03: [[1600, 2400]],
                d04: [
                  [0, 400],
                  [1100, 1700],
                ],
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
      addNewAvailability: (e, userID) => {
        e.preventDefault();
        const { evento } = getStore();
        const actions = getActions();
        const availability = [];
        if (e.target.form[0].value == "") {
          alert("Elige una fecha!");
          return 
        }
        const newYear = "y" + e.target.form[0].value.slice(0, 4);
        const newMonth = "m" + e.target.form[0].value.slice(5, 7);
        const newDay = "d" + e.target.form[0].value.slice(8, 10);
        const newStart = e.target.form[1].value;
        const newEnd = e.target.form[2].value;
        
        const userIndex = evento.respuestas.findIndex(
          (respuesta) => respuesta.userID == userID
        );

        if (newEnd-newStart<=0) {
          alert("La hora de final debe ser posterior a la de inicio!");
        } else {
          availability.push(newStart * 100, newEnd * 100);
          evento.respuestas[userIndex][newYear][newMonth][newDay].push(
            availability
          );
          setStore({ evento });
        }
        actions.countCalendar();
        actions.userBlocksToDate(userID);
        actions.meetingResultsToDate();
      },

      deleteAvailability: ([y, m, d], h, userID) => {
        const { evento } = getStore();
        const userIndex = evento.respuestas.findIndex(
          (respuesta) => respuesta.userID == userID
        );
        const newAvailability = evento.respuestas[userIndex][y][m][d].filter(
          (schedule) => schedule != h
        );
        evento.respuestas[userIndex][y][m][d] = newAvailability;
        setStore({ evento });
        const actions = getActions();
        actions.countCalendar();
        actions.userBlocksToDate(userID);
        actions.meetingResultsToDate();
      },

      userBlocksToDate: (userID) => {
        //transforma los bloques del usuario en un arreglo con arreglos [Date,h,[yxxxx,mxx,dxx]]
        const currentStore = getStore();
        const userBlocksAsDates = [];
        const userBlocks = currentStore.evento.respuestas.find(
          (respuesta) => respuesta.userID == userID
        );
        const dates = currentStore.horarios.filter(
          (element) => currentStore.evento.idEvento == element[4]
        );
        for (let [year, month, day, h, id] of dates) {
          userBlocks[year][month][day].forEach((value) =>
            userBlocksAsDates.push([year, month, day, value])
          );
        }
        const dateAndSchedule = userBlocksAsDates.map(([y, m, d, h, id]) => {
          return [
            new Date(y.slice(1, 5), m.slice(1, 3) - 1, d.slice(1, 3)),
            h,
            [y, m, d],
          ];
        });
        setStore({ bloquesUsuarioActual: dateAndSchedule });
      },
      meetingResultsToDate: () => {
        //Transforma las fechas resultantes en arreglos separados [Date,horario]
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
        setStore({ fechasPosiblesSeparadas: result });
      },
      countCalendar: () => {
        const store = getStore();
        const fechas = [];
        const contadorDias = new Date(store.evento.inicio);
        const totalDays = //cantidad de dias en que puede hacerse el evento
          (store.evento.final.getTime() - store.evento.inicio.getTime()) /
          (1000 * 3600 * 24);

        for (let i = 0; i <= totalDays; i++) {
          //agrega a fechas las posibles fechas en formato yyyy-mm-dd
          fechas.push(contadorDias.toISOString().slice(0, 10));
          contadorDias.setDate(contadorDias.getDate() + 1);
        }

        let availableDays = []; //generar de las fechas las tuplas [yxxxx,mxx,dxx] para generar cada dia
        fechas.forEach((fecha) => {
          availableDays.push([
            "y" + fecha.slice(0, 4),
            "m" + fecha.slice(5, 7),
            "d" + fecha.slice(8, 10),
          ]);
        });

        setStore({ horarios: [] });
        availableDays.forEach(([anno, mes, dia]) => {
          //Por cada fecha en que el evento es posible mira las posibilidades de los asistentes
          let countingCalendar = new Array(24);
          countingCalendar.fill(0, 0);
          let booleanCalendar = new Array(24);
          let possibleHours = [];
          let possibleBlock = [];

          for (let respuesta of store.evento.respuestas) {
            //respuesta por invitado => horario de booleanos => countingCalendar muestra la suma de true's (asistencias)
            booleanCalendar = booleanCalendar.map((element) => 0);
            for (let horario of respuesta[anno][mes][dia]) {
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
            if (hour == store.evento.respuestas.length) {
              possibleHours.push(i);
            }
          });
          //Condiciones para ver como se comporta cada bloque de una hora para generar los pares [inicio,final]
          if (possibleHours.length == 0) {
            //No hay bloques posibles
            setStore({
              horarios: [
                ...store.horarios,
                [anno, mes, dia, [], store.evento.idEvento],
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
                ...store.horarios,
                [anno, mes, dia, possibleBlock, store.evento.idEvento],
              ], //possibleBlock es un array con arrays del tipo [inicio,final] de horarios posibles
            });
          }
        });
      },
    },
  };
};
export default getState;
