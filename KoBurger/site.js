// vars ========================================

const headline = document.createElement("h1");
headline.innerHTML = "ScriptBurger";

let price = 3.90;
price.id = "startPrice";

const root = document.getElementById("root");

const ban1 = document.createElement("div");
ban1.className = "ban";

const insideBan = document.createElement("div");
insideBan.id = "insideBan";

const ban2 = document.createElement("div");
ban2.className = "ban";

const menu = document.createElement("footer");
menu.className = "menu"; 
menu.id = "menu";

const buttons = document.createElement("div");
buttons.className = "buttons";
buttons.id = "buttons";

const hr = document.createElement("hr");

const cost = document.createElement("h3");
cost.innerText = "cost: " + price;

// Hamburger ========================================

root.appendChild(headline);
root.appendChild(ban1);
root.appendChild(insideBan);
root.appendChild(ban2);
root.appendChild(menu);

// buttons ==========================================

const addHam = document.createElement("button");
addHam.className = "buttonHam";
addHam.innerHTML = "Add Ham";
addHam.addEventListener("click", addHamFun);

const removeHam = document.createElement("button");
removeHam.className = "buttonHam";
removeHam.innerHTML = "Remove Ham";
removeHam.addEventListener("click", removeHamFun);

const addTomato = document.createElement("button");
addTomato.className = "buttonTomato";
addTomato.innerHTML = "Add Tomato";
addTomato.addEventListener("click", addTomatoFun);

const removeTomato = document.createElement("button");
removeTomato.className = "buttonTomato";
removeTomato.innerHTML = "Remove Tomato";
removeTomato.addEventListener("click", removeTomatoFun);

const addLettuce = document.createElement("button");
addLettuce.className = "buttonLettuce";
addLettuce.innerHTML = "Add Lettuce";
addLettuce.addEventListener("click", addLettuceFun);

const removeLettuce = document.createElement("button");
removeLettuce.className = "buttonLettuce";
removeLettuce.innerHTML = "Remove Lettuce";
removeLettuce.addEventListener("click", removeLettuceFun);

const addCheese = document.createElement("button");
addCheese.className = "buttonCheese"
addCheese.innerHTML = "Add Cheese";
addCheese.addEventListener("click", addCheeseFun);

const removeCheese = document.createElement("button");
removeCheese.className = "buttonCheese"
removeCheese.innerHTML = "Remove cheese";
removeCheese.addEventListener("click", removeCheeseFun);

// functions ========================================

function addPrice(x) {
    menu.removeChild(cost);
    price += x;
    cost.innerHTML = "cost: " + price.toFixed(2);
    menu.appendChild(cost);
}

function removePrice(x) {
    menu.removeChild(cost);
    price -= x;
    cost.innerHTML = "cost: " + price.toFixed(2);
    menu.appendChild(cost);
}

function addHamFun() {
    const ham = document.createElement("div");
    const hamPrice = 1.00;
    ham.className = "ham";
    ham.id = "ham";
    document.getElementsByClassName("ham");
    insideBan.appendChild(ham);
    addPrice(hamPrice);
}

function removeHamFun() {
    const removed = document.getElementById("ham");
    const hamPrice = 1.00;
    insideBan.removeChild(removed);
    removePrice(hamPrice);
}

function addTomatoFun() {
    const tomato = document.createElement("div");
    const tomatoPrice = 0.50;
    tomato.className = "tomato";
    tomato.id = "tomato";
    document.getElementsByClassName("tomato")
    insideBan.appendChild(tomato);
    addPrice(tomatoPrice);
}

function removeTomatoFun() {
    const removeTomato = document.getElementById("tomato");
    const tomatoPrice = 0.50;
    insideBan.removeChild(removeTomato);
    removePrice(tomatoPrice);
}


function addLettuceFun() {
    const lettuce = document.createElement("div");
    const lettucePrice = 0.30;
    lettuce.className = "lettuce";
    lettuce.id = "lettuce";
    document.getElementsByClassName("lettuce");
    insideBan.appendChild(lettuce);
    addPrice(lettucePrice);
}

function removeLettuceFun() {
    const removeLettuce = document.getElementById("lettuce");
    const lettucePrice = 0.30;
    insideBan.removeChild(removeLettuce);
    removePrice(lettucePrice);
}

function addCheeseFun() {
    const cheese = document.createElement("div");
    const cheesePrice = 0.10;
    cheese.className = "cheese";
    cheese.id = "cheese";
    const ham = document.getElementById("ham");
    insideBan.removeChild(ham);
    insideBan.appendChild(cheese);
    addPrice(cheesePrice);
}

function removeCheeseFun() {
    const removeCheese = document.getElementById("cheese");
    const cheesePrice = 1.10;
    insideBan.removeChild(removeCheese);
    removePrice(cheesePrice);
    addHamFun();
}

// menu ========================================
menu.appendChild(hr);
menu.appendChild(buttons);
    buttons.appendChild(addTomato);
    buttons.appendChild(removeTomato);
    buttons.appendChild(addLettuce);
    buttons.appendChild(removeLettuce);
    buttons.appendChild(addHam);
    buttons.appendChild(removeHam);
    buttons.appendChild(addCheese);
    buttons.appendChild(removeCheese);
menu.appendChild(cost);



