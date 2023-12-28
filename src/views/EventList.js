
import React from 'react';
import './EventList.css'; 

const eventos = [
  {
    nombre: 'Cumple Fer',
    periodo: '01/01/2023 - 02/01/2023',
    lugar: 'Irarrazaval 4500, Ñuñoa',
    estado: 'Organizado por mí',
    respuestas: {
      aceptadas: 5,
      total: 10,
    },
  },
  {
    nombre: 'Reunion Planificacion 2024',
    periodo: '03/01/2023 - 04/01/2023',
    lugar: 'Aponquindo 3820, Las Condes',
    estado: 'Respondido',
    respuestas: {
      aceptadas: 8,
      total: 10,
    },
  },
  {
    nombre: 'Ensayo y Copete',
    periodo: '05/01/2023 - 06/01/2023',
    lugar: 'Vicuña Mackena 1500',
    estado: 'Pendientes',
    respuestas: {
      aceptadas: 2,
      total: 10,
    },
  },
  {
    nombre: 'Picnic en el parque padre hutardo',
    periodo: '03/01/2023 - 04/01/2023',
    lugar: 'Parque La Reina, La Reina asdasds',
    estado: 'Respondido',
    respuestas: {
      aceptadas: 8,
      total: 10,
    },
  },
  // Agrega más eventos 
];

const EventList = () => {
  const renderEventCategory = (category) => (
    <div key={category} className="my-5">
      <h2>{category}</h2>
      <div className="">
        <div className="row">
          {eventos
            .filter((event) => event.estado === category)
            .map((event) => (
              <div key={event.nombre} className="row pb-3">
                <h5 className='col fw-semibold fs-5 text-truncate'>{event.nombre}</h5>
                <p className='col fw-semibold fs-5 text-truncate'>{event.periodo.split(' - ')[0]}</p>
                <p className='col fw-semibold fs-5 text-truncate'>{event.lugar}</p>
                <p className='col fw-semibold fs-5 text-truncate'>{`${event.respuestas.aceptadas}/${event.respuestas.total}`}</p>
                <button
                  className='col m-2 btn btn-outline-primary fs-5  ' 
                  onClick={() => handleEdit(event.edit)}
                >
                  Editar
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  
  const handleEdit = (eventName) => {
    
    console.log(`Editar evento: ${eventName}`);
  };

 
  const handleNewEvent = () => {
  
    console.log('Crear nuevo evento');
  };

  return (
    <div className="container py-2">
      <div className="row">
        <div className="col-10">
          <h1 className="events-title">EVENTOS</h1>
        </div>
        <div className="mt-2 col text-right ">
          <button className="btn btn-success fs-5 fw-semibold" onClick={() => handleNewEvent()}>Nuevo Evento (0)</button>
        </div>
      </div>

  
      <div className="bg-primary pt-2 mb-3 row container fw-semibold fs-5">
        <p className='col'>Nombre</p>
        <p className='col px-2'>Período</p>
        <p className='col ps-5'>Lugar    </p>
        <p className='col ms-4'>Respuestas</p>
        <p className='col-3'></p>
      </div>

    <div className='fw-semibold'>
      {renderEventCategory('Organizado por mí')}
      {renderEventCategory('Respondido')}
      {renderEventCategory('Pendientes')}
      </div>
    
      <div className="row">
        <div className="col">
          <div className="divider-line"></div>
          <p className="text-left text-primary fw-semibold fs-5">Ver eventos pasados y rechazados</p>
        </div>
      </div>
    </div>
  );
};

export default EventList;
