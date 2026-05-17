const boton = document.querySelector('button');
const color1 = document.getElementById('color');
const color2 = document.getElementById('coloor');

function generarColorHexAleatorio(){
    let digitos = '0123456789ABCDEF';
    let color2HexColor = '#'

    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 16)
        color2HexColor += digitos[indiceAleatorio]
    }

    return color2HexColor
}

boton.addEventListener('click', function(){
    let colorAleatorio = generarColorHexAleatorio()

    color1.style.color = colorAleatorio
    color2.style.color = colorAleatorio

    boton.style.color = colorAleatorio

    boton.style.boxShadow = '0 0 20px' + colorAleatorio

    color2.textContent = colorAleatorio
    document.body.style.backgroundColor = colorAleatorio
})