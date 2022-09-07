function renderProducts(){
    const products = getProductsLS();
    let filter = document.getElementById("filters");
    filter.innerHTML = "";
    let item = document.createElement("option");

    item.onclick = () => {
      renderProducts();
    };

    item.innerHTML = "All Products"
    filter.appendChild(item);
    let content = "";
    let categories = [];

        products.forEach((product) => {
          
          if(!categories.includes(product.category)){
            let option = document.createElement("option");
            categories.push(product.category);
            option.onclick = () => {
              filterProducts(product.category)
            }; 
            option.onchange = () => {
              filterProducts(product.category)
            };
            option.value = product.category;
            option.innerHTML = product.category;
            filter.appendChild(option);
          }
                content += `<div class="col-md-4">
                <div class="card border border-0">
                <img src="img/${product.image}" class="card-img-top" alt="imagen">
                <div class="card-body text-center">
                  <h5 class="card-title">${product.name}</h5>
                  <a class="btn btn-dark" onclick="addProduct(${product.id})">Add (+)</a>
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-dark" onclick="addProductToView(${product.id})">See Product</a>
                </div>
              </div>
              </div>`;
          
        });
    document.getElementById("products").innerHTML = content;
}

renderProducts();
showCart();


function saveProductView(product){
  localStorage.setItem("productView", JSON.stringify(product));
}

function getProductView(){
  return JSON.parse(localStorage.getItem("productView")) || [];
}

function addProductToView(id){

  const productView = getProductById(id);
  let modalView = document.getElementById("modalView")

  document.getElementById("idToShow").innerHTML = `<h5 class="modal-title">${productView.name}</h5>`

 let content = `<img src="img/${productView.image}" class="card-img-top" alt="imagen">
                <p class="card-text">$${productView.price}</p>
                <p class="card-text">${productView.description}</p>`

  document.getElementById("bodyModal").innerHTML = content;

  modalView.style.display = "block";
  
  /* span.onclick = function() {
    modalView.style.display = "none";
  } */

  window.onclick = function(event){
    if (event.target == modalView){
      modalView.style.display = "none";
    }
  }
} 

