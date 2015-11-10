module.exports = function (req, res, next) {

    // User is allowed, proceed to the next policy, 
    // or if this is the last policy, the controller
    if (req.session.user&&req.session.user.nivelAcceso===0) {
        return next();
    }

    // User is not allowed
    // (default res.forbidden() behavior can be overridden in `config/403.js`)
    return res.view('error', {
        mensaje: 'Usted no es un usuario, no puede ingresar aqui',
        solucion: 'Cambie de cuenta para ver su Usuario'
    });
};