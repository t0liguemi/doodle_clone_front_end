// EventList.js
import React from 'react';
import './EventList.css'; // Asegúrate de ajustar la ruta según la ubicación real de tu archivo de estilos

const eventos = [
  {
    nombre: 'Evento 1',
    periodo: '01/01/2023 - 02/01/2023',
    lugar: 'Lugar 1',
    estado: 'Organizado por mí',
    respuestas: {
      aceptadas: 5,
      total: 10,
    },
  },
  {
    nombre: 'Evento 2',
    periodo: '03/01/2023 - 04/01/2023',
    lugar: 'Lugar 2',
    estado: 'Respondido',
    respuestas: {
      aceptadas: 8,
      total: 10,
    },
  },
  {
    nombre: 'Evento 3',
    periodo: '05/01/2023 - 06/01/2023',
    lugar: 'Lugar 3',
    estado: 'Pendiente',
    respuestas: {
      aceptadas: 2,
      total: 10,
    },
  },
  {
    nombre: 'Evento 4',
    periodo: '03/01/2023 - 04/01/2023',
    lugar: 'Lugar 2',
    estado: 'Respondido',
    respuestas: {
      aceptadas: 8,
      total: 10,
    },
  },
  // Agrega más eventos según sea necesario
];

const EventList = () => {
  const renderEventCategory = (category) => (
    <div key={category} className="mb-5">
      <h2>{category}</h2>
      <div className="">
        <div className="row">
          {eventos
            .filter((event) => event.estado === category)
            .map((event) => (
              <div key={event.nombre} className="row">
                <h5 className='col'>{event.nombre}</h5>
                <p className='col'>{event.periodo.split(' - ')[0]}</p>
                <p className='col'>{event.lugar}</p>
                <p className='col'>{`${event.respuestas.aceptadas}/${event.respuestas.total}`}</p>
                <button
                  className='col m-2 btn btn-outline-primary ' // Modificado aquí
                  onClick={() => handleEdit(event.nombre)}
                >
                  Editar
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  // Función para manejar la edición del evento (puedes personalizarla según tus necesidades)
  const handleEdit = (eventName) => {
    // Lógica para la edición del evento
    console.log(`Editar evento: ${eventName}`);
  };

  // Función para manejar la creación de un nuevo evento
  const handleNewEvent = () => {
    // Lógica para la creación de un nuevo evento
    console.log('Crear nuevo evento');
  };

  return (
    <div className="container py-2">
      <div className="row">
        <div className="col-10">
          <h1 className="events-title">EVENTOS</h1>
        </div>
        <div className="col text-right">
          <button className="btn btn-success" onClick={() => handleNewEvent()}>Nuevo Evento (0)</button>
        </div>
      </div>

      {/* Banner o cinta amarilla */}
      <div className="bg-primary pt-3 mb-3 row container">
        <p className='col'>Nombre</p>
        <p className='col'>Período</p>
        <p className='col'>Lugar</p>
        <p className='col'>Respuestas</p>
        <p className='col-3'></p>
      </div>

      {/* Contenido principal */}
      {renderEventCategory('Organizado por mí')}
      {renderEventCategory('Respondido')}
      {renderEventCategory('Pendiente')}

      {/* Línea gris oscuro en la parte inferior */}
      <hr className="bg-dark" />

      {/* Texto en la parte inferior izquierda */}
      <div className="row">
        <div className="col">
          <p className="text-left">Ver eventos pasados y rechazados</p>
        </div>
      </div>
    </div>
  );
};

export default EventList;
