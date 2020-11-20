// CONSTANTES DA PAGINA
const bLogin = document.getElementById("botaoLogin")
const inEmail = document.getElementById("input-email")
const inSenha = document.getElementById("input-senha")

bLogin.addEventListener("click", () => {
    let error = document.getElementsByTagName("p")[3]
    dados = JSON.parse(localStorage.getItem("register"))

    for (let i = 0; i < dados.length; i++) {
        if (dados[i][2] == inEmail.value && dados[i][3] == inSenha.value) {
            error.style.display = "none"
            window.location.href = "../Home/index.html"
            return false;
        } else {
            error.style.display = "initial"
        }
    }
})
