// **** PRODUCTS - JAVASCRIPT **** //

const addButton = document.querySelectorAll(".add")
const cont = document.querySelector("#contagem")
const products = [{
        name: "Apple Watch",
        tag: "apple-watch-sell.jpeg",
        price: 4.059,
        qtd: 0
    },
    {
        name: "Thunder Black",
        tag: "thunder-black.jpg",
        price: 1899.090,
        qtd: 0
    },
    {
        name: "Curren M2",
        tag: "black-curren-m2.jpg",
        price: 710.090,
        qtd: 0
    },
    {
        name: "VRUUMMM",
        tag: " ",
        price: 500,
        qtd: 0
    }
]

for (let i = 0; i < addButton.length; i++) {
    addButton[i].addEventListener("click", () => {
        contCart()
        insideCart(products[i])
    })
}

displayCart(totalPrice(products))
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

function totalPrice(product) {
    let cart = JSON.parse(localStorage.getItem("cart"))
    let total = 0

    if (cart) {
        Object.values(cart).map(item => {
            total += item.price
        })
    }

    return total
}


// **** CART  - JAVASCRIPT **** //

function displayCart(totalPrice) {
    let cart = JSON.parse(localStorage.getItem('cart'))
    let productContainer = document.querySelector(".products")

    if (cart && productContainer) {
        productContainer.innerHTML = " ";
        Object.values(cart).map(item => {
            const price = item.price
            price
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="../../images/${item.tag}">
                <span>${item.name}</span>
            </div>
            <div class="price">R$ ${item.price} </div>
            <div class="quantity">
                <span>${item.qtd}</span>
            </div>
            <div class="total">
                R$ ${item.qtd * item.price}
            </div>
            `
        })

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Preço Total
                </h4>
                <h4 class="basketTotal">
                    R$ ${totalPrice}
                </h4>
            </div>
        `
    }
}