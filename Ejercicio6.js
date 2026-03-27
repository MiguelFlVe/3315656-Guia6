console.log("Describiendo un objeto personal: Cree un objeto que represente algo que lleve consigo todos los días (ej. audífonos, libreta, termo). Debe tener al menos cuatro propiedades. Recorra sus claves y valores usando un ciclo for...of sobre Object.entries().");

let tel = {
  Marca: "Xiaomi",
  Modelo: 2018,
  Memoria: "128 GB",
  Cameras: 3,
}

for (let [key, value] of Object.entries(tel)) {
  console.log(`${key}: ${value}`);
}