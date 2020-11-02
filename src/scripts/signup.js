
const submitButton = document.getElementById("handle-form")

submitButton.addEventListener('click', () => {
    const inputs = [
        'first-name-error',
        'last-name-error',
        'email-error',
        'password-error',
        'password-confirm-error'
    ]
    let cont = inputs.length
    for (var x = 0; cont > x; x++) {
        let input = document.getElementsByClassName(inputs[x]).value
        if (input == null) {
            let p = document.getElementsByClassName(inputs[x])
            p.innerHTML('fodase')
        }
    }
})
