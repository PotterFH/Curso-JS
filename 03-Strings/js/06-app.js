const producto = 'Monitor de 20 pulgadas';

//.repeat: repetir una cadena de texto

const texto = ' en promocion'.repeat(3);
console.log(texto);

console.log( `${producto} ${texto} !!!`);


//Split para dividir un string

const actividad = 'Estoy aprendiendo JavaScript';
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(','));

const tweet = '#Aprendiendo JavaScript';
console.log(tweet.split('#'));