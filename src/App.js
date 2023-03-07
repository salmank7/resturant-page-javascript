import header from "./components/header";
let content = document.getElementById("content");
export default function App() {
  content.append(header());
}
