// const ul = document.createElement("ul");

// function render(arr) {
//   arr.map((item) => {
//     let li = document.createElement("li");
//     li.textContent = item;
//     ul.append(li);
//   });
// }

// render(["html", "css", "js"]);

// document.body.prepend(ul);

// console.log(ul);

const ul = document.createElement("ul");
function render(arr) {
  arr.map((item) => {
    const a = document.createElement("a");
    a.href = item.url;
    const li = document.createElement("li");
    a.textContent = item.name;

    ul.append(li);
    li.append(a);
  });
}
render([
  {
    name: "Google",
    url: "https://google.com",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
  },
  {
    name: "intocode",
    url: "https://intocode.ru",
  },
]);

document.body.append(ul);
