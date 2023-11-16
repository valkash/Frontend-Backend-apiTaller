import React from 'react';
import '../styleesheets/Dashboard.css';

function Notificaciones() {
    return (
        <main>
            <div className='row'>
                <div className='col-sm-12 col-md-12 col-lg-12'>
                    <div className='card'>
                        <div className='card-header'>
                            <h3><span className='fa fa-envelope'></span>&nbsp;Notificaciones</h3>
                        </div>
                        <div className='card-body'>
                            {/* Contenido específico para las notificaciones */}
                            <p>Aquí puedes agregar el contenido específico para las notificaciones.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Notificaciones;
