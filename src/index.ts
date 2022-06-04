//console.log (Math.random () * 3 + 7)

/*Ejercicios de Repaso
Ejercicio – Calcular Promedio
• El DT de los infantiles del equipo de fútbol desea
saber el promedio de la edad de los chicos
• La edad de los chicos va de 3 a 7 años. Las
edades son cargadas al azar (use la función
aleatorio(menorValor, mayorValor), es decir
aleatorio(3,7))
• Muestre todas las edades y el promedio de las
mismas*/

let i = 0;
let cantidadNiños: number = Number(prompt(" ingrese cantidad de niños"));
let edades: number[] = new Array(cantidadNiños);

for (i = 0; i < edades.length; i++) {
  edades[i] = Math.round(Math.random() * (7 - 3) + 3);

  console.log("infantes" + i + " ;" + edades[i]);
}

let suma = 0;
let promedio = 0;

for (i = 0; i < edades.length; i++) {
  suma = suma + edades[i];
  promedio = suma;
  promedio /= cantidadNiños;
}

console.log(" el promedio de los infantes es de:", +"" + promedio);
