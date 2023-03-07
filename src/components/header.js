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
    link.href = "www.facebook.com";
    link.target = "_blank";
    link.innerText = linksArray[i];
    links.append(link);
  }

  //   append
  headerElem.append(headerCtr);
  headerCtr.append(logoSec);
  headerCtr.append(links);

  return headerElem;
};

export default header;
