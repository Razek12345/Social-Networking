const db = {
    'user' : [
        { id: '1', name: 'Renzo'},
    ],
};

async function list(tabla){
    return db[tabla];
}

async function get(tabla, id){
    let col = await list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

async function upsert(tabla, data){
    //console.log(data);
    db[tabla].push(data);
    return data;
}

async function remove(tabla, id){
    db[tabla].splice(db[tabla].findIndex(item => item.id == id), 1);
    return id;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
};