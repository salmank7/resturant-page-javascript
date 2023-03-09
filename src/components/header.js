import "./header.css";
import menu from "./menu";
import home from "./home";

const header = () => {
  let headerElem = document.createElement("div");
  headerElem.classList.add("header");
  let headerCtr = document.createElement("div");
  headerCtr.classList.add("template");
  let logoSec = document.createElement("h1");
  logoSec.classList.add("header__logo");
  logoSec.innerText = "KDF";
  let links = document.createElement("div");
  links.classList.add("links");
  let linksArray = ["Home", "Menu", "Contact"];
  for (let i = 0; i < linksArray.length; i++) {
    let link = document.createElement("a");
    link.classList.add("link");
    link.id = linksArray[i].toLocaleLowerCase();
    link.target = "_blank";

    link.innerText = linksArray[i];
    links.append(link);
  }
  //   append
  headerElem.append(headerCtr);
  headerCtr.append(logoSec);
  headerCtr.append(links);
  const linkButtons = links.childNodes;
  linkButtons[0].classList.add("active");
  linkButtons[0].addEventListener("click", () => {
    linkButtons[0].classList.add("active");
    linkButtons[1].classList.remove("active");
    linkButtons[2].classList.remove("active");
    home().classList.add("active");
    document.getElementById("home-ctr").classList.add("active");
    document.getElementById("menu-ctr").classList.remove("active");
    document.getElementById("contact-ctr").classList.remove("active");
  });
  linkButtons[1].addEventListener("click", () => {
    linkButtons[0].classList.remove("active");
    linkButtons[1].classList.add("active");
    linkButtons[2].classList.remove("active");
    document.getElementById("home-ctr").classList.remove("active");
    document.getElementById("menu-ctr").classList.add("active");
    document.getElementById("contact-ctr").classList.remove("active");
  });
  linkButtons[2].addEventListener("click", () => {
    linkButtons[0].classList.remove("active");
    linkButtons[1].classList.remove("active");
    linkButtons[2].classList.add("active");
    document.getElementById("home-ctr").classList.remove("active");
    document.getElementById("menu-ctr").classList.remove("active");
    document.getElementById("contact-ctr").classList.add("active");
  });
  return headerElem;
};

export default header;
