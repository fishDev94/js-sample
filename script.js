import { loggerFunction } from "./util.js";

loggerFunction("Hello world!");

const productContainer = document.querySelector(".product-container");
const searchBar = document.querySelector(".search-bar");
let searchValue = "";

searchBar.addEventListener("input", (e) => {
  searchValue = e.target.value.toLowerCase();
  getData();
});

const getData = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      productContainer.innerHTML = "";

      data
        .filter((product) => product.title.toLowerCase().includes(searchValue))
        .forEach((product) => {
          renderCard(product.image, product.title, productContainer);
        });
    });
};

getData();

const renderCard = (image, title, parentNode) => {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const p = document.createElement("p");
  card.className = "card";
  img.className = "card-img";
  p.className = "card-description";
  img.src = image;
  p.textContent = title;

  card.append(img, p);
  parentNode.appendChild(card);
};

