//Animação da imagem
function ir() {
    let fundo = document.getElementById('imagem')
    let h1 = document.getElementsByClassName('texto')[0]
    let p = document.getElementsByClassName('texto')[1]

    if (window.matchMedia('(min-width: 320px)').matches && window.matchMedia('(max-width: 509px)').matches) {

        if (h1.innerHTML == ('Já tem uma conta?')) {

            fundo.style.transform = 'translate(0%, -103%)'
            fundo.style.borderRadius = '20px 20px 0px 0px'
            fundo.style.backgroundPosition = 'left center'
            
            h1.innerHTML = ('Não possui uma conta?')
            p.innerHTML = ('Clique no botão abaixo para fazer o cadastro.')

        } else if (h1.innerHTML == ('Não possui uma conta?')) {

            fundo.style.transform = 'translate(0%, 0%)'
            fundo.style.borderRadius = '0px 0px 20px 20px'
            fundo.style.backgroundPosition = 'center right'

            h1.innerHTML = ('Já tem uma conta?')
            p.innerHTML = ('Clique no botão abaixo para fazer login.')
        }

    } else if (window.matchMedia('(min-width: 510px)').matches) {

        if (h1.innerHTML == ('Já tem uma conta?')) {

            fundo.style.transform = 'translate(-50.2%, -51%)'
            fundo.style.borderRadius = '20px 0px 0px 20px'
            fundo.style.backgroundPosition = 'left center'

            h1.innerHTML = ('Não possui uma conta?')
            p.innerHTML = ('Clique no botão abaixo para fazer o cadastro.')

        } else if (h1.innerHTML == ('Não possui uma conta?')) {

            fundo.style.transform = 'translate(50.2%, -51%)'
            fundo.style.borderRadius = '0px 20px 20px 0px'
            fundo.style.backgroundPosition = 'center right'

            h1.innerHTML = ('Já tem uma conta?')
            p.innerHTML = ('Clique no botão abaixo para fazer login.')
        }
    }  
}
//Verifições do formulário
var nomeSalvo = ''
var senhaSalvo = ''
var emailSalvo = ''
var senhaCorreta = ''
var emailCorreto = ''

function Cadastrar() {
    var nome = document.getElementById('nomeusuario')
    var email = document.getElementById('email')
    var senha = document.getElementById('senha')
    
    let iemail = email.value.split('')

    if (nome.value.length == 0 || email.value.length == 0 || senha.value.length == 0) {
        alert('Preencha todos os campos para seguir.')
    } else {
        if (senha.value.length < 8) {
            alert('A senha tem que ter no minímo 8 charecteres.')
        } else if (!iemail.includes('@')) {
            alert('Esse E-mail não é válido.')
        } else {
            alert(`Olá, ${nome.value}.\nSua conta foi cadastrada com sucesso.\nAgora faça login para continuar.`)
            nomeSalvo = nome.value
            emailSalvo = email
            senhaSalvo = senha
            senhaCorreta = senhaSalvo.value
            emailCorreto = emailSalvo.value

            document.getElementById('nomeusuario').value = ''
            document.getElementById('email').value = ''
            document.getElementById('senha').value = ''
            ir()
        }
    }
}

function login() {
    let emaillogin = document.getElementById('emaillogin')
    let iemaillogin = emaillogin.value.split('')
    let senhalogin = document.getElementById('senhalogin')

    if (emaillogin.value.length == 0 || senhalogin.value.length == 0) {
        alert('Preencha todos os campos para seguir.')
    } else {
        if (senhaSalvo == '' || emailSalvo == '' || nomeSalvo == '') {
            alert('E-mail não cadastrado.\nFaça o cadastro para seguir.')
            emaillogin.value = ''
            senhalogin.value = ''
            ir()
        } else if (senhalogin.value != senhaCorreta) {
            alert('Senha incorreta.\nVerifique os dados.')
        } else if (!iemaillogin.includes('@') || emaillogin.value != emailCorreto) {
            if (!iemaillogin.includes('@')) {
                alert('E-mail inválido')
            } else if (emaillogin.value != emailCorreto) {
                alert('E-mail incorreto.\nVerifique os dados')
            }
        } else {
            alert(`Bem-vindo, ${nomeSalvo}.\nLogin efetuado com sucesso.`)

            emaillogin.value = ''
            senhalogin.value = ''
        }
    }     
}

function esqueceuSenha() {
    var verificaEmail = prompt('Digite o E-mail da sua conta:')
    verificaEmail.split('')

    if (verificaEmail.length == 0 || !verificaEmail.includes('@')) {
        alert('E-mail inválido.')
    } else if (verificaEmail != emailCorreto) {
        alert('E-mail não cadastrado.')
    } else {
        var senhaNova = ''

        for (senhaNova;senhaNova.length < 8 || senhaNova == senhaCorreta;) {
            senhaNova = prompt('Digite sua nova senha:')
    
            if (senhaNova.length == 0) {
                alert('Por favor digite uma nova senha.')
            } else {
                if (senhaNova.length < 8) {
                    alert('Sua senha deve conter pelo menos 8 charecteres.')
                } else if (senhaNova == senhaCorreta) {
                    alert('Essa senha é igual a senha anterior.\nPor favor digite uma nova senha.')
                } else {
                    alert('Sua senha foi alterada com sucesso.')
                    senhaCorreta = senhaNova
                    break
                }
            }
        }
    } 
}