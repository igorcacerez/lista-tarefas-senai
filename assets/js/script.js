var lista = []

var btn = document.querySelector("#btn_cadastrar")
btn.addEventListener("click", function(){
    let texto = document.querySelector("#tarefa")
    lista.push(texto.value)

    texto.value = ""
    carregarCadastros()
})

function carregarCadastros() {
    let div = document.querySelector("#lista_tarefas")
    div.innerHTML = ""

    for(let [indice, valor] of lista.entries()) {
        let paragrafo = document.createElement("p")
        paragrafo.textContent = valor
        paragrafo.setAttribute("class","item")
        paragrafo.setAttribute("data-indice", indice)

        let btn = document.createElement("button")
        btn.textContent = "OK"
        btn.onclick = deletarTarefa

        paragrafo.appendChild(btn)
        div.appendChild(paragrafo)
    }
}

function deletarTarefa() {
    let pai = this.parentNode
    let indice = pai.getAttribute("data-indice")
    lista.splice(indice, 1)

    carregarCadastros()
}