const { response } = require ('express');



 const usuariosGet = (req = request, res = response) => {
     const {q,nombre ='No name',apikey, page=1,limit} = req.query;
    res.json({
            msg: 'get API - controlador',
            q,
            nombre,
            apikey,
            page,
            limit

    });
  }

 const usuarioPost =  (req, res = response) => {
     const {nombre,edad} = req.body;

    res.status(201).json({
            msg: 'post API - controlador',
            nombre, 
            edad
    });
  }
 const usuarioPut = (req, res = response) => {
    const {id} = req.params;

    res.status(500).json({
        msg: 'put API - controlador',
        id
    });
  }
const usuarioDelete =  (req, res = response) => {
    res.json({
            msg: 'delete API - controlador'
    });
    

}
const usuarioPatch = (req, res = response) => {
    res.json({
            msg: 'patch API - controlador'
    });

}
  module.exports = {
      usuariosGet,
      usuarioPost,
      usuarioPut,
      usuarioDelete,
      usuarioPatch
    }