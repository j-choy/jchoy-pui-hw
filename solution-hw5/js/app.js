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





// function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
//     const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
//     glazeIndex = glazes.names.indexOf(roll.glaze);
//     packIndex = packs.sizes.indexOf(packSize);
//     roll.basePrice = (roll.basePrice + glazes.prices[glazeIndex]) * packs.prices[packIndex];
//     roll.basePrice = roll.basePrice.toFixed(2);

//     cart.add(roll);

    
        

//     return roll;
// }

function addRoll(roll) {
    glazeIndex = glazes.names.indexOf(roll.glazing);
    packIndex = packs.sizes.indexOf(roll.size);
    roll.basePrice = (roll.basePrice + glazes.prices[glazeIndex]) * packs.prices[packIndex];
    roll.basePrice = roll.basePrice.toFixed(2);

    cart.add(roll);

    // return roll;
}

cartButton = document.querySelector('.cart-button');

// FROM HW 4 -- THIS ADDS A ROLL BASED ON SELECTED DROPDOWN OPTIONS

function addToCart() {
    let glazingIndex = glazeDisplayedName.selectedIndex;
    // console.log(glazingIndex);
    let packIndex = packDisplayedName.selectedIndex;
    let roll = new Roll(rollType, glazes.names[glazingIndex], packs.sizes[packIndex], basePrice);
    cart.add(roll);
    console.log(cart);
}


// console.log(glazingIndex);
cartButton.addEventListener('click', addToCart);



addRoll(rollOriginal);
addRoll(rollWalnut);
addRoll(rollRaisin);
addRoll(rollApple);


// MAKE TEMPLATE OF THE SHOPPING CART CARD

function createElement(cartItem) {
    const template = document.querySelector('#cart-template');
    const clone = template.content.cloneNode(true);

    
    const shoppingCart = document.querySelector('#shopping-cart');
    shoppingCart.appendChild(clone);

    const cloneImage = clone.querySelector('.shopping-cart-image');
    const cloneRollType = clone.querySelector('#cart-roll-type');
    const cloneGlaze = clone.querySelector('#cart-glaze');
    const clonePackSize = clone.querySelector('#cart-pack-size');
    const clonePrice = clone.querySelector('#cart-price-individual');
    const cloneRemove = clone.querySelector('.remove');

    cloneImage.src = '../assets/products/' + rolls[rollType].imageFile;
    cloneRollType.textContent = cartItem.type;
    cloneGlaze.textContent = cartItem.glazing;
    clonePackSize.textContent = cartItem.size;
    clonePrice.textContent = '$ ' + cartItem.basePrice;
}

for (const roll of cart) {
    createElement(roll);
}



