//Este archivo debe tener acceso al almacenamiento de datos
var { nanoid } = require("nanoid");

const TABLA = 'user';

module.exports = function (injectedStore){
    let store = injectedStore;
    if(!store){
        store = require('../../../store/dummy');
    }

    function list() {
        return store.list(TABLA);
    }
    
    function get(id) {
        return store.get(TABLA, id);
    }

    function upsert(body) {
        console.log(body);
        const user = {
            name: body.name
        }

        if(body.id) {
            user.id = body.id;
        } else{
            user.id = nanoid();
        }

        return store.upsert(TABLA, user);
    }

    function remove(body) {
        console.log("Eliminando nro: ", body.id);

        return store.remove(TABLA, body.id);
    }

    return {
        list,
        get,
        upsert,
        remove,
    };
};