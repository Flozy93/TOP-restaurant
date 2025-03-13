export function loadMainPage() {
  const container = document.querySelector(".content");
  const header = document.querySelector(".header");
  const nav = document.querySelector(".nav");

  const title = document.createElement("h1");
  title.classList.add("header-title");
  title.textContent = "Lorem Ipsum Burgers";

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const button1 = document.createElement("button");
  button1.textContent = "Home";

  const button2 = document.createElement("button");
  button2.textContent = "Menu";

  const button3 = document.createElement("button");
  button3.textContent = "About us";

  const content = document.createElement("div");
  content.classList.add("text-container");

  const text = document.createElement("p");
  text.textContent = "BRB!";

  const text2 = document.createElement("p");
  text2.textContent = "Website in construction";

  container.appendChild(content);
  content.appendChild(text);
  content.appendChild(text2);
  nav.appendChild(title);
  header.appendChild(buttonContainer);
  buttonContainer.appendChild(button1);
  buttonContainer.appendChild(button2);
  buttonContainer.appendChild(button3);
}
