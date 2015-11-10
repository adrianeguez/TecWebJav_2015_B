/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    logIn: function (req, res) {
        var params = req.allParams();
        sails.log.info('Usuario: ', params.usuario, ' Password: ', params.password);
        if (params.usuario === undefined || params.password === undefined) {
            sails.log.warn('Envio incorrecto de parametros.');
            return res.view('error', {
                mensaje: 'Envio incorrecto de parametros, no envia password ni usuario.',
                solucion: 'Envie parametros, usuario y password.'
            });
        } else {
            User.findOne()
                .where({
                    usuario: params.usuario
                })
                .exec(function (err, results) {
                    if (err) return res.negotiate();

                    if (results) {
                        sails.log.info('Se encontro el usuario: ', results.usuario);
                        if (params.password == results.password) {
                            sails.log.info('Login correcto');
                            req.session.user = results;
                            req.session.authenticated = true;
                            if (req.session.user.nivelAcceso == 1) {
                                return res.redirect('/cuentaAdmin');
                            } else {
                                return res.redirect('/cuenta');
                            }

                        } else {
                            sails.log.warn('Ingreso mal el password');
                            return res.view('error', {
                                mensaje: 'Envio incorrecto de parametros, password invalido.',
                                solucion: 'Envia correctamente tu password'
                            });
                        }

                    } else {
                        sails.log.warn('No se encontro ese usuario', params.usuario);
                        return res.view('error', {
                            mensaje: 'Envio incorrecto de parametros, no se encontro el usuario.',
                            solucion: 'Ingresar bien el usuario.'
                        });
                    }

                });
        }

    },
    logOut: function (req, res) {
        delete req.session.user;
        delete req.session.authenticated;
        return res.redirect('/');
    },
    adminCuenta: function (req, res) {
        return res.view('cuentaAdmin');
    }

};