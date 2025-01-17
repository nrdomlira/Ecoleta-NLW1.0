
function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {
            states.map(state => {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            })
        })
}

populateUFs()

function getCities(event) {


    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=state]")


    const ufValue = event.target.value

    stateInput.value = event.target.options[event.target.selectedIndex].text

    citySelect.innerHTML = ""
    citySelect.disabled = true

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`)
        .then(res => res.json())
        .then(cities => {
            cities.map(city => {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            })

            citySelect.disabled = false
        })

}


document.querySelector("select[name=uf]").addEventListener("change", getCities)


//Itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li")

/* itemsToCollect.map(item => 
    item.addEventListener("click", handleSelectedItem)
) */

for (let item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector('input[name=items]')
let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    //add or rem class on js
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    const alreadySelected = selectedItems.findIndex(item => item === itemId)

    if (alreadySelected >= 0) {
        const filtered = selectedItems.filter(item => item !== itemId)
        selectedItems = filtered
    } else {
        selectedItems.push(itemId)
    }
    collectedItems.value = selectedItems
}