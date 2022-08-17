function getProductsCart(){
    return JSON.parse(localStorage.getItem("productsCart")) || [];
}
function saveProductsCart(products){
    localStorage.setItem("productsCart", JSON.stringify(products));
}
function getProductsCart(){
    return JSON.parse(localStorage.getItem("productsCart")) || [];
}
function updateCart(){
    const cartProducts = getProductsCart();

    let amount = cartProducts.length;

    let content = 
    `<a href="productsCart.html"><button type="button" class="btn btn-secondary">
    <img src="img/306793.svg" width="48"> <span class="badge text-bg-secondary">${amount}</span>
    </button></a>`;

    document.getElementById("cart").innerHTML = content;
}
function renderCartProducts(){
    const products = getProductsCart(); 

    /* `
    
        <tr>
            <td class="text-end" colspan="6"><a href="#" class="btn btn-dark" onclick="emptyCart();">Delete Cart</a></td>
        </tr>` */
    let content =  `<table class="table">`; 

    for (const product of products) {
        content += 
        `
        <tr>
        <td class="text-start"><img src="images/${product.image}" alt="${product.name}" width="32"> </td>
        <td>${product.name}</td>
        <td>$${product.price}</td>
        <td><a href="#" class="btn btn-dark" onclick="deleteItem(${product.id});">-</a>${product.amount}<a href="#" class="btn btn-dark" onclick="addItem(${product.id});">+</a></td>
        <td>$${product.price * product.amount}</td>
        <td class="text-end"><a href="#" class="btn btn-dark" onclick="deleteProductFromCart(${product.id});"><img src="images/trash.png" alt="Delete" width="32"></a></td>
        </tr>`;
    }

    content += `
    <tr>
        <td colspan="4">Final price</td>
        <td><b>$${finalPrice()} </b></td>
    </tr>
    </table>`;

    document.getElementById("productsCart").innerHTML = content;
}

function deleteItem(id){
    const cartProducts = getProductsCart();
    let pos = cartProducts.findIndex(item => item.id === id);

    if (cartProducts[pos].amount>1){
        cartProducts[pos].amount -= 1;
        saveProductsCart(cartProducts);
        renderCartProducts()
        updateCart();
    }

}

function addItem(id){
    const cartProducts = getProductsCart();
    let pos = cartProducts.findIndex(item => item.id === id);

    cartProducts[pos].amount += 1;
    saveProductsCart(cartProducts);
    renderCartProducts()
    updateCart();
}

function finalPrice(){
    const cartProducts = getProductsCart();

    return cartProducts.reduce((acumulador, item) => acumulador + (item.amount * item.price), 0);
}

/* function emptyCart(){
    localStorage.removeItem("productCart");
    renderCartProducts()
    updateCart();
} */


renderCartProducts();


function deleteProductFromCart(id){
    const cartProducts = getProductsCart();
    let pos = cartProducts.findIndex(item => item.id === id);

    cartProducts.splice(pos, 1);

    saveProductsCart(cartProducts);
    renderCartProducts();
    updateCart();    
}

function addProductToCart(id){
    const cartProducts = getProductsCart();
    let pos = cartProducts.findIndex(item => item.id === id);
    if (pos > -1){
        cartProducts[pos].amount += 1;
    } else{
        const product = findProduct(id);
        product.amount = 1;
        cartProducts.push(product);

    }


    addCartProductsLS(cartProducts);
    updateCart();
}
