//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y 
//de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
let sum = 0;

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']; //La suma de los números =16 //la suma de las palabras=25
function averageWord(param) {
    for (let i = 0; i < param.length; i++){
        if (typeof param[i] === 'number'){
            sum += param[i];
        }
    else{
        sum+=param[i].length
    }

    }
   
    console.log(sum)

}
averageWord (mixedElements)

