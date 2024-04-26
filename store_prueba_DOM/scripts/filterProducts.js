/*const searchSelector = document.querySelector("#search");
searchSelector.addEventListener("keyup",captureText); */

/* function captureText() {//evento en linea onTYPE
    console.log("capturando texto");
}
*/

////////////////////////////////////////////////////////////// evento con escuchador + funcion
/* function captureText(event) {
    console.log("elemento del DOM",event.target);
    console.log("tipo de  evento",event.type);
    console.log("Tecla presionada: ", event.key);
    console.log("Código de la tecla: ", event.keyCode);
    console.log("Valor del input: ", event.target.value);
}

*/
const searchSelector = document.querySelector("#search");
searchSelector.addEventListener("keyup", (event) => captureText(event));

/* function captureText(event) {
  const searchText = event.target.value.toLowerCase(); //GUARDA EL VALOR EN UNA VARIABLE
  //FILTRADO DE TEXTO CAPTURADO
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText)
  );
  renderProducts(filteredProducts); //ACTUALIZA EL CONTENIDO DEL CONTAINER PADRE CON LOS PRODUCTOS
}

function renderProducts(products) {
  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = ""; // Borra cualquier contenido previo

  products.forEach((product) => {
    const article = document.createElement("article");
    article.classList.add("product-card");

    //CREA Y REEMPLAZA LAS CARDS //antes con el <a href="./details.html">
    article.innerHTML = `
        <a href="./details.html?id=${product.id}">
          <img class="product-img" src="${product.image}" alt="${product.name}" />
          <div class="product-info">
            <span class="product-title">${product.name}</span>
            <span class="product-description">${product.description}</span>
            <div class="product-price-block">
              <span class="price">$${product.price}</span>
              <span class="discount">${product.discount}% Off</span>
            </div>
            <div class="product-tax-policy">${product.taxPolicy}</div>
          </div>
        </a>
      `;

    productContainer.appendChild(article);
  });
}

// Definir la variable products como un array de objetos que representan productos
const products = [
  {
    id: 1,
    name: "Macbook Pro 15'4",
    description: "Space Gray",
    price: 750000,
    discount: 50,
    taxPolicy: "Incluye impuesto País y percepción AFIP",
    image: "./assets/mock2.jpg",
  },
  {
    id: 2,
    name: "Nokia",
    description: "Space Gray",
    price: 3000,
    discount: 50,
    taxPolicy: "Incluye impuesto País y percepción AFIP",
    image: "./assets/nokia.jpg",
  },
  {
    id: 3,
    name: "Camara",
    description: "Space Gray",
    price: 8000,
    discount: 80,
    taxPolicy: "NO SE PUEDE ENVIAR A TU PAIS",
    image: "./assets/camera.jpg",
  },
  {
    id: 4,
    name: "Play station",
    description: "Space Gray",
    price: 30000,
    discount: 20,
    taxPolicy: "SOLO ENVIOS A LATINO AMERICA",
    image: "./assets/play.jpg",
  },
  {
    id: 5,
    name: "Nintendo",
    description: "Space Gray",
    price: 6000,
    discount: 90,
    taxPolicy: "Solo color Negro o Blanco",
    image: "./assets/nintendo.jpg",
  },
  {
    id: 6,
    name: "Audifonos",
    description: "Space Gray",
    price: 500,
    discount: 20,
    taxPolicy: "envios por DIDI y RAPPI",
    image: "./assets/audifonos.jpg",
  },
  //SE PUEDEN AGREGAR MAS PRODUCTOS
]; */
//////////////////////////////////////////////////////FILTRADO DE TEXTO//////////////////////////////

function captureText(event) {
  const searchText = event.target.value.toLowerCase(); // Guardar el valor capturado y convertirlo a minúsculas
  const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchText)); // Filtrar los productos
  printCards(filteredProducts, "products"); // Actualizar la vista con los productos filtrados
}
