import React, { useState } from "react";
import Axios from "axios";

function CambiarContrasena() {
    const [contrasenaUsuario, setContrasenaUsuario] = useState('');
    const [confirmarContrasena, setConfirmarContrasena] = useState('');
    const token = localStorage.getItem('token');

    const handleActualizar = async () => {
        console.log('Token enviado:', token);

        try {
            const response = await Axios.post(
                'http://localhost:8010/api/cambiar-contrasena',
                {
                    contrasenaUsuario,
                    confirmarContrasena,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log(response.data);
            // Aquí puedes agregar lógica adicional, como mostrar un mensaje al usuario
        } catch (error) {
            console.error('Error al actualizar la contraseña', error);
            // Puedes manejar el error aquí, por ejemplo, mostrar un mensaje al usuario
        }
    };

    return (
        <div className='card'>
            <div className='card-body'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className='row espaciadoVertical'>
                            <div className='col-sm-3 col-md-3 col-lg-3'></div>
                            <div className='col-sm-2 col-md-2 col-lg-2'><span className="textos"><span className="fa fa-lock"></span>&nbsp;Nueva Contraseña:</span></div>
                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Contraseña"
                                    className="textosCajas textosNormal"
                                    onChange={(event) => { setContrasenaUsuario(event.target.value); }}
                                    required
                                    maxLength={16}
                                />
                            </div>
                            <div className='col-sm-3 col-md-3 col-lg-3'></div>
                        </div>
                        <div className='row espaciadoVertical'>
                            <div className='col-sm-3 col-md-3 col-lg-3'></div>
                            <div className='col-sm-2 col-md-2 col-lg-2'><span className="textos"><span className="fa fa-unlock-alt"></span>&nbsp;Confirmar Contraseña:</span></div>
                            <div className='col-sm-4 col-md-4 col-lg-4'>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirmar"
                                    className="textosCajas textosNormal"
                                    onChange={(event) => { setConfirmarContrasena(event.target.value); }}
                                    required
                                    maxLength={16}
                                />
                            </div>
                            <div className='col-sm-3 col-md-3 col-lg-3'></div>
                        </div>
                        <div className='row espaciadoVertical'>
                            <div className='col-sm-5 col-md-5 col-lg-5'></div>
                            <div className="col-sm-2 col-md-2 col-lg-2 text-center">
                                <button
                                    type="button"
                                    className="botonAccion"
                                    onClick={handleActualizar}
                                >
                                    <h5><span className="fa fa-refresh"></span></h5>&nbsp;Actualizar
                                </button>
                            </div>
                            <div className='col-sm-5 col-md-5 col-lg-5'></div>
                        </div>
                    </div>
                    <div className='row espaciadoVertical'>
                        <div className='col-sm-4 col-md-4 col-lg-4'></div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <li className="textosNormal">La contraseña debe tener un mínimo de 10 caracteres.</li>
                            <li className="textosNormal">La contraseña debe contener al menos una letra mayúscula.</li>
                            <li className="textosNormal">La contraseña debe contener al menos una letra minúscula.</li>
                            <li className="textosNormal">La contraseña debe contener al menos un número.</li>
                            <li className="textosNormal">La contraseña debe contener al menos un símbolo.</li>
                        </div>
                        <div className='col-sm-4 col-md-4 col-lg-4'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CambiarContrasena;
