import "./home.css";

const home = () => {
  let homeContainer = document.createElement("div");
  homeContainer.classList.add("active");
  let text = document.createElement("div");
  text.classList.add("home-text");
  homeContainer.classList.add("home");
  homeContainer.id = "home-ctr";
  text.innerText = "homeContainer";

  homeContainer.append(text);

  return homeContainer;
};

export default home;
