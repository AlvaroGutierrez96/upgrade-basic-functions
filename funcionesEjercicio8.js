/* Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. 
Puedes usar este array para probar tu función: */

let counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  
  let total = [];
  function repeatCounter(param) {
    let counter = 0;
    for (let i = 0; i < param.length; i++) {
      counter = 0;
      if (!total.includes(param[i])){ 
        for (let j = 0; j < param.length; j++){
          if (param[i] == param[j]){
            counter++;
          }
        }
        console.log('La palabra ' + param[i] + ' se repite ' + counter + ' veces');
      }
      total.push(param[i]);
    }


  }
repeatCounter(counterWords);