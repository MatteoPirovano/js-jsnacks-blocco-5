//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

// versione normale----------------
$(document).ready(function() {
  var numeri= ['teo', 'luca', 'giovanni', 'andrea', 'marco', 'federico', 'tommaso' ];
  console.log(numeri);
  var a = 3;
  var b = 6;
  var risultato = numeriCompresi(numeri, a, b)
  console.log(risultato);
});

function numeriCompresi(array, min, max) {
  var numeri2 = [];
  for (var i = 0; i < array.length; i++) {
    var elemento=array[i];
    if(i >= min && i <= max){
      numeri2.push(elemento)
    }
  }
  return numeri2;
}
// versione normale----------------
