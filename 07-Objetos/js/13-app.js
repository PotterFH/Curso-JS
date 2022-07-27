//Meotodos para objetos

const producto = {
    nombre : 'Monitor 20 pulgadas',
    precio : '300',
    disponible : true,
}

//Obetener llaves del objeto
console.log(Object.keys(producto));

//Obtener valores de las llaves
console.log(Object.values(producto));

//Retorna todo junto en pares
console.log(Object.entries(producto));