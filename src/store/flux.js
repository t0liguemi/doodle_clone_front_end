const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: { horarios: [] },
    actions: {
      countCalendar: (invitados, fechas) => {
        setStore({horarios:[]})
        fechas.forEach(([mes,dia])=>{
          let countingCalendar = new Array(24);
          countingCalendar.fill(0, 0);
          let booleanCalendar = new Array(24);
          let possibleHours = [];
          let possibleBlock = [];
          let invitadoMensual = {}
          let invitadoDiario = {}
          const currentStore = getStore()
          for (let invitado of invitados) {
            booleanCalendar = booleanCalendar.map((element) => 0);
            invitadoMensual = invitado[mes]
            invitadoDiario = invitadoMensual[dia]
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
          if ( possibleHours.length == 0){
            setStore({ horarios: [...currentStore.horarios,[mes,dia,[]]]})
          }else{
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
          
          setStore({ horarios: [...currentStore.horarios,[mes,dia,possibleBlock]]});
        }});
      },
    },
  };
};
export default getState;
