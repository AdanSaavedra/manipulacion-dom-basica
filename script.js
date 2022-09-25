const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.getElementById('pid')
const input = document.querySelector('input')

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerText = 'Patito <br> Feo';
console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo')

h1.classList.add('rojo')
h1.classList.remove("verde")

//h1.classList.toggle('verde');
//h1.classList.contains('verde');

input.value='456';

const img= document.createElement('img');
img.setAttribute('src','https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1');
console.log(img);

pid.innerHTML = '';
pid.append(img);