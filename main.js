const app = document.getElementById("root");
const logo = document.createElement("img");
logo.src = "logo.png";
const container = document.createElement("div");

container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);

async function obtenerInfo() {
  const respuesta = await fetch("https://ghibliapi.herokuapp.com/films");
  const pelis = await respuesta.json();

  pelis.forEach((peli) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    const h1 = document.createElement("h1");
    h1.textContent = peli.title;
    const p = document.createElement("p");
    peli.description = peli.description.substring(0, 300);
    p.textContent = `${peli.description} ...`;
    const image = document.createElement("img");
    image.setAttribute("class", "image");
    image.src = peli.image;

    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(image);
    card.appendChild(p);
  });
}

obtenerInfo();
