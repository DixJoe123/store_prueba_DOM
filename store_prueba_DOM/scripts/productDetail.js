/////////////////////////////////CAPTURA DE ID PRODUCT
const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");
console.log('el id del producto es: '+id);
///////////////////////////////////////////RENDERIZADO
//const availableColors = [product.colors];
//const colorOptions = availableColors.map(color => `<option value="${color}">${color}</option>`).join("");//insercion a medias 
//de los colores


function printDetails(id) {/* Macbook */
  const product = products.find((each) => each.id === id);/*${} USAR ESTO*/

    //opciones de color para los productos
  const colorOptions = product.colors.map(color => `<option value="${color}">${color}</option>`).join("");
    //miniaturas  de los productos si estan disponibles
/*   let miniaturaOption = '';
  if (product.miniaturas && product.miniaturas.length > 0) {
    miniaturaOption = product.miniaturas.map(miniatura => `<option value="${miniatura}">${miniatura}</option>`).join("");
  } */


  const detailsTemplate = `<div class="columns-container">
                <div class="product-images-block">
                    <div class="thumbnail-container"><img src="./assets/mock1.jpg" alt="Macbook img1"></div>
                    <div class="thumbnail-container"><img src="./assets/mock2.jpg" alt="Macbook img2"></div>
                    <img class="main-image" src="${product.image}" alt="Macbook img1">
                </div>
                <div class="product-description-block">
                    <h1 class="titulo">${product.title}</h1>
                    <form class="selector">
                        <fieldset>
                            <label class="label" for="color">Color</label>
                            <select type="text" placeholder="Selecciona un color">
                            ${colorOptions}
                            </select>
                        </fieldset>
                    </form>
                    <div class="description">
                        <h1>Descripcion:</h1>
                        <p>
                            CPU de 8 núcleos con 4 núcleos de rendimiento y 4 de eficiencia
                            GPU de 10 núcleos
                            Trazado de rayos acelerado por hardware
                            Neural Engine de 16 núcleos
                            100 GB/s de ancho de banda de memoria
                        </p>
                    </div>
                </div>
                <div class="product-checkout-block">
                    <div class="checkout-container">
                        <span class="checkout-total-label">Total:</span>
                        <h2 class="checkout-total-price">${product.price}</h2>
                        <p class="checkout-description">
                            ${product.description}
                        </p>
                        <ul class="checkout-policy-list">
                            <li>
                                <span class="policy-icon"><img src="./assets/truck.png" alt="Truck" /></span>
                                <span class="policy-desc">Agrega el producto al carrito para conocer los costos de
                                    envío</span>
                            </li>
                            <li>
                                <span class="policy-icon"><img src="./assets/plane.png" alt="Plane" /></span>
                                <span class="policy-desc">Recibí aproximadamente entre 10 y 15 días hábiles,
                                    seleccionando
                                    envío normal</span>
                            </li>
                        </ul>
                        <div class="checkout-process">
                            <div class="top">
                                <input type="number" value="1" />
                                <button class="btn-primary">Comprar</button>
                            </div>
                            <div class="bottom">
                                <button class="btn-outline">Añadir al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
  const detailsSelector = document.querySelector("#details");
  detailsSelector.innerHTML = detailsTemplate;
}
printDetails(id); 

