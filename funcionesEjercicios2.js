var avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    miPalabraMasLarga = "";
    for (let i = 0; i < param.length; i++) {
      if (param[i].length > miPalabraMasLarga.length){
          miPalabraMasLarga = param[i]
      }
    
    }
    return miPalabraMasLarga
}
   
console.log(findLongestWord(avengers))