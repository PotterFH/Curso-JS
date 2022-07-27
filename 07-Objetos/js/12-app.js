//Object Literal

const producto = {
    nombre : 'Monitor 20 pulgadas',
    precio : '300',
    disponible : true,

}

//Object constructor

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 24 pulgadas', 700);
console.log(producto2);