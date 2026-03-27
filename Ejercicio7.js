console.log("Control de edades: Cree un arreglo con edades de cinco personas. Recorra el arreglo usando for...of y muestre solo las edades mayores o iguales a 18.");

let edades = [5, 24, 55, 27, 3]

for (let edad of edades) {
  if (edad >= 18) {
    console.log(edad)
  }
}
