/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    logIn: function (req, res) {
        var params = req.allParams();
        sails.log.info('Usuario: ',params.usuario,' Password: ',params.password);
        if (params.usuario === undefined || params.password === undefined) {
            sails.log.warn('Envio incorrecto de parametros.');
            return res.badRequest('Envio incorrecto de parametros.');
        } else {
            Usuarios.findOne()
                .where({
                    usuario: params.usuario
                })
                .exec(function (err, results) {
                    if (err) return res.negotiate();
                
                    if (results) {
                        sails.log.info('Se encontro el usuario: ',results.usuario);
                        if(params.password==results.password){
                            sails.log.info('Login correcto');
                            req.session.user = results;
                            req.session.authenticated = true;
                            return res.redirect('usuario');
                        }
                        else{
                            sails.log.warn('Datos invalidos');
                            return res.badRequest('Envio incorrecto de parametros.');
                        }
                        
                    } 
                    else { 
                        sails.log.warn('No se encontro ese usuario');
                        return res.badRequest('No se encontro ese usuario');
                    }

                });
        }
    }

};