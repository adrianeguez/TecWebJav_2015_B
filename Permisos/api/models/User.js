/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        nombre: {
            type: 'string'
        },
        usuario: {
            type: 'string'
        },
        password: {
            type: 'string',
            defaultsTo: '123456'
        },
        nivelAcceso:{
            type:'integer',
            defaultsTo: 0
        }
    }
};