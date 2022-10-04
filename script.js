const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')

form.addEventListener('submit',btnOnClick);

function btnOnClick(event){
    event.preventDefault()
    let result = (parseInt(input1.value) + parseInt(input2.value))
    pResult.innerText = (`El Resultado es: ${result}`)
}