"use strict";
// No cambies los nombres de las funciones.

var NumerosPrimosAntesDeN = function (N) {
  //altamente in eficiente
  let nprimos = [1]; //aqui gaurdamos los numero primos que vayamos encontrando
  let primo = 1; //empezamos evaluando desde el 1 pues el 1 por definicion es primo
  for (let j = 0; j < N; j++) {
    for (let i = 2; i <= primo; i++) {
      //Comprobamos que primo no se pueda dividir por ningun otro numero
      if (i == primo)
        nprimos.push(
          primo
        ); //si reccore todo el ciclo entonces tiene que ser primo
      else if (primo % i == 0) break; //si se logra dividir por un numero diferente a si mismo entonces no es primo y rompe
    }
    primo++; //evaluamos el siguiente numero
  }
  return nprimos; //despues de recorrer todos los numeros devolvemos el arreglo
}

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factores = []; //necesitamos un array para guardar los factores
  //necesitamos averiguar los primeros num numeros primos
  let primos = NumerosPrimosAntesDeN(num); //creamos otra funcion que se encargue de esta tarea

  while (num >= 1) {
    //evaluamos si num es divisivle por los numero primos que encontramos anteriormente
    if (num == 1) {
      factores.unshift(1);
      break;
    }
    if (num % primos[primos.length - 1] != 0) {
      //si no es divisible
      primos.pop(); //entonces eliminamos este numero de la lista
    } else {
      factores.unshift(primos[primos.length - 1]); //si es divisible lo agregamos a la lista
      num = num / primos[primos.length - 1];
    }
  }
  return factores;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2) {
    //primero verificar que hayan mas de 2 elementos
    return array;
  }
  let final = array.length;
  for (let i = 0; i < final; i++) {
    //iterar sobre el arreglo cogiendo el valor actual y el anterior
    //en este caso empezar desde [1]
    for (let i = 1; i < final; i++) {
      //si el elemento anterior es mayor que el actual cambiarlos de poscision
      if (array[i - 1] > array[i]) {
        let temp = array[i - 1]; //guardamos el valor del anterior
        array[i - 1] = array[i]; //sobrescribimos en la posicion del anterior el valor actual
        array[i] = temp; //en la posicion ponemos el valor guardado
      }
    }
    final--;
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0;i<array.length;i++){
    let j = i
    while(array[j]<array[j-1]){
      let temp = array[j-1]
      array[j-1] = array[j]
      array[j] = temp
      j--
    }
  }
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i =0;i<array.length;i++){
    let aux = i
    for (let j = i;j<array.length;j++){
      if (array[j]<array[aux]){
        aux = j
      }
    }
    let temp = array[aux]
    array[aux] = array[i]
    array[i] = temp
  }
  return array
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
