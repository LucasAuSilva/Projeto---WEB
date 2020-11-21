// **** PRODUCTS - JAVASCRIPT **** //

const addButton = document.querySelectorAll(".add")
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

console.log(products)

for (let i = 0; i < addButton.length; i++) {
    addButton[i].addEventListener("click", () => {
        insideCart(products[i])
    })
}

function insideCart(product) {
    let cart = JSON.parse(localStorage.getItem("Cart"))
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


    localStorage.setItem("Cart", JSON.stringify(cartItens))
}


// **** CART  - JAVASCRIPT **** //