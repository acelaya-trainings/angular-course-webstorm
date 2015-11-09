var producto = {
        "id": 1,
        "nombre": "Sal",
        "cantidad": 23,
        "precio": 50.36,
        "disponible": true
    },
    JSONString = JSON.stringify(producto),
    JSONObject = JSON.parse(JSONString);

console.log(JSONObject.nombre);
