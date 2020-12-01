const carros = []

const adicionarCarros = () => {
    let modelo = document.getElementById('modelo')
    let preco = document.getElementById('preco')
    if (modelo.value !== '') {
        let precoValue = Number(preco.value)
        if(!isNaN(precoValue) && precoValue > 0) {
            carros.push({
                modelo: modelo.value,
                preco: precoValue
            })

            modelo.value = ''
            preco.value = 0
            modelo.focus()

            listarTodos()
        } else {
            alert("Por favor, informe um preço válido")
            preco.focus()
        }
    } else {
        alert("Por favor, informe um modelo")
        modelo.focus()
    }
}

const listarTodos = () => {
    const listaCarros = document.getElementById('listaCarros')
    if (carros.length === 0) {
        listaCarros.innerHTML = "Não há carros no momento!"
        return
    }

    listaCarros.innerHTML = mostrarListaDeCarros(carros)
}

const filtrarPorPreco = () => {
    let valor = Number(prompt("Qual o valor máximo que o cliente deseja pagar? "))
    const listaCarros = document.getElementById('listaCarros')
    if (valor === 0 || isNaN(valor)) {
        return
    }

    const lista = carros.filter(x => x.preco <= valor)
    if (lista.length > 0) {
        listaCarros.innerHTML = mostrarListaDeCarros(lista)
    } else {
        listaCarros.innerHTML = 'Não há carro nessa faixa de preço'
    }

}



const mostrarListaDeCarros = (carros) => {
    let html = '<ul class="list-group">'
    for(let i = 0; i < carros.length; i++) {
        html += `<li class="list-group-item">Modelo: ${carros[i].modelo} - R$: ${carros[i].preco.toFixed(2)}</li>`
       
    }
    html += '</ul>'

    return html
}

let btnAdicionar = document.getElementById('btnAdicionar')
btnAdicionar.addEventListener("click", adicionarCarros)

let btnListarTodos = document.getElementById('btnListarTodos')
btnListarTodos.addEventListener('click', listarTodos)

let btnFiltrarPorPreco = document.getElementById('btnFiltrar')
btnFiltrarPorPreco.addEventListener('click', filtrarPorPreco)