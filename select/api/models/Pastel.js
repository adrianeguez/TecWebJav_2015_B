/**
* Pastel.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      nombre:{
          type:'string'
      },
      masa:{
          type:'string',
          enum:['suave','dura','entera']
      },
       ingredientesPastel:{
            collection: 'pastelingrediente',
            via: 'IdPastel'
        }

  }
};

