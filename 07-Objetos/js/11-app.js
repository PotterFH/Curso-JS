//THIS

const producto = {
    nombre : 'Monitor 20 pulgadas',
    precio : '300',
    disponible : true,
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
        //this.nombre buscara la propiedad dentro del mismo objeto
    }

}
const producto2 = {
    nombre : 'Tablet',
    precio : '300',
    disponible : true,
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
        //this.nombre buscara la propiedad dentro del mismo objeto
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();