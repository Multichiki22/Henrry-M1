"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (valor) {
  let nuevoNodo = new Node(valor);
  if (this.tail == null) {
    this.head = nuevoNodo;
    this.tail = nuevoNodo;
  } else {
    this.tail.next = nuevoNodo;
    this.tail = nuevoNodo;
  }
  return;
};
LinkedList.prototype.remove = function () {
  let pointer = this.head;
  let temp;
  if (this.head == null) {
    return null;
  } else if (this.head == this.tail) {
    let salida = this.head.value;
    this.head = null;
    this.tail = null;
    return salida;
  } else {
    while (pointer.next != null) {
      temp = pointer;
      pointer = pointer.next;
    }
    temp.next = null;
    this.tail = temp;
    return pointer.value;
  }
};

LinkedList.prototype.search = function (busqueda) {
  if (this.head == null) {
    return null;
  }
  let pointer = this.head;
  if (typeof busqueda == "function") {
    while (pointer) {
      if (busqueda(pointer.value) == true) {
        return pointer.value;
      }
      pointer = pointer.next;
    }
    return null;
  }
  while (pointer) {
    if (busqueda == pointer.value) {
      return pointer.value;
    }
    pointer = pointer.next;
  }
  return null;
};

/*
Implementar la clasae HashTable.

Nuetra tabla hash, internamente, const de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}
function Pair(llave, value) {
  this.key = llave;
  this.value = value;
}
HashTable.prototype.set = function (key, value) {
  if (typeof key != "string") {
    throw TypeError("Keys must be strings");
  }
  if (this.buckets[this.hash(key)] != undefined) {
    let temp = [...this.buckets[this.hash(key)]];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].key == key) {
        temp[i].value = value;
        this.buckets[this.hash(key)] = [...temp];
        return;
      }
    }
    temp.push(new Pair(key, value));
    this.buckets[this.hash(key)] = [...temp];
  } else {
    this.buckets[this.hash(key)] = [];
    this.buckets[this.hash(key)].push(new Pair(key, value));
  }
};
HashTable.prototype.get = function (key) {
  if (this.buckets[this.hash(key)].length == 1) {
    return this.buckets[this.hash(key)][0].value;
  } else {
    for (let i = 0; i < this.buckets[this.hash(key)].length; i++) {
      if (this.buckets[this.hash(key)][i].key == key) {
        return this.buckets[this.hash(key)][i].value;
      }
    }
    return "No existe esta key";
  }
};
HashTable.prototype.hasKey = function (key) {
  if (this.buckets[this.hash(key)].length == 1) {
    if (this.buckets[this.hash(key)][0].key == key) {
      return true;
    } else {
      return false;
    }
  } else {
    for (let i = 0; i < this.buckets[this.hash(key)].length; i++) {
      if (this.buckets[this.hash(key)][i].key == key) {
        return true;
      }
    }
    return false;
  }
};
HashTable.prototype.hash = function (key) {
  if (typeof key != "string") {
    return "Keys must be strings";
  }
  let suma = 0;
  for (let i = 0; i < key.length; i++) {
    suma += key.charCodeAt(i);
  }
  return suma % this.numBuckets;
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
