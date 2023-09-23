const fs = require('fs');

const empleado = {
  nombre: 'Pedro',
  apellido: 'Arias',
  edad: 58,
  salario: 2500,
  activo: true,
};

const empleadoJSON = JSON.stringify(empleado, null, 2);

fs.writeFileSync('empleado.json', empleadoJSON);

console.log('Archivo JSON creado con éxito.');

const contenidoJSON = fs.readFileSync('empleado.json', 'utf-8');

const empleadoLeido = JSON.parse(contenidoJSON);

console.log('Contenido del archivo JSON:');
console.log(empleadoLeido);
