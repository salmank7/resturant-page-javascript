import "./gridItem.css";

const gridItem = (title, description, src, price) => {
  let singleItem = document.createElement("div");
  singleItem.classList.add("singleItem");
  // container for name, price and details.
  let textContainer = document.createElement("div");
  textContainer.classList.add("text-container");
  let itemTitle = document.createElement("h2");
  itemTitle.innerText = title;
  itemTitle.classList.add("item-title");
  let itemPrice = document.createElement("p");
  itemPrice.innerText = price;
  itemPrice.classList.add("price");
  let itemDesc = document.createElement("p");
  itemDesc.classList.add("item-desc");
  itemDesc.innerText = description;
  let itemImage = document.createElement("img");
  itemImage.classList.add("item-image");
  itemImage.src = src;

  // appending in textcontainer
  textContainer.append(itemTitle, itemPrice, itemDesc);
  singleItem.append(textContainer, itemImage);
  return singleItem;
};

export default gridItem;
