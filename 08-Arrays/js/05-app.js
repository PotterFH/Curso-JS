//AGREGAR NUEVOS ELEMENTOS AL FINAL O INICIO
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

console.table(meses);

//AGREGAR AL FINAL DEL ARREGLO
meses.push('Mayo');
meses.push('Junio');
console.table(meses);

//AGREGAR AL INCIO DEL ARREGLO
meses.unshift('Segundo mes');
meses.unshift('Primer mes');
console.table(meses);
