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
  console.log(typeof busqueda)
  if ((typeof busqueda) == "function") {
    do{
      if (busqueda(pointer.value)==true){
        return pointer.value
      }
      pointer = pointer.next;
    }while(pointer.next!=null)
    return null;
  }else{
    do{
      if (busqueda == pointer.value){
        return pointer.value
      }
      pointer = pointer.next;
    }while (pointer.next!=null) 
    return null
  }
  
};

  let lista_vinculada = new LinkedList;
  var para = function(nodeValue) {
    return nodeValue === 'two';
  }
  lista_vinculada.add("one")
  lista_vinculada.add("two")
  lista_vinculada.add("luis")
  console.log(lista_vinculada)


 


  


