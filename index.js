const martelo = document.querySelector('.cursor')
let buracos = Array.from(document.querySelectorAll('.buraco'))
let pontos = 0

window.addEventListener('mousemove', e => {
    martelo.style.top = e.pageY + 'px'
    martelo.style.left = e.pageX + 'px'
})

window.addEventListener('mousedown', () => {
    martelo.classList.add('active')
})

window.addEventListener('mouseup', () => {
    martelo.classList.remove('active')
})

function iniciar() {
    const i = Math.floor(Math.random() * buracos.length)
    const buraco = buracos[i]
    let temporizador = null

    const img = document.createElement('img')
    img.classList.add('marmota')
    img.src = 'imgs/marmota.png'
    img.width = 180

    img.addEventListener('click', () => {
        pontos += 10

        img.src = 'imgs/marmota-capotada.png'
        img.width = 210

        clearTimeout(temporizador)

        setTimeout(() => {
            buraco.removeChild(img)
            iniciar()
        }, 500)
    })

    buraco.appendChild(img)

    temporizador = setTimeout(() => {
        buraco.removeChild(img)
        iniciar()
    }, 1500)
}

iniciar()