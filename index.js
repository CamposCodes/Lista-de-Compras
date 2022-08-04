//entradas - inputs
let entradaNome = document.querySelector("#input__name");
let entradaNum = document.querySelector("#input__num");
// botoes - buttons
let botao = document.querySelector("#button__add");
let botaoVer = document.querySelector("#button__view");
// listas - list
let lista = document.querySelector("#list");
let list = document.querySelector(".listItem");

botao.addEventListener("click",adicionar)

function adicionar(){
    let textoItem1 = entradaNome.value;
    let textoItem2 = entradaNum.value;

    var novoLi = document.createElement("li");
    novoLi.textContent = textoItem1 + ", " + textoItem2 + "x";

    if( textoItem1 != "" && textoItem2 != ""){
        if(textoItem2 <= 0){
            window.alert("ERRO: quantidade inválida !")    
        }
        else{
            lista.appendChild(novoLi);
        }
    }
    else{
        window.alert("ERRO: Algum dado está incompleto !");
    }

    novoLi.addEventListener("click",comprar);    
    
    entradaNome.value = "";
    entradaNum.value = "";
    entradaNome.focus();
    entradaNum.focus();
}

function comprar() {
    if(this.classList.contains("comprado")){
        this.classList.remove("comprado");
    }
    else {
        this.classList.add("comprado");
    }
}