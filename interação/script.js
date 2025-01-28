var bot = document.getElementsByClassName('botao')[0]
var fundo = document.getElementById('imagem')

function clicou() {
    let h1 = document.getElementsByClassName('texto')[0]
    let p = document.getElementsByClassName('texto')[1]

    if (h1.innerHTML == ('Já tem uma conta?') ) {

        fundo.style.transform = 'translate(0%, -101%)'
        fundo.style.borderRadius = '20px 20px 0px 0px'

        h1.innerHTML = ('Não possui uma conta?')
        p.innerHTML = ('Clique no botão abaixo para fazer o registro')

    } else if (h1.innerHTML == ('Não possui uma conta?')) {
        fundo.style.transform = 'translate(0%, 1%)'
        fundo.style.borderRadius = '0px 0px 20px 20px'

        h1.innerHTML = ('Já tem uma conta?')
        p.innerHTML = ('Clique no botão abaixo para fazer login')
    }
}