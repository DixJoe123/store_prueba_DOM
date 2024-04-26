const productsSelector = document.getElementById("products");

//////////////////////////////////////////TEMPLATE STRING
/* let productsTemplate = `
<article class="product-card">
    <a href= "./details.html">  
        <img class="product-img" src="./assets/mock2.jpg" alt="Macbook Pro" />
        <div class="product-info">
            <span class="product-title">Macbook Pro 15'4</span>
            <span class="product-description">Space Gray</span>
            <div class="product-price-block">
                <span class="price">$750.000</span>
                <span class="discount">50% Off</span>
            </div>
            <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
        </div>
    </a>
</article>
<article class="product-card">
    <a href="./details.html">
        <img class="product-img" src="./assets/mock2.jpg" alt="Macbook Pro" />
        <div class="product-info">
            <span class="product-title">Macbook Pro 15'4</span>
            <span class="product-description">Space Gray</span>
            <div class="product-price-block">
                <span class="price">$750.000</span>
                <span class="discount">50% Off</span>
            </div>
            <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
        </div>
    </a>
</article>
<article class="product-card">
    <a href="./details.html">
        <img class="product-img" src="./assets/mock2.jpg" alt="Macbook Pro" />
        <div class="product-info">
            <span class="product-title">Macbook Pro 15'4</span>
            <span class="product-description">Space Gray</span>
            <div class="product-price-block">
                <span class="price">$750.000</span>
                <span class="discount">50% Off</span>
            </div>
            <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
        </div>
    </a>
</article>
<article class="product-card">
    <a href="./details.html">
        <img class="product-img" src="./assets/mock2.jpg" alt="Macbook Pro" />
        <div class="product-info">
            <span class="product-title">Macbook Pro 15'4</span>
            <span class="product-description">Space Gray</span>
            <div class="product-price-block">
                <span class="price">$750.000</span>
                <span class="discount">50% Off</span>
            </div>
            <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
        </div>
    </a>
</article>
<article class="product-card">
    <a href="./details.html">
        <img class="product-img" src="./assets/mock2.jpg" alt="Macbook Pro" />
        <div class="product-info">
            <span class="product-title">Macbook Pro 15'4</span>
            <span class="product-description">Space Gray</span>
            <div class="product-price-block">
                <span class="price">$750.000</span>
                <span class="discount">50% Off</span>
            </div>
            <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
        </div>
    </a>
</article>
</div>` */

/* productsSelector.innerHTML = "hola mundo" */

/* productsSelector.innerHTML = productsTemplate; */

//////////////////////////////////////////////////////////DINAMICO CON FOR OF

// Paso 2: Crear la función createCard que recibe un objeto producto como parámetro
function createCard(product) {
  // Paso 3: Crear un template string que represente una tarjeta de producto

  // a href="./details.html" de antes 
  const cardTemplate = `
        <article class="product-card">
            <a class="product-card" href="./details.html?id=${product.id}">
                <img class="product-img" src="${product.image}" alt="${product.title}" />
                <div class="product-info">
                    <span class="product-title">${product.title}</span>
                    <span class="product-description">${product.description}</span>
                    <div class="product-price-block">
                        <span class="price">${product.price}</span>
                        <span class="discount">${product.discount}</span>
                    </div>
                    <div class="product-tax-policy">${product.taxPolicy}</div>
                </div>
            </a>
        </article>
    `;
  // Paso 5: Devolver el template string creado
  return cardTemplate;
}

/* let productsTemplate = "";
for (const element of products) {
  productsTemplate = productsTemplate + createCard(element);
} */
/* productsSelector.innerHTML = productsTemplate; */
// Esta función puede ser utilizada para crear tarjetas de productos dinámicamente.


//////////////////////////////////////////////////////FUNCION DE RENDERIZADO,ENCAPSULAMIENTO


// Define una función para imprimir las tarjetas de productos
function printCards(arrayOfProducts, idSelector) {
  // Define una variable para concatenar todas las tarjetas de productos
  let productsTemplate = "";

  // Itera sobre el array de productos y agrega cada tarjeta al template
  for (const product of arrayOfProducts) {
    productsTemplate += createCard(product);
  }

  // Selecciona el elemento donde se van a imprimir las tarjetas
  const productsSelector = document.getElementById(idSelector);

  // Imprime el contenido guardado en la variable productsTemplate
  productsSelector.innerHTML = productsTemplate;
}

// Invoca la función pasando el array de productos y el id del selector
printCards(products, "products");
