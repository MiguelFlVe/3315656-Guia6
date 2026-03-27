//3. Notas de actividades: Cree un arreglo con seis notas numéricas. Recorra el arreglo
//usando for y calcule el promedio (no use funciones externas).
let notas = [45, 38, 50, 42, 35, 47];

let suma = 0;

for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
}

let promedio = suma / notas.length;

console.log("El promedio es: " + promedio);