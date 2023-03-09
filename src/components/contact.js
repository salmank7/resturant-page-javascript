import "./contact.css";

const contact = () => {
  let contactContainer = document.createElement("div");
  let text = document.createElement("div");
  text.classList.add("contact-text");
  contactContainer.classList.add("contact");
  contactContainer.id = "contact-ctr";
  text.innerText = "CONTACT";

  contactContainer.append(text);

  return contactContainer;
};

export default contact;
