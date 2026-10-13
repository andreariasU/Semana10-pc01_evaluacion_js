// 1.
// Un estudiante realiza 4 exámenes, calcular el promedio de estos.

/* let algebra = Number(prompt("Ingrese la nota del exámen de Algebra:"));
let aritmetica = Number(prompt("Ingrese la nota del exámen de Aritmética:"));
let trigonometria = Number(
  prompt("Ingrese la nota del exámen de Trigonometría:"),
);
let estadistica = Number(prompt("Ingrese la nota del exámen de Estadística:"));

let promedio = (algebra + aritmetica + trigonometria + estadistica) / 4;

console.log(`El promedio de las notas de los 4 exámenes es: ${promedio} `); */

// 2.
// Calcular el área de un rectángulo.

/* let base = Number(prompt("Ingrese la medida de la base:"));
let altura = Number(prompt("¿Cuánto mide la altura del rectángulo?:"));

let area = base * altura;

console.log(`El área del retángulo es: ${area}`); */

// 3.
// Calcular el área de un triángulo.

/* let base = Number(prompt("Ingrese la medida de la base del triángulo:"));
let altura = Number(prompt("Ingrese la medida de la altura del triángulo:"));

let area = (base * altura) / 2;

console.log(`El área del triángulo es: ${area}`); */

// 4.
// Calcular el área de una circunferencia. (π = 3.14)

/* let radio = Number(prompt("Ingrese el radio de la circunferencia"));
let pi = 3.14;

let area = pi * radio * radio;

console.log(`El área de la circunferencia es: ${area}`); */

// 5.
// Haya el promedio de todos los elementos del arreglo.

/* let n = [2, 6, 1, 8];
let sum = 0;

for (let i = 0; i < n.length; i++) {
  sum = sum + n[i];
}

let promedio = sum / n.length;

console.log(`El promedio de todos los elementos es: ${promedio}`); */

// 6.
// De un arreglo de números, retornar la suma de todos los números pares.

/* let n = [1, 2, 5, 8, 9, 12, 2, 3];
let pares = 0;

for (let i = 0; i <= n.length; i++) {
  if (n[i] % 2 == 0) {
    pares = pares + n[i];
  }
}
console.log(`La suma de los números pares es: ${pares}`); */

// 7.
// Escriba un programa en JavaScript para mostrar el nombre del libro y el nombre del autor de los libros que tengan el estado de lectura “true”.

/* const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    Status: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    Status: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    Status: false,
  },
];

for (let i = 0; i < library.length; i++) {
  if (library[i].Status == true) {
    console.log(`Libro: ${library[i].title}`);
    console.log(`Libro: ${library[i].author}`);
    console.log("");
  }
} */

// 8.
// Crear un programa que tome dos arreglos de números y que retorne un booleano, unir los dos arreglos en uno solo, si la longitud del nuevo arreglo es mayor o igual a 10 que retorne true si es menor a 10 que retorne false.

/* let Arreglo1 = [2, 5, 2, 3, 7, 2];
let Arreglo2 = [1, 5, 3, 3];

let ArregloNuevo = [...Arreglo1, ...Arreglo2];
console.log(`ArregloNuevo: [${ArregloNuevo}]`);

if (ArregloNuevo.length >= 10) {
  console.log(true + "." + " " + "La longitud de ArregloNuevo es >= a 10");
} else {
  console.log(false + "." + " " + "La longitud de ArregloNuevo es < a 10");
} */

// 9.
// Crear un programa que tome dos arreglos de números enteros y retornar un único arreglo, cada elemento del arreglo debe estar multiplicado por dos.  ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6].

/* let Arreglo1 = [2, 5, 2];
let Arreglo2 = [1, 5, 3];

let ArregloNuevo = [...Arreglo1, ...Arreglo2].map((n) => n * 2);
console.log(`ArregloNuevo: [${ArregloNuevo}]`); */

// 10.
// Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9 y, por último, “excelente” si es 10.

/* let nota = Number(prompt("Ingrese una nota del 1 al 10:"));

if (nota < 1 || nota > 10 || !Number.isInteger(nota)) {
  console.log("Nota incorrecta!: Ingrese la nota sin decimales del 1 al 10");
} else if (nota < 6) {
  console.log("Reprobado");
} else if (nota <= 8) {
  console.log("Regular");
} else if (nota == 9) {
  console.log("Bien");
} else {
  console.log("Excelente");
} */

// 11.
// Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

/* let primero = Number(prompt("Consigne el primer número entre el 1 y el 50:"));
let segundo = Number(prompt("Consigne el segundo número entre el 1 y el 50:"));

if (
  !Number.isInteger(primero) ||
  !Number.isInteger(segundo) ||
  primero < 1 ||
  primero > 50 ||
  segundo < 1 ||
  segundo > 50
) {
  console.log(
    "Los números registrados no están dentro del rango de numeros enteros entre 1 y 50.",
  );
} else {
  for (let i = 1; i <= 50; i++) {
    if (i == primero || i == segundo) {
      console.log("Lotería!");
    } else {
      console.log(i);
    }
  }
} */

// 12.
// Escriba un programa de JavaScript que itera enteros del 1 al 100. Pero para múltiplos de tres, imprima "Fizz" en lugar del número y para múltiplos de cinco imprima "Buzz". Para números múltiplos de tres y cinco, imprima "FizzBuzz".

/* for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
} */

// 13.
// Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un programa que permita determinar el bono que recibirá un trabajador.

/* let year = Number(
  prompt("¿Cuántos años lleva trabajando el/la emplead@ en la tienda?:"),
);
let bono;

if (!Number.isInteger(year) || year < 0) {
  console.log("El año no es válido. Ingrese nuevamente:");
} else if (year == 0) {
  bono = 0;
  console.log("No corresponde entregar bono.");
} else if (year <= 5) {
  bono = year * 100;
  console.log(`Le corresponde un bono de: $${bono}.`);
} else {
  bono = 1000;
  console.log(`Le corresponde un bono de: $${bono}.`);
} */

// 14.
// Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el programa utilizando el ciclo apropiado.

/* let salario = 1500;
let i;

for (let i = 1; i <= 6; i++) {
  salario = salario * 1.1;

  console.log(
    `El profesor finalizó el año ${i} con un salario de: $ ${salario.toFixed(2)}`,
  );
}
console.log(
  `En 6 años, el profesor ha perdibido un salario de: $ ${salario.toFixed(2)}`,
); */

// 15.
// En una lista de palabras, el bibliotecario necesita saber cuál es la palabra más larga en el archivo. Ayúdale a encontrarla. let palabras = ["manzana", "banana", "cereza", "uva", "fresa"];

/* let palabras = ["manzana", "banana", "cereza", "uva", "fresa", "guanabana"];
let largo = palabras[0];

for (let i = 1; i < palabras.length; i++) {
  if (palabras[i].length > largo.length) {
    largo = palabras[i];
  }
}

console.log(
  `En la lista, la palabra con mayor cantidad de letras es: ${largo}, con un total de ${largo.length} letras.`,
); */

// 16.
// Un coleccionista tiene una caja con varias cartas. Algunas cartas están numeradas del 1 al 10, pero hay algunas cartas repetidas. ¿Cuántas cartas únicas tiene en total?

/* let cartas = [1, 2, 3, 4, 2, 3, 5, 6, 7, 8, 1, 9, 10, 10];
let unicos = [...new Set(cartas)];

console.log(
  `Inicialmente, el coleccionista tiene las siguientes cartas [${cartas}]; pero descartando las repetidas quedan ${unicos.length} cartas siendo las siguientes: [${unicos}].`,
); */

// 17.
// Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida, cuánto le costará en función del topping que elija.
// • El helado sin topping cuesta 50 MXN.
// • El topping de oreo cuesta 10 MXN.
// • El topping de KitKat cuesta 15 MXN.
// • El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

/* let topping = prompt(
  "¿Qué tipo de topping desea?:\n" + "• Oreo\n" + "• Kitkat\n" + "• Brownie",
);

let soloHelado = 50;
let heladoTopping = 0;

if (topping !== null) {
  topping = topping.trim().toLowerCase();
}

if (topping == "oreo") {
  heladoTopping = 10;
} else if (topping == "kitkat") {
  heladoTopping = 15;
} else if (topping == "brownie") {
  heladoTopping = 20;
} else {
  console.log("No tenemos este topping, lo sentimos.");
}

let precio = soloHelado + heladoTopping;

console.log(`El helado tiene un costo de ${precio} MXN.`); */

// 18.
// Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
// • Course: $4999 MXN
// • Carrera $3999 MXN
// • Master: $2999 MXN
// Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
// • Beca Facebook: 20% de descuento.
// • Beca Google: 15% de descuento.
// • Beca Jesua: 50% de descuento.
// Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
// • Course: 2 meses
// • Carrera 6 meses
// • Master: 12 meses

/* let programa = prompt(
  "¿Cuál es el programa elegido para estudiar?:\n" +
    "• Course: $4999 MXN\n" +
    "• Carrera $3999 MXN\n" +
    "• Master: $2999 MXN\n",
);

let mensualidad;
let tiempo;

switch (programa) {
  case "course":
    mensualidad = 4999;
    tiempo = 2;
    break;
  case "carrera":
    mensualidad = 3999;
    tiempo = 6;
    break;
  case "master":
    mensualidad = 2999;
    tiempo = 12;
    break;
  default:
    console.log("La opción no se encuentra disponible, elegir otra: ");
    mensualidad = 0;
    tiempo = 0;
}

if (mensualidad > 0) {
  let beca = prompt(
    "¿Matiene vigente alguna beca?\n" +
      "• Facebook: 20% de descuento\n" +
      "• Google: 15% de descuento\n" +
      "• Jesua: 50% de descuento\n" +
      "• Ninguna beca vigente",
  );
  let dscto;

  switch (beca) {
    case "facebook":
      dscto = 0.2;
      break;
    case "google":
      dscto = 0.15;
      break;
    case "jesua":
      dscto = 0.5;
      break;
    case "ninguna":
      dscto = 0;
      break;
    default:
      console.log("La opción no se encuentra disponible, elegir otra: ");
      dscto = 0;
  }

  let precio = mensualidad - mensualidad * dscto;

  let costo = precio * tiempo;

  console.log(
    "Detalle de inscripción:\n\n" +
      "Mensualidad incial: $" +
      mensualidad.toFixed(2) +
      " MXN\n" +
      "Descuento por beca: " +
      dscto * 100 +
      "%\n" +
      "Mensualidad a pagar: $" +
      precio.toFixed(2) +
      " MXN\n" +
      "Duración del programa: " +
      tiempo +
      " meses\n" +
      "Inversión Total: $" +
      costo.toFixed(2) +
      " MXN\n",
  );
} */

// 19.
// Crea un programa que solicite al usuario números, si lo que este introduce es un número, guardarlo en un arreglo. Para terminar de preguntar al usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

/* let numeracion = [];

while (true) {
  let ingreso = prompt(
    "Debe ingresar un números (ingrese el número 0 si desea finalizar):",
  );
  if (ingreso == null) {
    break;
  }

  let num = ingreso.trim();
  if (num == "") {
    console.log("Ocurrió un error. No se registró ningún número.");
    continue;
  }

  num = Number(num);

  if (num == 0) {
    break;
  }

  if (Number.isFinite(num)) {
    numeracion.push(num);
  } else {
    console.log("Ocurrió un error. Se debe registrar un número válido");
  }
}

console.log(`El usuario capturó los siguientes números: [${numeracion}].`); */

// 20.
// Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
// Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5. Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total.
// Considere: total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.

/* let vehiculo = prompt(
  "¿Cuál es el vehículo que posee usted?:\n" +
    "• coche\n" +
    "• moto\n" +
    "• autobús\n",
);

let km = Number(prompt("¿Cuántos kilometros ha recorrido su vehículo?:"));
let lt = Number(prompt("¿Cuántos litros ha consumido su vehículo?:"));

let precioKm;
let extra;
let total;

switch (vehiculo.toLowerCase()) {
  case "coche":
    precioKm = 0.2;
    break;

  case "moto":
    precioKm = 0.1;
    break;

  case "autobus":
  case "autobús":
    precioKm = 0.5;
    break;

  default:
    console.log(
      "Error: El tipo de vehículo no está dentro de los especificados.",
    );
    precioKm = -1;
}

if (precioKm >= 0) {
  if (lt >= 0 && lt <= 100) {
    extra = 5;
  } else if (lt > 100) {
    extra = 10;
  } else {
    extra = -1;
  }

  if (extra >= 0 && km >= 0) {
    total = precioKm * km + extra;

    console.log(
      "Detalle del Pago:\n\n" +
        "Vehículo atendido: " +
        vehiculo +
        "\n" +
        "Kilometraje: " +
        km +
        " km\n" +
        "Precio por kilómetro: $" +
        precioKm.toFixed(2) +
        "\n" +
        "Litros consumidos: " +
        lt +
        "\n" +
        "Recargo consumo: $" +
        extra.toFixed(2) +
        "\n" +
        "Precio Total: $" +
        total.toFixed(2),
    );
  } else {
    console.log(
      "La cantidad kilómetros y de litros deben ser valores válidos y no negativos.",
    );
  }
} */
