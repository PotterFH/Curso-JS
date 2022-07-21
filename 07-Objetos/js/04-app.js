//Destructuring de objetos

const producto = {
    nombre : 'Monitor 20 pulgadas',
    precio : '300',
    disponible : true
 }

//  Se refiere a extraer propiedades de un objeto y asiganarlas a una variable

//Forma antigua
// const nombre1  = producto.nombre;
// console.log(nombre);

//Forma nueva: Object destructurin

// const { nombre } = producto;
// const { precio } = producto;

const { nombre, precio } = producto;

console.log(nombre);
console.log(precio);

