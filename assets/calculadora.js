function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1-Soma (+)\n 2-Subtração (-)\n 3-Multiplicação (*)\n 4-Divisão (/)\n 5-Divisão Inteira (%)\n 6-Potenciação (**)'))

if(!operacao || operacao >=7){
    alert("Erro - operação inválida")
    calculadora()
}else{
let n1 = Number(prompt("Insira o Primeiro Valor:"))
let n2 = Number(prompt("Insira o Segundo Valor:"))
let resultado
if(!n1||!n2){
    alert("Erro-- Parametros invalidos")
    calculadora()
}else{
    function soma() {
        resultado = n1+n2
        alert(`${n1} + ${n2} = ${resultado}`)
        
        novaoperacao()
    }
    function subtracao() {
        resultado = n1-n2
        alert(`${n1} - ${n2} = ${resultado}`)
        novaoperacao()
    }
    function multiplicacao() {
        resultado = n1*n2
        alert(`${n1} X ${n2} = ${resultado}`)
        novaoperacao()
    }
    function divisao() {
        resultado = n1/n2
        alert(`${n1} / ${n2} = ${resultado}`)
        novaoperacao()
    }
    function divInteiro() {
        resultado = n1%n2
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
        novaoperacao()
    }
    function potenciacao() {
        resultado = n1**n2
        alert(`O numero ${n1} elevado a  ${n2}  é igual a ${resultado}`)
        novaoperacao()
    }
    
    function novaoperacao(){
        let opcao = Number(prompt('Deseja fazer outra operação:\n 1-Sim\n 2-Não'))
    
        if(opcao==1){
            calculadora()
        }else if( opcao ==2){
            alert("Até mais")
        }else{
            alert("Digite uma opção valida")
            novaoperacao
        }
    }
    if (operacao == 1) {
        soma()
    } else if (operacao == 2) {
        subtracao()
    } else if (operacao == 3) {
        multiplicacao()
    } else if (operacao == 4) {
        divisao()
    } else if (operacao == 5) {
        divInteiro()
    } else if (operacao == 6) {
        potenciacao()
    }
    }
    }

}



calculadora()