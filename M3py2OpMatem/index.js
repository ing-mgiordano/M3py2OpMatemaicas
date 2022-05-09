const num1 = parseInt(prompt('Ingrese el primer numero',0))
const num2 = parseInt(prompt('Ingrese el segundo numero',0))

const resultOperacion = `El resultado de la suma (${num1}+${num2}) es: ${num1 + num2} <br> 
                    El resultado del resto (${num1}-${num2}) es: ${num1 - num2} <br>
                    El resultado de la multiplicacion (${num1}*${num2}) es: ${num1 * num2} <br>
                    El resultado de la division (${num1}/${num2}) es: ${num1 / num2}`
                    
document.getElementById('resultMatem').innerHTML = resultOperacion