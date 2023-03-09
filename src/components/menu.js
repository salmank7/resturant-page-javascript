import background from "../assets/bg.jpg";
import gridItem from "./gridItem";
import { recipes } from "./constants";
import "./menu.css";

const menu = () => {
  const container = document.createElement("div");
  // container.classList.add("active");
  container.id = "menu-ctr";
  const gridCtr = document.createElement("div");
  gridCtr.classList.add("gridCtr");
  gridCtr.classList.add("template");

  container.classList.add("ctr");
  const title = document.createElement("h1");
  title.innerText = "Menu";
  title.classList.add("title");
  const grid = document.createElement("grid");
  grid.classList.add("mainGrid");
  recipes.map((item, index) => {
    grid.append(gridItem(item.name, item.description, item.image, item.price));
  });

  gridCtr.append(title);
  gridCtr.append(grid);
  container.append(gridCtr);

  return container;
};

export default menu;
