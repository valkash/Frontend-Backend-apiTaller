const cambiarContrasenaController = require('../controllers/cambiarContrasena');
const authenticatedMiddleware = require('../authenticated/authenticated');

module.exports = (app) => {
    app.post(
        '/api/cambiar-contrasena',
        authenticatedMiddleware.auth,
        cambiarContrasenaController.cambiarContrasena
    );
};
