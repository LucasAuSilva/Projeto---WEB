// **** PRODUCTS - JAVASCRIPT **** //

const logado = localStorage.getItem('logado')
const addButton = document.getElementsByClassName('add')
const category = document.getElementsByClassName('option-block')
const cont = document.querySelector("#contagem")


for (let x = 0; x < category.length; x++) {
  category[x].addEventListener("click", () => {
    products = categoryOpen(x)
  })
}

for (let i = 0; i < addButton.length; i++) {
  products = categoryOpen(4)
  addButton[i].addEventListener("click", () => {
    if (logado != null && logado[0]) {
      console.log(products)
      contCart()
      insideCart(products[i])
      totalPrice(products[i])
    } else {
      window.alert("VOCE PRECISA ESTAR LOGADO")
      window.location.href = "../SignIn/index.html"
    }
  })
}

displayCart()
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
  let totalPrice = parseInt(localStorage.getItem('total'))

  if (totalPrice) {
    localStorage.setItem('total', parseFloat(totalPrice) + product.price)
  } else {
    localStorage.setItem('total', product.price)
  }
}

function categoryOpen(position) {
  if (position == 0) {
    let products = [{
        name: "Apple Watch",
        tag: "apple-watch-sell.jpeg",
        price: 4059.00,
        qtd: 0
      },
      {
        name: "Thunder Black",
        tag: "thunder-black.jpg",
        price: 1899.90,
        qtd: 0
      },
      {
        name: "Curren M2",
        tag: "black-curren-m2.jpg",
        price: 710.09,
        qtd: 0
      },
      {
      name: "Apple Watch",
      tag: "apple-watch-sell.jpeg",
      price: 4059.00,
      qtd: 0
      }, 
      {
      name: "Samsung SmartWatch",
      tag: "samsumg-watch.jpg",
      price: 899.00,
      qtd: 0
      }, 
      {
      name: "Samsumg SmartWatch",
      tag: "miband.jpg",
      price: 300.00,
      qtd: 0
      }]
      return products
  } else if (position == 1) {
    let products = [{
      name: "Apple Watch",
      tag: "apple-watch-sell.jpeg",
      price: 4059.00,
      qtd: 0
      },
      {
      name: "Thunder Black",
      tag: "thunder-black.jpg",
      price: 1899.90,
      qtd: 0
      },
      {
      name: "Curren M2",
      tag: "black-curren-m2.jpg",
      price: 710.09,
      qtd: 0
      }, 
      {
      name: "Geneva Romans",
      tag: "geneva-watch.jpg",
      price: 2339.00,
      qtd: 0
      }, 
      {
      name: "Thunder Black",
      tag: "thunder-black.jpg",
      price: 1899.00,
      qtd: 0
      }, 
      {
      name: "Curren Olt Town",
      tag: "curren-old-town.jpg",
      price: 3720.00,
      qtd: 0
    }]
    return products
  } else if (position == 2) {
    let products = [{
      name: "Apple Watch",
      tag: "apple-watch-sell.jpeg",
      price: 4059.00,
      qtd: 0
      },
      {
      name: "Thunder Black",
      tag: "thunder-black.jpg",
      price: 1899.90,
      qtd: 0
      },
      {
      name: "Curren M2",
      tag: "black-curren-m2.jpg",
      price: 710.09,
      qtd: 0
      }, 
      {
      name: "X-Games Master Boy",
      tag: "digital-1.jpg",
      price: 349.00,
      qtd: 0
      }, 
      {
      name: "Skmei Sport",
      tag: "digital-2.jpg",
      price: 189.00,
      qtd: 0
    }]
    return products
  } else {
    let products = [{
      name: "Apple Watch",
      tag: "apple-watch-sell.jpeg",
      price: 4059.00,
      qtd: 0
    },
    {
      name: "Thunder Black",
      tag: "thunder-black.jpg",
      price: 1899.90,
      qtd: 0
    },
    {
      name: "Curren M2",
      tag: "black-curren-m2.jpg",
      price: 710.09,
      qtd: 0
    }]
    return products
  }
}


// **** CART  - JAVASCRIPT **** //

function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart'))
  let totalPrice = JSON.parse(localStorage.getItem('total'))
  let productContainer = document.querySelector(".products")

  if (cart && productContainer) {
    productContainer.innerHTML = " ";
    Object.values(cart).map(item => {
      productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle" class=".remove-button"></ion-icon>
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

function rmvQtd(tag) {
  let cart = JSON.parse(localStorage.getItem('cart'))

  console.log(tag)
}