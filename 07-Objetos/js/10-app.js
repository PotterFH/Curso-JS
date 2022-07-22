
//Unir dos objetos

const producto = {
    nombre : 'Monitor 20 pulgadas',
    precio : '300',
    disponible : true
}
const medidas = {
    peso : '1 kg',
    medida: '1 m'
}

console.log(producto);
console.log(medidas);

//Unir dos objetos con assign
const resultado = Object.assign(producto, medidas);


//Spread operator para unir dos objetos, forma mas usada
const resultado2 = { ...producto, ...medidas};

console.log(resultado);
console.log(resultado2);