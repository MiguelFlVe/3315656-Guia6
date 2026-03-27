console.log(`Clasificación por tipo de estructura: Observe las siguientes situaciones y decida si debe usar arreglo u objeto. Justifique con una frase, luego codifique su respuesta con un ejemplo. \n a. Lista de colores favoritos. \n b. Información completa de un estudiante. \n c. Precios de diferentes camisetas. \n d. Descripción de un computador portátil.`);

let situation = [
  {
    Caso: "Lista de colores favoritos.",
    Estructura: "Arreglo",
    Justificación:
      "No se requiere especificar más datos, excepto el nombre de los colores.",
  },

  {
    Caso: "Información completa de un estudiante.",
    Estructura: "Objeto",
    Justificación:
      "Se requiere especificar a qué hace referencia cada dato (nombres, apellidos, edad, fecha de nacimiento, entre otros).",
  },

  {
    Caso: "Precios de diferentes camisetas.",
    Estructura: "Objeto",
    Justificación:
      "Se requiere especificar a qué camiseta corresponde cada precio.",
  },

  {
    Caso: "Descripción de un computador portátil.",
    Estructura: "Objeto",
    Justificación:
      "Se requiere especificar a qué componente se hace referencia en el momento de la descripción.",
  },
];

console.log(situation);
