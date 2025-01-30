//Animação da imagem
function ir() {
    let fundo = document.getElementById('imagem')
    let tela = document.getElementsByTagName('body')[0]
    let h1 = document.getElementsByClassName('texto')[0]
    let p = document.getElementsByClassName('texto')[1]

    if (window.matchMedia('(min-width: 320px)').matches && window.matchMedia('(max-width: 509px)').matches) {

        if (h1.innerHTML == ('Já tem uma conta?')) {

            fundo.style.transform = 'translate(0%, -101%)'
            fundo.style.borderRadius = '20px 20px 0px 0px'
            fundo.style.backgroundPosition = 'right center'

            h1.innerHTML = ('Não possui uma conta?')
            p.innerHTML = ('Clique no botão abaixo para fazer o registro.')

        } else if (h1.innerHTML == ('Não possui uma conta?')) {

            fundo.style.transform = 'translate(0%, 0%)'
            fundo.style.borderRadius = '0px 0px 20px 20px'
            fundo.style.backgroundPosition = 'center left'

            h1.innerHTML = ('Já tem uma conta?')
            p.innerHTML = ('Clique no botão abaixo para fazer login.')
        }

    } else if (window.matchMedia('(min-width: 510px)').matches) {

        if (h1.innerHTML == ('Já tem uma conta?')) {

            fundo.style.transform = 'translate(-51%, -50%)'
            fundo.style.borderRadius = '20px 0px 0px 20px'
            fundo.style.backgroundPosition = 'right center'

            h1.innerHTML = ('Não possui uma conta?')
            p.innerHTML = ('Clique no botão abaixo para fazer o registro.')

        } else if (h1.innerHTML == ('Não possui uma conta?')) {

            fundo.style.transform = 'translate(50%, -50%)'
            fundo.style.borderRadius = '0px 20px 20px 0px'
            fundo.style.backgroundPosition = 'center left'

            h1.innerHTML = ('Já tem uma conta?')
            p.innerHTML = ('Clique no botão abaixo para fazer login.')
        }
    }  
}

function Registrar() {
    var nome = document.getElementById('nomeusuario')
    var email = document.getElementById('email')
    var senha = document.getElementById('senha')

    nomeSalvo = nome
    emailSalvo = email
    senhaSalvo = senha
    
    let iemail = email.value.split('')

    if (nome.value.length == 0 || email.value.length == 0 || senha.value.length == 0) {
        alert('Preencha todos os campos para seguir.')
    } else {
        if (senha.value.length < 8) {
            alert('A senha tem que ter no minímo 8 charecteres.')
        } else if (!iemail.includes('@')) {
            alert('Esse E-mail não é válido.')
        } else {
            alert(`Olá, ${nome.value}.\nSua conta foi registrada com sucesso.\nAgora faça login para continuar.`)

            ir()
        }
    }
}

function login() {
    let senhaCorreta = senhaSalvo.value
    let emailCorreto = emailSalvo.value

    let emaillogin = document.getElementById('emaillogin')
    let iemaillogin = emaillogin.value.split('')
    let senhalogin = document.getElementById('senhalogin')

    if (emaillogin.value.length == 0 || senhalogin.value.length == 0) {
        alert('Preencha todos os campos para seguir.')
    } else {
        if (senhalogin.value != senhaCorreta) {
            alert('Senha incorreta,ou não registrada.\nVerifique os dados.')
        } else if (!iemaillogin.includes('@') || emaillogin.value != emailCorreto) {
            if (!iemaillogin.includes('@')) {
                alert('E-mail inválido')
            } else if (emaillogin.value != emailCorreto) {
                alert('E-mail incorreto,ou não registrado.\nVerifique os dados')
            }
        } else {
            alert(`Bem-vindo, ${nomeSalvo.value}.\nLogin efetuado com sucesso.`)

            emaillogin.value = ''
            senhalogin.value = ''
        }
    }
}