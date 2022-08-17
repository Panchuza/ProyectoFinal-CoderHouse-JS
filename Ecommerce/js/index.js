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
                  <p class="card-text">${product.description}</p>
                  <a class="btn btn-dark" onclick="addProduct(${product.id})">Agregar (+)</a>
                </div>
              </div>
              </div>`;
          
        });
    document.getElementById("products").innerHTML = content;
}

renderProducts();
showCart();