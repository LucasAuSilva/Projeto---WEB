// **** PRODUCTS - JAVASCRIPT **** //

const addButton = document.querySelectorAll(".add")
const cont = document.querySelector("#contagem")
const products = [{
        name: "BLA",
        tag: "blazinho",
        price: 100,
        qtd: 0
    },
    {
        name: "VRAU",
        tag: "vrauzinho",
        price: 50,
        qtd: 0
    },
    {
        name: "VRII",
        tag: "vriizinho",
        price: 20,
        qtd: 0
    },
    {
        name: "VRUUMMM",
        tag: "vrummzinho",
        price: 500,
        qtd: 0
    }
]

for (let i = 0; i < addButton.length; i++) {
    addButton[i].addEventListener("click", () => {
        contCart()
        insideCart(products[i])
        totalPrice()
    })
}

loadCartCount()

function contCart() {
    let contItens = parseInt(localStorage.getItem('contCart'))

    if (contItens) {
        localStorage.setItem('contCart', contItens + 1)
        cont.innerHTML = contItens + 1
    } else {
        cont.style.display = "initial"
        localStorage.setItem('contCart', 1)
        cont.innerHTML = 1
    }
}

function loadCartCount() {
    let contItens = localStorage.getItem('contCart')

    if (contCart) {
        cont.innerHTML = contItens
        cont.style.display = "initial"
    }
}

function insideCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"))
    let cartItens = cart

    if (cartItens == null) {
        product.qtd = 1
        cartItens = {
            [product.tag]: product
        }
    } else if (cartItens[product.tag] == undefined) {
        product.qtd = 1
        cartItens = {
            ...cartItens,
            [product.tag]: product
        }
    } else {
        cartItens[product.tag].qtd += 1;
    }

    localStorage.setItem("cart", JSON.stringify(cartItens))
}


// **** CART  - JAVASCRIPT **** //