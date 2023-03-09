import header from "./components/header";
import "./app.css";
import menu from "./components/menu";
import home from "./components/home";
import contact from "./components/contact";

let content = document.getElementById("content");
content.classList.add("content");
export default function App() {
  content.append(header());
  content.append(menu());
  content.append(home());
  content.append(contact());
}
