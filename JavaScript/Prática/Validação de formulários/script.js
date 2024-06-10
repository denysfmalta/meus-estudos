// INTRODUÇÃO À VALIDAÇÃO DE FORMULÁRIOS

// usuario
document.querySelector('input[name="usuario"]').addEventListener('keyup', () => {
    console.log(document.querySelector('input[name="usuario"] + span'))
})


// senha
document.formulario_login.addEventListener('submit', (event) => {
    // buscar valores dos campos
    let usuario = event.target.usuario.value
    let senha = event.target.senha.value
    let submit = true


    // remover erros anteriores

    document.querySelectorAll('.error').forEach(e => e.remove())

    // validar usuario
    if(usuario === ""){
        submit = false

        // erro
        let tmp = document.querySelector('input[name="usuario"]')
        tmp.insertAdjacentHTML('afterend', '<span class="error">Usuário é obrigatório</span>')
    }

       

     // validar senha
     if(senha === ""){
        submit = false
        let tmp = document.querySelector('input[name="senha"]')
        tmp.insertAdjacentHTML('afterend', '<span class="error">Senha é obrigatório</span>')
    }

    // verifica se o formulário pode ser submetido
    if(!submit){
        event.preventDefault()

        setTimeout(() => {
            event.preventDefault()

            setTimeout(()=>{
                document.querySelectorAll(".error").forEach(e => e.remove())
            }, 2000)
        })
    }
})