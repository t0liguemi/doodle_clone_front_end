import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Bienvenida.css';

import imagen1 from './Imagenes/Imagen 1.jpg'
import imagen2 from './Imagenes/Imagen 2.jpg'
import imagen3 from './Imagenes/Imagen 3.jpg'
import imagen4 from './Imagenes/Imagen 4.jpg'
import imagen5 from './Imagenes/Imagen 5.jpg'
import Logo from './Imagenes/Logo.jpg'

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
        <div className="bienvenida-container">
            <div id="carouselExampleSlidesOnly" className="carousel slide mb-4" data-ride="carousel">
                <div className="carousel-inner">
                    {imagenes.map((imagen, index) => (
                        <div key={index} className={`carousel-item ${index === indice ? 'active' : ''}`}>
                            <div className="d-flex align-items-center justify-content-center h-100">
                                <img
                                    src={imagen}
                                    className="img"
                                    alt={`Slide ${index}`}
                                    style={{ width: '1200px', height: '500px', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container text-center row">
                <div className="textos-inferior col">
                    <div className='col' style={{ marginBottom: '20px' }}>
                        <h1>¡Crea tu reunión en un par de clics con{' '}
                            <strong style={{ color: '#f0a202' }}>Reu</strong>
                            <strong style={{ color: '#7b9e89' }}>Plan</strong> y solo espera a que tus amigos te digan cuando pueden!
                        </h1>
                    </div>
                    <div className='col'>
                        <p>¡Disfruta de tus eventos simplemente haciéndolos! Con ReuPlan puedes organizar tus reuniones en tiempo récord, sin tener que ocuparte de la disponibilidad. ¡Sólo establece en qué período de tiempo debería ocurrir, y tus invitados te indicarán con toda facilidad cuándo pueden asistir y la aplicación te indicará en qué momento es posible llevar a cabo tu evento y ya está! ¡Reunirse nunca fue tan fácil!</p>
                    </div>
                    <div className='col' style={{ marginTop: '35px', marginBottom: '20px' }}>
                        <button
                            style={{ backgroundColor: '#d95d39', color: '#ffffff', padding: '10px 20px', fontSize: '16px', borderRadius: '5px', cursor: 'pointer' }}
                        >
                            ¡Empezar Ahora!
                        </button>
                    </div>
                </div>

                <div className="ps-5 imagen-inferior d-flex align-items-center justify-content-center container-fluid col ">
                    <img src={Logo} alt="Logo" style={{ width: '40%', height: '60%', }} />
                </div>
            </div>
        </div>
    );
};

export default Bienvenida;