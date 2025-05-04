const botoes = document.querySelectorAll('.botao')
const contador = document.getElementById('contador')

var num = 0

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        if (botao.classList == 'botao mais') {
            num += 1
        } else num -= 1

        contador.innerHTML = num
    })
})