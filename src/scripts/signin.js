// CONSTANTES DA PAGINA
const bLogin = document.getElementById("botaoLogin")
const inEmail = document.getElementById("input-email")
const inSenha = document.getElementById("input-senha")

bLogin.addEventListener("click", () => {
    let error = document.getElementsByTagName("p")[3]

    for (let i = 0; i < localStorage.length; i++) {
        dados = JSON.parse(localStorage.getItem(i + 1))
        if (dados[2] == inEmail.value && dados[3] == inSenha.value) {
            error.style.display = "none"
            window.location.href = "../Home/index.html"
        } else {
            error.style.display = "initial"
        }
    }
})
