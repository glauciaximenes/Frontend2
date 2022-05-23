
// Grupo Glaucia Ximenes - Fábio Augusto - Luiz Felipe - José Lucas - Galvao Matheus - Juan Rafael

let escolhaUsuario = ''
    let escolhaMaquina = 0


function obterEscolhas() {

    escolhaUsuario = Number(prompt('Escolha entre [1] Pedra - [2] Papel - [3] Tesoura'))
    escolhaMaquina = Math.floor(Math.random() * 3) + 1

    console.log(escolhaUsuario)
    console.log(escolhaMaquina) 

}


function calcularVencedor() {

    if(escolhaMaquina == 1 && escolhaUsuario == 3){
        alert('Você perdeu!')
    } else if(escolhaMaquina == 1 && escolhaUsuario == 2) {
        alert ('Você ganhou!')
    } else if (escolhaMaquina == 2 && escolhaUsuario == 1){
        alert('Você perdeu!')
    }else if (escolhaMaquina == 2 && escolhaUsuario == 3){
        alert('Você ganhou!')
    }else if(escolhaMaquina == 3 && escolhaUsuario == 1){
        alert('Você ganhou!')
    }else if(escolhaMaquina == 3 && escolhaUsuario == 2){
        alert('Você perdeu!')
    }else if (escolhaMaquina == escolhaUsuario){
        alert('Deu empate!')
    } else {
        alert('Inválido')
    }
}

function jogarNovamente() {

    let confirmacao = confirm('Deseja jogar novamente')

    if (confirmacao == true){
        iniciarJogo()
    } else {
        alert('Obrigado por jogar!')
    }
}

function iniciarJogo() {
    obterEscolhas()
    calcularVencedor()
    jogarNovamente()
}


iniciarJogo()