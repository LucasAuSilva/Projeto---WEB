
const submitButton = document.getElementById("handle-form")
const inputs = document.getElementsByTagName('input')

function verificaInputs() {
    const cont = inputs.length
    let empty = false

    for (let x = 0; cont > x; x++) {
        if (inputs[x].value != "") {
            let text = document.getElementsByTagName('p')[x + 1]
            text.style.display = 'none'
        } else {
            let text = document.getElementsByTagName('p')[x + 1]
            text.style.display = 'initial'
            empty = true
        }
    }

    return empty
}

function verificaSenhas() {
    if (inputs[3].value != inputs[4].value) {
        let overwrite = document.getElementById('confirm')
        overwrite.style.display = 'initial'
        overwrite.innerHTML = "<strong> Campo Obrigatório, Senhas devem ser iguais! </strong>"
        return false
    } else {
        let overwrite = document.getElementById('confirm')
        overwrite.style.display = 'none'
        return true
    }
}

submitButton.addEventListener('click', () => {
    const cont = inputs.length

    let empty = verificaInputs();
    let senhas = verificaSenhas();

    if (!empty && senhas) {
        let register = []
        let dado = []
        for (x = 0; cont > x; x++) {
            register.push(inputs[x].value)
        }
        dado = JSON.stringify(register)
        localStorage.setItem(localStorage.length + 1, dado)
        window.location.href = "../SignIn/signin.html"
    }
})