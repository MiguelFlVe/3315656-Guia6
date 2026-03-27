console.log("Registro de un libro: Cree un objeto llamado libro con las propiedades: título, autor, número de páginas y género. Luego imprima un mensaje descriptivo usando estas propiedades, por ejemplo: \"El libro '___' del autor ___ pertenece al género ___.\"")

let libro = {
  Title: "Cinco semanas en globo",
  Autor: "Julio Verne",
  Pages: 147,
  Genre: "Aventura",
}

console.log(`El libro titulado \"${libro.Title}\", del autor ${libro.Autor}, tiene un total de ${libro.Pages} páginas y pertenece al género ${libro.Genre}.`)