function renderProductsCart(){
    const products = getProductsCart();
    let content = "";

    if(products.length == 0){
       
        content = ``

    } else {
        
        content += `<table class="table">
                    <tr>
                        <td class="text-end" colspan="6"><a href="productsCart.html" class="btn btn-dark" onclick="emptyCart();">Delete Cart</a></td>
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
                <td colspan="4">Final price</td>
                <td><b><strong>$${finalPrice()}</strong></b></td> 
            </tr>
            </table>`;

        document.getElementById("productsCart").innerHTML = content;
    }
}

renderProductsCart();
showCart();

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

    cartProducts[pos].amount += 1;
    saveProductsCart(cartProducts);
    renderProductsCart()
    updateCart();
}

function deleteProductFromCart(id){
    const cartProducts = getProductsCart();
    let pos = cartProducts.findIndex(item => item.id === id);

    cartProducts.splice(pos, 1);

    saveProductsCart(cartProducts);
    renderProductsCart();
    updateCart();    
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
} 
