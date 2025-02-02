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
const basePrice = 2.49;

function glazingChange() {
    let priceChange = parseFloat(this.value);
    let newPrice = (basePrice + priceChange) * packDisplayedName.value;
    newPrice = newPrice.toFixed(2);
    let newPriceText = newPrice.toString();
    currentPrice.textContent = '$ ' + newPriceText;
}

function packChange() {
    let sizeChange = this.value;
    let newPrice = (basePrice + parseFloat(glazeDisplayedName.value)) * sizeChange;
    newPrice = newPrice.toFixed(2);
    let newPriceText = newPrice.toString();
    currentPrice.textContent = '$ ' + newPriceText;
}


glazeDisplayedName.addEventListener('change', glazingChange);
packDisplayedName.addEventListener('change', packChange);









// function onSelectValueChange() {
//     console.log
// }

// console.log(glazeOptions[0].text)