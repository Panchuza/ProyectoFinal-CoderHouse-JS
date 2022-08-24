function renderProductView(){
    const product = getProductView();
  
    let content = "";
  
                content += `<div class="col-md-4">
                <div class="card border border-0">
                <img src="img/${product.image}" class="card-img-top" alt="imagen">
                <div class="card-body text-center">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.description}</p>
                  <p class="card-text">${product.category}</p>
                  <p class="card-text">${product.price}</p>
                </div>
              </div>
              </div>`;
  
    document.getElementById("productView").innerHTML = content;
}

function addProductToView(id){

    localStorage.removeItem("productView");
    const productView = getProductView();
  
    let ind = productView.findIndex(item => item.id === id)
  
    if(ind > -1){
        const product = getProductById(id);
        saveProductView(product);
      } 
  
    showCart();
}

function saveProductView(product){
    localStorage.setItem("productView", JSON.stringify(product));
}
  
  function getProductView(){
    return JSON.parse(localStorage.getItem("productView")) || [];
  }
  
  
  