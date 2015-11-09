/**
 * Usuarios.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        nombre: {
            type: "string",
            required: true
        },
        password:{
            type:"string",
            defaultsTo:"123456"
        },
        usuario:{
            type:"string",
            unique:true
        },
        avatarUrl:{
            type:"string",
            unique:true
        },
        avatarFd:{
            type:"string",
            unique:true
        },
        url:{
            type:"string",
            unique:true
        }

    }
};