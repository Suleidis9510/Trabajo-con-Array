// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(myarray) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Filtrar el array para que solo queden los elementos de tipo string
  const filteredArray = myarray.filter((element) => typeof element === "string");
 
// Ordenar ignorando mayúsculas y minúsculas
filteredArray.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));


  // Mostrar el array filtrado y ordenado
  filteredArray.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Mostrar el array filtrado y ordenado
  showList(strangeArray);
});
