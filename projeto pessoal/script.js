function adicionarTarefa() {
    
    
    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa =  inputTarefa.value.trim()
    let mensagem = document.getElementById("mensagem")

    if (tarefa == "" ) {
        //mostre uma mensagem de erro
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista" 
        mensagem.textContent = mensagemErro
        mensagem.style.color = "#A34743" 
        
    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        mensagem.style.color = "green"

    let listaTarefas = document.getElementById("listaTarefas")
    let novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefa
    listaTarefas.appendChild(novaTarefa)

    }
    



    inputTarefa.value = ""

    // se o valor do pinput for vazio então mostra uma mensagem de erro para o usuário
    
   
  }