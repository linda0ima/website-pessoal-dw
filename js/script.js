///////////////////////////////////////
// SOM BOTAO

const app = document.getElementById("app");
const inicio = document.getElementById("inicio");
const meuBotao = document.getElementById("meuBotao");
const audio = new Audio("../sons/clicar.wav");
meuBotao.addEventListener("click", () => {
  audio.play();

  inicio.style.display = "none";
  app.style.display = "flex";

  app.querySelector("h1").classList.add("animar");
  app.querySelector("h2").classList.add("animar");
});

//////////////////////////////
// scroll na #app

app.addEventListener("wheel", (e) => {
  app.scrollLeft += e.deltaY;
});

//////////////////////////////
// quads do fundo

//definir os gridQuads (grid com os quads que mudaram de cor em hover)
const divNode = document.createElement("div");

const gridQuads = divNode.cloneNode(false);
gridQuads.classList.add("gridQuads");
gridQuads.classList.add("viewport");

for (let i = 0; i < 400; i++) {
  gridQuads.appendChild(divNode.cloneNode(false));
}

const containerApp = app.querySelectorAll(".container");
for (let i = 0; i < containerApp.length; i++) {
  containerApp[i].appendChild(gridQuads.cloneNode(true));
}

const cores = ["#cdb4db", "#ffc8dd", "#faaac7", "#bee2ff", "#a2d2ff"];

/* const primeiro_gridQuads = document.querySelector('.gridQuads') */
const insideQuads = document.querySelectorAll(".gridQuads > div");

//função que muda os quads (cor)
const funcaoMudaQuads = (e) => {
  if (app.style.display == "flex") {
    for (let i = 0; i < insideQuads.length; i++) {
      const quad = insideQuads[i];
      const bounds = quad.getBoundingClientRect();

      if (
        bounds.x < e.clientX &&
        e.clientX < bounds.right &&
        bounds.y < e.clientY &&
        e.clientY < bounds.bottom
      ) {
        quad.style.backgroundColor =
          cores[parseInt(Math.random() * cores.length)];
        quad.style.opacity = "1";
        setTimeout(() => {
          quad.style.opacity = "0";
        }, 500);
      }
    }
  }
};

document.addEventListener("mousemove", (e) => {
  funcaoMudaQuads(e);
});
