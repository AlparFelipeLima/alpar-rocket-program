const paragraphEl = document.getElementsByTagName('p')[0]
const toggleButtonEl = document.querySelector('.toggle-button')

toggleButtonEl.onclick = () => {
    if(paragraphEl.classList.contains("open")) {
        paragraphEl.classList.remove("open")
        paragraphEl.innerHTML = 'Fechado'
        toggleButtonEl.innerHTML = 'Abrir'
    } else {
        paragraphEl.classList.add("open")
        paragraphEl.innerHTML = 'Aberto'
        toggleButtonEl.innerHTML = 'Fechar'
    }
}
