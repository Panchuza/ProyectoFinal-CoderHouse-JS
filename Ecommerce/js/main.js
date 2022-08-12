const products = [
    {id:1, name:"Escritorio Simple 100", price:18000, image:"tisera-escritorio-simple-100-2.jpg", category:"Escritorios", description:"Escritorio simple 1.00 x 0.60 x 0.75, dos cajones con cerradura y correderas metalicas."},
    {id:2, name:"Escritorio Simple 120", price:19000, image:"tisera-escritorio-simple-120-2.jpg", category:"Escritorios", description:"Escritorio simple 1.20 x0.60 x 0.75, dos cajones con cerradura y correderas metalicas."},
    {id:3, name:"Escritorio Para PC 120", price:22000, image:"tisera-escritorio-para-pc-120-2.jpg", category:"Escritorios", description:"Escritorio 1.20 x 0.60 x 0.75 preparado para PC con bandeja para teclado y porta CPU."},
    {id:4, name:"Archivo Laminado 2 Cajones", price:20000, image:"tisera-archivo-laminado-2-cajones-2.jpg", category:"Archivos", description:"Archivo laminado de 2 cajones para carpetas colgantes, colores combinados a eleccion, con cerradura. Medidas 72x50x52Cm"},
    {id:5, name:"Archivo Laminado 3 Cajones", price:28000, image:"tisera-archivo-laminado-3-cajones-2.jpg", category:"Archivos", description:"Archivo laminado de 3 cajones para carpetas colgantes, colores combinados a eleccion, con cerradura. Medidas 100x50x52Cm"},
    {id:6, name:"Archivo Laminado 4 Cajones", price:33000, image:"tisera-archivo-laminado-4-cajones-2.jpg", category:"Archivos", description:"Archivo laminado de 4 cajones para carpetas colgantes, colores combinados a eleccion, con cerradura. Medidas 133x50x52Cm."},
    {id:7, name:"Mesa Ratona Redonda", price:9000, image:"tisera-mesa-ratona-redonda-2.jpg", category:"Mesas", description:"Mesa ratona auxiliar redonda, fabricada en melamina de 25mm con terminaciones en ABS de 2.5mm. Medidas 60cm de diametro x 45cm de alto."},
    {id:8, name:"Mesa Ratona Recta", price:9000, image:"tisera-mesa-ratona-recta-2.jpg", category:"Mesas", description:"Mesa ratona auxiliar recta, fabricada en melamina de 25mm con terminaciones en ABS de 2.5mm. Medidas 60x45cm x 45cm de alto."},
    {id:9, name:"Mesa PC Chica", price:11000, image:"tisera-mesa-pc-chica-2.jpg", category:"Mesas", description:"Mesa Para PC 70 cm de ancho x 45 cm de profundidad. Revestimientos combinados con bandeja porta-teclados"}
]

function saveProductsLS(products){
    localStorage.setItem("products", JSON.stringify(products));
}

function getProductsLS(){
    return JSON.parse(localStorage.getItem("products")) || [];
}

function saveProductsCart(products){
    localStorage.setItem("productsCart", JSON.stringify(products));
}

function getProductsCart(){
    return JSON.parse(localStorage.getItem("productsCart")) || [];
}

function getProductById(id){
    
    const products = getProductsLS();
    return products.find(item => item.id === id);
}

function addProduct(id){
    const productsCart = getProductsCart();
    const product = getProductById(id);
    productsCart.push(product);
    saveProductsCart(productsCart);
    showCart();
}

function showCart(){

const addProductsCart = getProductsCart();
let quantity = addProductsCart.length;
let content = `<button type="button" class="btn btn-secondary">
<img src="img/306793.svg" width="48"> <span class="badge text-bg-secondary">${quantity}</span>
</button>`
document.getElementById("ecommerce").innerHTML = content;
}

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

function filterProducts(category){
  const products = getProductsLS();
    let content = "";

        products.forEach((product) => {
          if(product.category == category){
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
          }
        });
    document.getElementById("products").innerHTML = content;
}

saveProductsLS(products);
renderProducts();
showCart();
