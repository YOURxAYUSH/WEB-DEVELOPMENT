let SHIRT;
let Tshirt;
let oversizedtshirt;
let plainsection;
let previous

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");

//initialize button

button1.onclick= goSHIRT;
button2.onclick= goTshirt;
button3.onclick= oversized;

function goSHIRT() {
    
    button1.innerText= "Plain Shirt";
    button2.innerText= "Printed Shirt";
    button3.innerText= "Go Back";

    button1.onclick= plains;
    button2.onclick= printed;
    button3.onclick= back;
  
    

}

function goTshirt(){
    button1.innerText= "Plain Shirt";
    button2.innerText= "Printed Shirt";
    button3.innerText= "Go Back";

    button1.onclick= plains;
    button2.onclick= printed;
    button3.onclick= back;
  

}

function oversized(){
    button1.innerText= "Plain Shirt";
    button2.innerText= "Printed Shirt";
    button3.innerText= "Go Back";

    button1.onclick= plains;
    button2.onclick= printed;
    button3.onclick= back;
  

}

function plains() {
button1.onclick=goSHIRT;
button2.onclick=goTshirt;
button3.onclick=oversized;
button1.innerText="SHIRT";
button2.innerText="T-shirt";
button3.innerText="Oversized T-shirt";
}

function printed() {
    button1.onclick=goSHIRT;
button2.onclick=goTshirt;
button3.onclick=oversized;
button1.innerText="SHIRT";
button2.innerText="T-shirt";
button3.innerText="Oversized T-shirt";

}

function back() {
button1.onclick=goSHIRT;
button2.onclick=goTshirt;
button3.onclick=oversized;
button1.innerText="SHIRT";
button2.innerText="T-shirt";
button3.innerText="Oversized T-shirt";

}

