//entradas - inputs
let inputName = document.querySelector("#input__name");
let inputNumber = document.querySelector("#input__num");
// botoes - buttons
let buttonAdd = document.querySelector("#button__add");
let buttonView = document.querySelector("#button__view");
// listas - list
let listItem = document.querySelector("#list");
let list = document.querySelector(".listItem");

buttonAdd.addEventListener("click",add)

function add(){
    let nameItem = inputName.value;
    let number = inputNumber.value;

    var newLi = document.createElement("li");
    newLi.textContent = nameItem + ", " + number + "x";

    if( nameItem != "" && number != ""){
        if(number <= 0){
            window.alert("ERRO: quantidade inválida !")    
        }
        else{
            listItem.appendChild(newLi);
        }
    }
    else{
        window.alert("ERRO: Algum dado está incompleto !");
    }

    newLi.addEventListener("click",buy);    
    
    inputName.value = "";
    inputNumber.value = "";
    inputName.focus();
    inputNumber.focus();
}

function buy() {
    if(this.classList.contains("bought")){
        this.classList.remove("bought");
    }
    else {
        this.classList.add("bought");
    }
}

// botão ver lista

list.style.display = "none";
buttonView.addEventListener("click", () =>{
    if(list.style. display == "none"){
        list.style.display = "flex";
    }else{
        list.style.display = "none";
    }
})
