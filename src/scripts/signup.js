
const submitButton = document.getElementById("handle-form")
const inputs = document.getElementsByTagName('input')

submitButton.addEventListener('click', () => {
    const cont = inputs.length
    let empty = false
    conf = true
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
    if (inputs[3].value != inputs[4].value) {
        console.log(inputs[3].value)
        let overwrite = document.getElementById('confirm')
        overwrite.style.display = 'initial'
        overwrite.innerHTML = "<strong> Campo Obrigatório, Senhas devem ser iguais! </strong>"
        conf = false
    } else {
        let overwrite = document.getElementById('confirm')
        overwrite.style.display = 'none'
    }
    if (!empty && conf) {
        let register = []
        for (x = 0; cont > x; x++) {
            register.push(inputs[x].value)
        }
        for (let i = 0; i < localStorage.length; i++) {
            dado = JSON.parse(localStorage.getItem(i))
            if (register == dado) {
                window.alert('Usuario ja cadastrado')
            }
        }
    }

})
