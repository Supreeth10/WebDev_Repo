// Add your code here
let main = document.querySelector("main");
main.style.margin = "auto";
main.style.width = "50vw";

let img = document.createElement("img");
img.src = "../images/supreeth.jpeg";
img.alt = "An headshot of Supreeth";
img.width = "200";
img.height = "200";
img.style.borderRadius = "50%";
img.style.display = "block";
img.style.margin = "auto";
main.append(img);

let para = document.createElement("p");
para.append(
  "Hey, My name is supreeth Mudduchetty and I am a CS Grad student from at PSU and I am from India."
);
para.style.fontWeight = "bold";
main.appendChild(para);

let para2 = document.createElement("p");
para2.append(" This is my first term and i am exicted to learn web dev.");
main.appendChild(para2);
