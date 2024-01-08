
import React, { useState,} from 'react';
import './EventList.css';



const eventos = [
  {
    id: 'evento001',
    nombre: 'Cumple Fer',
    lugar: 'Irarrazaval 4500, Ñuñoa',
    inicio: '01/02/2024',
    fin: '02/02/2024',
    duracion: '1',
    organizador: 'user007',
    invitados: ['user001', 'user002', 'user003'],
    indispensables: ['user001'],
    aceptados: ['user002'],
    rechazados: [],
    estado: 'Pendientes',
  },
  {
    id: 'evento002',
    nombre: 'Reunion Planificacion 2024',
    lugar: 'Aponquindo 3820, Las Condes',
    inicio: '03/02/2024',
    fin: '04/02/2024',
    duracion: '2',
    organizador: 'user007',
    invitados: ['user001', 'user002', 'user003'],
    indispensables: ['user001'],
    aceptados: ['user002'],
    rechazados: [],
    estado: 'Pendientes',
  },
  {
    id: 'evento003',
    nombre: 'Ensayo y Copete',
    lugar: 'Vicuña Mackena 1500',
    inicio: '05/02/2024',
    fin: '06/02/2024',
    duracion: '1',
    organizador: 'user007',
    invitados: ['user001', 'user002', 'user003'],
    indispensables: ['user001'],
    aceptados: ['user002'],
    rechazados: [],
    estado: 'Organizado por mí',
  },
  {
    id: 'evento004',
    nombre: 'Picnic en el parque padre hutardo',
    lugar: 'Parque La Reina, La Reina asdasds',
    inicio: '03/02/2024',
    fin: '04/02/2024',
    duracion: '1',
    organizador: 'user007',
    invitados: ['user001', 'user002', 'user003'],
    indispensables: ['user001'],
    aceptados: ['user002'],
    rechazados: [],
    estado: 'Respondido',
  },
  {
    id: 'evento005',
    nombre: 'Carrete hasta amanecer',
    lugar: 'Patio Bella Vista',
    inicio: '04/01/2023',
    fin: '04/01/2023',
    duracion: '1',
    organizador: 'user007',
    invitados: ['user001', 'user002', 'user003'],
    indispensables: ['user001'],
    aceptados: ['user002'],
    rechazados: [],
    estado: 'Organizado por mí',
  },
  {
    id: 'evento006',
    nombre: 'Evento Nuevo 1',
    lugar: 'Ubicación del Evento Nuevo 1',
    inicio: '10/02/2024',
    fin: '12/02/2024',
    duracion: '2',
    organizador: 'user007',
    invitados: ['user001', 'user002', 'user003'],
    indispensables: ['user001'],
    aceptados: ['user002'],
    rechazados: [],
    estado: 'Pendientes',
  },
  {
    id: 'evento007',
    nombre: 'Evento Nuevo 2',
    lugar: 'Ubicación del Evento Nuevo 2',
    inicio: '15/02/2024',
    fin: '16/02/2024',
    duracion: '1',
    organizador: 'user007',
    invitados: ['user001', 'user002', 'user003'],
    indispensables: ['user001'],
    aceptados: ['user002'],
    rechazados: [],
    estado: 'Organizado por mí',
  },
  // ... otros eventos nuevos ...
];

const EventList = () => {
  const [mostrarRechazados, setMostrarRechazados] = useState(false);

  const eventosCategorizados = eventos.reduce((acc, event) => {
    const now = new Date();
    const fechaInicio = new Date(event.inicio);
    const estado = fechaInicio > now ? event.estado : 'Rechazado';
    acc[estado] = [...(acc[estado] || []), event];
    return acc;
  }, {});

  const ordenEventos = ['Pendientes', 'Respondido', 'Organizado por mí'];

  const handleButtonClick = (event) => {
    if (event.estado === 'Organizado por mí') {
      handleEdit(event.id);
    } else if (event.estado === 'Respondido') {
      handleAttendanceEdit(event.id);
    } else if (event.estado === 'Pendientes') {
      handleRespond(event.id);
    }
  };

  const handleEdit = (eventId) => {
    console.log(`Editar evento: ${eventId}`);
  };

  const handleAttendanceEdit = (eventId) => {
    console.log(`Editar asistencia del evento: ${eventId}`);
  };

  const handleRespond = (eventId) => {
    console.log(`Responder al evento: ${eventId}`);
  };

  const handleNewEvent = () => {
    console.log('Crear nuevo evento');
  };

  return (
    <div className="container py-2">
      <div className="row">
        <div className="col-9">
          <h1 className="events-title">EVENTOS</h1>
        </div>
        <div className="mx-2 col text-right ">
          <button className="btn btn-success fs-5 fw-semibold" onClick={() => handleNewEvent()}>Nuevo Evento (0)</button>
        </div>
      </div>

      <div className="bg-primary pt-2 mb-3 row container fw-semibold fs-5">
        <p className='col-3 text-center'>Nombre</p>
        <p className='col-3 px-2'>Período</p>
        <p className='col ps-5'>Lugar</p>
        <p className='col-4 ms-4'>Respuestas</p>
        <p className=''></p>
      </div>

      <div className='fw-semibold'>
      {ordenEventos.map((estado, index) => (
  <div key={estado} className={`my-5 ${index !== 0 ? 'mt-4' : ''}`}>
    <h2 className='mb-4'>{estado}</h2>
    <div className="row">
      {eventosCategorizados[estado]?.map((event) => (
        <div key={event.id} className={`row pb-3 ${event.aceptados.length === event.invitados.length ? 'text-success' : ''}`}>
          <h5 className='col-3 fw-semibold fs-5 text-truncate'>{event.nombre}</h5>
          <p className='col-3 m-0 fw-semibold fs-5 '>{`${event.inicio} - ${event.fin}`}</p>
          <p className='col p-0 m-0 tex-center fw-semibold fs-5 text-truncate'>{event.lugar}</p>
          <p className='col p-0 m-0 text-center fw-semibold fs-5 text-truncate'>{`${event.aceptados.length}/${event.invitados.length}`}</p>
          <button
            className='col m-2 btn btn-outline-primary btn-sm fs-5'
            onClick={() => handleButtonClick(event)}
          >
            {event.estado === 'Organizado por mí' ? 'Editar' : event.estado === 'Respondido' ? 'Editar Asistencia' : 'Responder'}
          </button>
        </div>
      ))}
    </div>
    {index !== ordenEventos.length - 1 && (
      <hr className="my-4 divider-interline" />
    )}
  </div>
))}

{mostrarRechazados && eventosCategorizados['Rechazado'] && (
  <div className={`my-5 mt-4`}>
    <hr className="my-4 divider-interline" />
    <h2 className='mb-4'>
      Rechazado
      <button
        className="btn btn-link btn-sm ms-2 text-primary fw-semibold fs-5"
        onClick={() => setMostrarRechazados(false)}
      >
        Contraer
      </button>
    </h2>
    <div className="row">
      {eventosCategorizados['Rechazado'].map((event) => (
        <div key={event.id} className={`row pb-3`}>
          <h5 className='col-3 fw-semibold fs-5 text-truncate'>{event.nombre}</h5>
          <p className='col-3 m-0 fw-semibold fs-5 '>{`${event.inicio} - ${event.fin}`}</p>
          <p className='col p-0 m-0 tex-center fw-semibold fs-5 text-truncate'>{event.lugar}</p>
          {/*
            No mostramos las respuestas en eventos rechazados
          */}
        </div>
      ))}
    </div>
  </div>
)}

        {!mostrarRechazados && eventosCategorizados['Rechazado'] && (
          <div className="row">
            <div className="col">
              <div className="divider-line"></div>
              <p
                className="text-left text-primary fw-semibold fs-5"
                style={{ cursor: 'pointer' }}
                onClick={() => setMostrarRechazados(true)}
              >
                Ver eventos pasados y rechazados
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventList;