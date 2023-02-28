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