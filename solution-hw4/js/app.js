// ALL DATA PULLED FROM RollsData.js

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

let headerElement = document.querySelector('#details-heading');
headerElement.innerText = rollType + ' cinnamon roll';

let imageElement = document.querySelector('.details-image');
imageElement.src = '../assets/products/' + rollType + '-cinnamon-roll.jpg';
console.log('../../assets/products/' + rollType);

let priceElement = document.querySelector('.details-pricing');
priceElement.textContent = '$ ' + rolls[rollType].basePrice; 

// GLAZE AND PACK INFO

const glazes = {
    names: ["Keep original", "Sugar milk", "Vanilla milk", "Double chocolate"],
    prices: [0.00, 0.00, 0.50, 1.50],
}

const packs = {
    sizes: [1, 3, 6, 12],
    prices: [1, 3, 5, 10],
}



// POPULATE GLAZING DROPDOWN  

function populateGlazing() {

    let glazeDisplayedName = document.querySelector('#glazing');

    for (let i = 0; i < glazes.names.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", glazes.prices[i]);
        option.textContent = glazes.names[i];
        glazeDisplayedName.appendChild(option);
    }
}

populateGlazing();

// POPULATE PACK OPTION DROPDOWN

function populatePacks() {
    
    let packDisplayedName = document.querySelector('#sizing');

    for (let i = 0; i < packs.sizes.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", packs.prices[i]);
        option.textContent = packs.sizes[i];
        packDisplayedName.appendChild(option);
    }
}

populatePacks();

// UPDATING PRICING

let glazeDisplayedName = document.querySelector('#glazing');
let packDisplayedName = document.querySelector('#sizing');

let currentPrice = document.querySelector(".details-pricing");
const basePrice = rolls[rollType].basePrice;                      // Linked basePrice to rollType, not 2.49

function glazingChange() {
    let priceChange = parseFloat(this.value);
    let newPrice = (basePrice + priceChange) * packDisplayedName.value;
    newPrice = newPrice.toFixed(2);
    let newPriceText = newPrice.toString();
    currentPrice.textContent = '$ ' + newPriceText;
    glazingIndex = glazeDisplayedName.selectedIndex;
}

function packChange() {
    let sizeChange = this.value;
    let newPrice = (basePrice + parseFloat(glazeDisplayedName.value)) * sizeChange;
    newPrice = newPrice.toFixed(2);
    let newPriceText = newPrice.toString();
    currentPrice.textContent = '$ ' + newPriceText;
    return currentPrice;
}


glazeDisplayedName.addEventListener('change', glazingChange);
packDisplayedName.addEventListener('change', packChange);

const cart = [];


class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

cartButton = document.querySelector('.cart-button');

function addToCart() {
    let glazingIndex = glazeDisplayedName.selectedIndex;
    // console.log(glazingIndex);
    let packIndex = packDisplayedName.selectedIndex;
    let roll = new Roll(rollType, glazes.names[glazingIndex], packs.sizes[packIndex], basePrice);
    cart.push(roll);
    console.log(cart);
}


// console.log(glazingIndex);
cartButton.addEventListener('click', addToCart);







