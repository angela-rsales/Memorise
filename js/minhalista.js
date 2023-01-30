const content = document.querySelector(".content");
const inputSearch = document.querySelector("input[type='search']");

let items = [];

inputSearch.oninput = () => {
  content.innerHTML = "";

  items
    .filter((item) =>
      item.toLowerCase().includes(inputSearch.value.toLowerCase())
    )
    .forEach((item) => addHTML(item));
};

function addHTML(item) {
  const div = document.createElement("div");
  div.innerHTML = item;
  content.append(div);
}

fetch("https://cinema-servidor-03.onrender.com/terror")
.then((data) => data.json())
.then((terror) => {
  terror.forEach((user) => {
    addHTML(user.nome);
    items.push(user.nome);
  });
});

fetch("https://cinema-servidor-03.onrender.com/acao")

.then((data) => data.json())
.then((acao) => {
  acao.forEach((user) => {
    addHTML(user.nome);
    items.push(user.nome);
  });
});

fetch("https://cinema-servidor-03.onrender.com/drama")
.then((data) => data.json())
.then((drama) => {
  drama.forEach((user) => {
    addHTML(user.nome);
    items.push(user.nome);
  });
});

fetch("https://cinema-servidor-03.onrender.com/comedia")
.then((data) => data.json())
.then((comedia) => {
  comedia.forEach((user) => {
    addHTML(user.nome);
    items.push(user.nome);
  });
});

fetch("https://cinema-servidor-03.onrender.com/romance")
.then((data) => data.json())
.then((romance) => {
  romance.forEach((user) => {
    addHTML(user.nome);
    items.push(user.nome);
  });
});

fetch("https://projetoindividual-2otg.onrender.com/Romance")
.then((data) => data.json())
.then((Romance) => {
  Romance.forEach((user) => {
    addHTML(user.titulo);
    items.push(user.titulo);
  });
});

fetch("https://projetoindividual-2otg.onrender.com/investigacao-criminal")
.then((data) => data.json())
.then((investigacaocriminal) => {
    investigacaocriminal.forEach((user) => {
    addHTML(user.titulo);
    items.push(user.titulo);
  });
});

fetch("https://projetoindividual-2otg.onrender.com/Auto-ajuda")
.then((data) => data.json())
.then((Autoajuda) => {
    Autoajuda.forEach((user) => {
    addHTML(user.titulo);
    items.push(user.titulo);
  });
});