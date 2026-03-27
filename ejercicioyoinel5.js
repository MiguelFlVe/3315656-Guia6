//5. Lista de tareas: Cree un arreglo vacío llamado tareas. Agregue tres actividades
//utilizando push(). Luego elimine la última utilizando pop(). Muestre el resultado.
let tareas = [];

tareas.push("Estudiar");
tareas.push("Hacer ejercicio");
tareas.push("Leer la Biblia");

console.log("Antes:", tareas);

tareas.pop();

console.log("Después:", tareas);