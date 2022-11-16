"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }
  let mayores = [];
  let menores = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[0]) mayores.push(array[i]);
    else menores.push(array[i]);
  }
  return quickSort(menores).concat(array[0]).concat(quickSort(mayores));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }
  let mitad;
  if (array.length % 2 == 0) mitad = array.length / 2;
  else mitad = (array.length - 1) / 2;
  let arr1 = mergeSort(array.slice(0, mitad));
  let arr2 = mergeSort(array.slice(mitad));
  let salida = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) salida.push(arr1.shift());
    else salida.push(arr2.shift());
  }
  salida = salida.concat(arr1);
  salida = salida.concat(arr2);
  return salida;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
