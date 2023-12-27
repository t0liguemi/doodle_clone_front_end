import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import imagen1 from './Imagenes/Imagen 1.jpg'
import imagen2 from './Imagenes/Imagen 2.jpg'
import imagen3 from './Imagenes/Imagen 3.jpg'
import imagen4 from './Imagenes/Imagen 4.jpg'
import imagen5 from './Imagenes/Imagen 5.jpg'
import Logo from './Imagenes/Logo.jpg'
import './welcome.css'
import { ReactComponent as Calendar } from './Imagenes/Calendarios.svg'

const Bienvenida = () => {
    const imagenes = [imagen1, imagen2, imagen3, imagen4, imagen5];

    const [indice, setIndice] = useState(0);

    const cambiarImagen = useCallback(() => {
        setIndice((prevIndice) => (prevIndice + 1) % imagenes.length);
    }, [imagenes]);

    useEffect(() => {
        const intervalo = setInterval(cambiarImagen, 5000);
        return () => clearInterval(intervalo);
    }, [cambiarImagen]);

    return (
        <div className="bienvenidas container ">
            <div className="carousel slide ">
                <div className="carousel-inner">
                    {imagenes.map((imagen, index) => (
                        <div key={index} className={`carousel-item ${index === indice ? 'active' : ''}`}>
                            <img src={imagen} className="img" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="container text-left row">
                <div className="textos-inferior col pt-5 ">
                    <div>
                        <span className='fs-2 fw-semibold '>¡Crea tu reunión en un par de clics con </span>
                        <span className='text-primary fs-2 fw-semibold '>Reu </span>
                        <span className='text-success fs-2 fw-semibold '>Plan </span>
                        <span className=' fs-2 fw-semibold '>   y solo espera a que tus amigos te digan cuando pueden!</span>

                    </div>

                    <div>
                        <p className='mt-4 fs-6 fw-semibold'>¡Disfruta de tus eventos simplemente haciéndolos! Con ReuPlan puedes organizar tus reuniones en tiempo récord, sin tener que ocuparte de la disponibilidad. ¡Sólo establece en qué período de tiempo debería ocurrir, y tus invitados te indicarán con toda facilidad cuándo pueden asistir y la aplicación te indicará en qué momento es posible llevar a cabo tu evento y ya está! ¡Reunirse nunca fue tan fácil!</p>
                    </div>

                    <div style={{ marginTop: '35px', marginBottom: '20px' }}>
                        <button className='btn btn-primary px-5'>
                            ¡Empezar Ahora!
                        </button>
                    </div>
                </div>

                <div className=" logo-container col ">
                      <Calendar className='w-75'/>     
                </div>
            </div>
        </div>
    );
};

export default Bienvenida;