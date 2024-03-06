const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "Pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// Nota: Pueden modificar los valores(por ejemplo, los precios) para saber si sus soluciones funcionan correctamente

// 🔥 Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:

// a)  Las pizzas que tengan un id impar.

const idImpar = pizzas.filter((pizza) => pizza.id % 2 !== 0);

idImpar.forEach((pizza) => {
  console.log("La " + pizza.nombre + " tiene un Id impar.");
});

// b) Responder: ¿Hay alguna pizza que valga menos de $600?

const menosDe600 = pizzas.some((pizza) => pizza.precio < 600);

if (menosDe600) {
  console.log("Tenemos Pizzas por menos de $600");
} else {
  console.log("No tenemos pizzas por menos de $600");
}

// c) El nombre de cada pizza con su respectivo precio.
// Lo resolví basándome en un ejercicio muy similar que realizó el profesor en la clase
console.log("Les dejamos nuestro Menú:");
pizzas.forEach((pizza) => {
  const { nombre, precio } = pizza;
  return console.log(`
  ${nombre},

  Precio: ${precio},

  `);
});

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo).
// Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.
pizzas.forEach((pizza) => {
  const { nombre } = pizza;
  console.log(`Los ingredientes de la ${nombre} son: `);
  pizza.ingredientes.forEach((ingrediente) => {
    console.log(ingrediente);
  });
});
// TODAS  las respuestas deben ser USER-FRIENDLY.
// Si (como en el punto B), la respuesta es un booleano (true o false, hay o no hay), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo).
