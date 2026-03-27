console.log("Arreglo de objetos (integración): Cree un arreglo llamado productos que contenga tres objetos. Cada objeto debe representar un producto con propiedades como nombre, precio y disponibilidad. Recorra el arreglo y muestre solo el nombre de cada producto.");

let Productos = [
  { Nombre: "Lápiz", Precio: 5, Disponibilidad: "Sí" },
  { Nombre: "Cuaderno", Precio: 38, Disponibilidad: "Sí" },
  { Nombre: "Borrador", Precio: 3, Disponibilidad: "No" },
];

for (let i of Productos) {
  console.log(i.Nombre);
}