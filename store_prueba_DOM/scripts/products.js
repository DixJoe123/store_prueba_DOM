// Paso 2: Modificar products.js

// Definir la clase Product
class Product {
    constructor(id/* ,miniatura */,image,title,colors,description, price, discount,taxPolicy) {
        this.id= id;
        //this.miniatura = miniatura;
        this.image= image;
        this.title = title;
        this.colors = colors;
        this.description = description;
        this.price = price;
        this.discount = discount;
        this.taxPolicy = taxPolicy;
    }
}

// Crear seis instancias de Product
const product1 = new Product("112312","./assets/mock2.jpg","Macbook Pro 15'4", "Space Gray", "$750.000", "50% Off");
const product2 = new Product("paweqw","./assets/camera.jpg","Camara",['rojo','blanco','negro','amarillo','gris espacial']," Camara led de 15'6 para que puedas tomar las fotos que quieras", "$250.000", "50% Off","Incluye impuesto País y percepción AFIP");
const product3 = new Product("olololo","./assets/nintendo.jpg","Nintendo", "Space Gray", "$750.000", "50% Off","Incluye impuesto País y percepción AFIP");
const product4 = new Product('undifine',"","", "", "", "");
const product5 = new Product("lalalala","./assets/audifonos.jpg","Audifonos", "Space Gray", "$750.000", "50% Off");
const product6 = new Product("xxxxxx","./assets/nokia.jpg","Nokia", "Space Gray", "$750.000", "50% Off");

// Crear el array products con las instancias de Product
const products = [product1, product2, product3, product4, product5, product6];
