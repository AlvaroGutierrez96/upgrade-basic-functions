// un div dentro del body que tenga dentro de el un h1

/* let newP = document.createElement('p'); */

let newD = document.createElement ('div')

let newH1 = document.createElement ('h1')

/* newP.textContent = 'Hola'; */

newH1.textContent = 'Este es mi H1'



/* document.body.appendChild(newP) */

newD.appendChild(newH1)

document.body.appendChild(newD)