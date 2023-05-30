//Var: Variavel global, atua fora do escopo 
//Let: Varival local, atual apenas dentro do escopo
//Const: Valor fixo, uma constante.

let igualPressinar = 0;
//Consutla todos os botoes excluindo o C e o Dell
let button_input = document.querySelectorAll(".botao")

//Consultar os botoes input, igual, clear e deletar

let entrada = document.getElementById("entrada")
let clear = document.getElementById("clear")
let del = document.getElementById("del")
let igual = document.getElementById("igual")

window.onload = () =>{
    input.value = ""
}

// Acessar as clases usando ForEach

button_input.forEach((button_class)=>{
    button_class.addEventListener("click", ()=>{
        if(igualPressinar == 1) {
            input.value = ""
            igualPressinar = 0
        }    

        //Valor de exibicao de cada Botao
        input.value += button_class.value
    })
}) 

// Resolver a operacao quando o user clicar em igual

igual.addEventListener("click", ()=>{
    igualPressinar = 1

    let inp_val = input.value

    try {
        let solucao = eval(inp_val)

        if (Number.isInteger(solucao)){
            input.value = solucao

        } else {
            input.value = solucao.toFixed(2)
        }

    } catch (err){
        alert("Entrada Invalida")
    }
})

// Limpar

clear.addEventListener("click", () => {
    input.value = ""
})

// Apagar um digito por vez

del.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1)
})
