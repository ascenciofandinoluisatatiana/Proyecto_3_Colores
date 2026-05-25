const boton = document.querySelector('button');

const cv = document.getElementById('cv')
const cn = document.getElementById('cn')

const ColorViejo = document.getElementById('ColorViejo')
const ColorNuevo = document.getElementById('ColorNuevo')

const colorV = document.getElementById('colorV')
const colorN = document.getElementById('colorN')

let colorActual = '#2B807B'

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

    ColorViejo.style.display = 'block'
    ColorNuevo.style.display = 'block'

    let colorAleatorio = generarColorHexAleatorio()

    boton.style.color = colorAleatorio

    boton.style.boxShadow = '0 0 20px ' + colorAleatorio

    document.body.style.background =
    `linear-gradient(to right, ${colorActual}, ${colorAleatorio})`

    colorV.textContent = colorActual
    colorN.textContent = colorAleatorio

    ColorViejo.style.border = '2px solid ' + colorActual
    ColorNuevo.style.border = '2px solid ' + colorAleatorio

    cv.style.color = colorActual
    cn.style.color = colorAleatorio
    
    colorV.style.color = colorActual
    colorN.style.color = colorAleatorio

    colorActual = colorAleatorio
    
})