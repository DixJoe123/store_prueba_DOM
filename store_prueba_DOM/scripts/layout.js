const navSelector = document.getElementById("nav");

const options = [
  { title: "Ofertas de la semana", linkTo: "./outlet.html" },
  { title: "Cómo", linkTo: "./how.html" },
  { title: "Impuestos", linkTo: "./taxs.html" },
  { title: "Envios", linkTo: "./orders.html" },
  { title: "Garantia", linkTo: "./warranty.html" },
];

for (let option of options) {
  const anchor = document.createElement("a");
  anchor.localName = "nav-button";
  anchor.textContent = option.title;
  anchor.href = option.linkTo;
  anchor.style.display = "flex-inline";
  anchor.style.textDecoration = "none";
  anchor.style.color = "black";
  anchor.style.margin = "50px";
  anchor.style.backgroundColor = "yellow";
  anchor.style.fontSize = "40px";

  navSelector.appendChild(anchor);
}

const footerSelector = document.querySelector("#footer");

const opciones = [
  {
    title: "Productos",
    linkTo: "#productos",
    opts: ["Laptops", "Audio", "Audífonos"],
  },
  {
    title: "Servicios",
    linkTo: "#servicios",
    opts: ["Formas de pago", "yape", "al contado"],
  },
  {
    title: "Informacion",
    linkTo: "#informacion",
    opts: ["Impuestos", "comicion"],
  },
  { title: "Redes sociales", linkTo: "#Redes", opts: ["Facebook", "WSP"] },
  { title: "Otros", linkTo: "#otros-productos", opts: [] },
];

for (const footer of opciones) {
  const column = document.createElement("div");
  column.classList.add("footer-column");

  const title = document.createElement("h3");
  const titleLink = document.createElement("a");
  titleLink.textContent = footer.title;
  titleLink.href = footer.linkTo;
  column.style.backgroundColor= "white"
  /* column.style.margin= "0" */
  title.appendChild(titleLink);
  column.appendChild(title);

  for (const opt of footer.opts) {
    const item = document.createElement("p");
    item.textContent = opt;
    column.appendChild(item);
  }

  footerSelector.appendChild(column);
}
