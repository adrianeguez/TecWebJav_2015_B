/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    login:function(req,res){
        var parametros = req.allParams();
        
        Usuario.findOne({
            usuario:parametros.usuario
        }).exec(function(err, usuario){
            
            if(err) console.log(err);
            
            if(parametros.password!=usuario.password){
                return res.badRequest({
                    error:'Password Incorrecto'
                });
            }
            else{
                delete usuario.password;
                return res.ok(usuario);
            }
            
            
            
        });
        
    }
	
};














