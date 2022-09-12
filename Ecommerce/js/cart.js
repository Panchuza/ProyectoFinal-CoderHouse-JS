function renderProductsCart(){
    const products = getProductsCart();
    let content = "";

    if(products.length == 0){
       
        content = ``

    } else {
        
        content += `<table class="table">
                    <tr>
                        <td class="text-end" colspan="6"><a class="btn btn-dark" onclick="showSweetAlertDeleteCart();">Delete Cart</a></td>
                    </tr>`
            products.forEach((product) => {

                    content += `<table class="table">
                    
                    <tr>
                        <td class="text-start"><img src="img/${product.image}" alt="${product.name}" width="248"> </td>
                        <td><strong>${product.name}</strong></td>
                        <td><strong>$${product.price}</strong></td>
                        <td><a href="#" class="btn btn-dark" onclick="deleteItem(${product.id});">-</a><strong>${product.amount}</strong><a href="#" class="btn btn-dark" onclick="addItem(${product.id});">+</a></td>
                        <td><strong>$${product.price * product.amount}</strong></td>
                        <td class="text-end"><a href="#" class="btn btn-dark" onclick="deleteProductFromCart(${product.id});"><img src="img/depositphotos_5487922-stock-illustration-trash-can.jpg" alt="Delete" width="32"></a></td>
                    </tr>`                    
            });
            content += `
            <tr>
                <td colspan="4"><strong>Final price</strong></td>
                <td><b><strong>$${finalPrice()}</strong></b></td> 
                <td><button class="btn btn-secondary" onclick="buyCart();">Buy Items</button></td>
            </tr>
            </table>`;

        document.getElementById("productsCart").innerHTML = content;
    }
}

renderProductsCart();
showCart();

function buyCart(){
    const productsCart = getProductsCart();
    let productsAvalaibles = getProductsLS();
    let soldProducts = getSoldProducts();
    let pos;

    for (const product of productsCart) {
        soldProducts.push(product);

        let id = product.id;
        pos = productsAvalaibles.findIndex(item => item.id === id);
        productsAvalaibles.splice(pos, 1);
    }
    saveSoldProducts(soldProducts);
    if(productsCart.length != 0){
        Swal.fire({
            title: '¡Congrats!',
            text: "Thanks for buying in E-Movables!",
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Go back'
          }).then((result) => {
            if (result.isConfirmed) {
              refreshCart();
              emptyCart();
              window.location.href = "index.html";
            }
          })
    }
}

function refreshCart(){
    let content = "";
    content += `<a href="productsCart.html"></a>`
}
function deleteItem(id){
    const cartProducts = getProductsCart();
    let pos = cartProducts.findIndex(item => item.id === id);

    if (cartProducts[pos].amount>1){
        cartProducts[pos].amount -= 1;
        saveProductsCart(cartProducts);
        renderProductsCart()
        updateCart();
    }

}
function addItem(id){
    const cartProducts = getProductsCart();
    let pos = cartProducts.findIndex(item => item.id === id);
    let product = getProductById(id);

    
    if(cartProducts[pos].amount < product.stock){
        cartProducts[pos].amount += 1;
        showCart();
        saveProductsCart(cartProducts);
        renderProductsCart()
        updateCart();
    } else {
        showAlertStock();
    }
    
}

function deleteProductFromCart(id){
    
    const cartProducts = getProductsCart();
    let pos = cartProducts.findIndex(item => item.id === id);
    
    cartProducts.splice(pos, 1);

    saveProductsCart(cartProducts);
    renderProductsCart();
    updateCart();
    showToastItemDeleted();
       
}

function updateCart(){
    const cartProducts = getProductsCart();

    let amount = cartProducts.length;
     

    let content = 
    `<a href="productsCart.html"><button type="button" class="btn btn-secondary">
    <img src="img/306793.svg" width="48"> <span class="badge text-bg-secondary">${amount}</span>
    </button></a>`;

    document.getElementById("ecommerce").innerHTML = content;
}

function finalPrice(){
    const cartProducts = getProductsCart();

    return cartProducts.reduce((acumulador, item) => acumulador + (item.amount * item.price), 0);
}

function emptyCart(){
    localStorage.removeItem("productsCart");
    renderProductsCart()
    updateCart();
    let content = "";
    document.getElementById("cartEmpty").innerHTML = content;

} 

function showAlertStock(){
    
    Toastify({
        text: "Stock is empty",
        icon: 'warning',
        duration: 1000,
        destination: "https://github.com/apvarun/toastify-js",
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();

}

function showSweetAlertDeleteCart(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You are deleted the whole cart",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          refreshCart();
          emptyCart();
          window.location.href = "productsCart.html";
        }
      })
}

function showToastItemDeleted(){
    Toastify({
        duration: 1500,
        newWindow: true,
        close: true,
        position: "right",
        gravity: "bottom",
        stopOnFocus: true, 
        text: "Item Deleted",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
}

const productsCart = getProductsCart();
(productsCart.length == 0 ? showMessageEmpty() : showCart());