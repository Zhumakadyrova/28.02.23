let sayHelloBtn = document.querySelector("#say-hello");

//change the content
sayHelloBtn.textContent = "SAY HELLO";
sayHelloBtn.className= "btn btn-red";
sayHelloBtn.classList.add("btn", "btn-red") //remove toggle

//change style

sayHelloBtn.style.color = "tomato";
sayHelloBtn.style.fontSize = "20px";
sayHelloBtn.style.backgroundColor = "yellow";
sayHelloBtn.style.borderRadius = "5px";

// non changeble characteristics

console.log(sayHelloBtn.clientTop);
console.log(sayHelloBtn.getClientRects());

//creation of element

let exampleBtn = document.createElement("button");
document.body.append(exampleBtn);

//delete element

exampleBtn.remove();

// add event action listener

sayHelloBtn.addEventListener("click", function(event){
  alert("Hello");
})
//создать кнопку добавить его к элементу боди и изменить текст этой кнопки
let example = document.querySelector ("#example");
example.textContent = "example";
example.style.padding = "10px";
document.body.append(example);

example.addEventListener("click", function() {
  example.remove()
})
// создать список и добавить к боди

let list = document.createElement("ul");
document.body.append(list);
for (let i =1; i <= 10; i ++) {
  let listEl = document.createElement ("li")
  list.append(listEl);
}

let list1 = ["Apples", "Pears", "Oranges", "Peaches"];
let list2 = document.createElement("ul");
document.body.append(list2)
for ( let a = 0; a < list1.length; a ++) {
  let listItems = document.createElement ("li");
  listItems.textContent = list1[a];
  list2.append(listItems);
}

let par = document.createElement("p")
let elParrent = document.querySelector("#example1") 
let elements = elParrent.querySelectorAll("li")
elements.forEach((el) => {
  par.innerText = par.innerText + el.innerText + " "
})
document.body.append(par)

// let paragraph = document.createElement("p")
// let eleParrent = document.querySelector("#example2")
// let element = eleParrent.querySelector("li")
// element.forEach((el) => {
//   paragraph.innerText = paragraph.innerText + el.innerText + " "
// } )
// document.body.prepend(paragraph)

// свойства объекта можнопоменять но не сам объект
// использовать константу как можно везде