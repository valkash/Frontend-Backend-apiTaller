import React from "react";
import "../styleesheets/Dashboard.css";
import "../styleesheets/Proveedores.css";
import { useState, useEffect } from "react";    
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import Swal from "sweetalert2";
import ListadoProveedores from "./proveedores/ListadoProveedores";
import RegistrarProveedor from "./proveedores/RegistrarProveedor";
import { Modal, Button } from 'react-bootstrap';  

function Proveedores() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [razonSocial, setRazonSocial] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [rut, setRut] = useState("");
  const [banco, setBanco] = useState("");
  const [numeroCuenta, setNumeroCuenta] = useState("");
  const [tipoCuenta, setTipoCuenta] = useState("");
  const [id, setId] = useState();
  const [proveedorList, setProveedores] = useState([]);
  const [bancosList, setBancos] = useState([]);
  const [tipoCuentasList, setTipoCuentas] = useState([]);
  const [editar, setEditar] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    getProveedores();
  }, []);

  /* Obtenemos los datos Bancarios */
  /* Fin */

  const getProveedores = async() => {
      await Axios.get("http://localhost:8010/api/proveedores",{headers: {'Authorization': token,},})
      .then((response) => {setProveedores(response.data);})
      .catch((error) => {console.error("Hubo un error al obtener proveedores:", error.response);});
  };

  return (
    <main>
      <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12'>
              <div className='card'>
                  <div className='card-header'>
                      <div className='row'>
                          <div className='col-sm-10 col-md-10 col-lg-10'>
                              <h3><span className='fa fa-address-book'></span>&nbsp;Listado Proveedores</h3>
                          </div>
                          <div className='col-sm-2 col-md-2 col-lg-2'>
                              <button className='btn-agregar' onClick={handleShow}><span className='fa fa-plus-square'></span>&nbsp;Nuevo</button>
                          </div>
                      </div>
                  </div>
                  <div className='card-body'>
                      <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-12">
                              <ListadoProveedores/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <Modal show={show} onHide={handleClose} style={{ maxWidth: '100%' }}>
        <Modal.Header closeButton>
          </Modal.Header>
            <Modal.Body>
              <RegistrarProveedor/>
            </Modal.Body>
      </Modal>
    </main>
  );
}

export default Proveedores;

