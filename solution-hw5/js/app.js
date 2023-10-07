
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');





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
    console.log('Adding roll');
    glazeIndex = glazes.names.indexOf(roll.glazing);
    packIndex = packs.sizes.indexOf(roll.size);
    roll.basePrice = (roll.basePrice + glazes.prices[glazeIndex]) * packs.prices[packIndex];
    roll.basePrice = roll.basePrice.toFixed(2);

    cart.add(roll);

    // return roll;
}





addRoll(rollOriginal);
addRoll(rollWalnut);
addRoll(rollRaisin);
addRoll(rollApple);

const shoppingCart = document.querySelector('#shopping-cart');

// MAKE TEMPLATE OF THE SHOPPING CART CARD

function createElement(roll) {
    const template = document.querySelector('#cart-template');
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector('.shopping-cart-card');


    const cloneImage = clone.querySelector('.shopping-cart-card-image');
    const cloneRollType = clone.querySelector('#cart-roll-type');
    const cloneGlaze = clone.querySelector('#cart-glaze');
    const clonePackSize = clone.querySelector('#cart-pack-size');
    const clonePrice = clone.querySelector('#cart-price-individual');
    const cloneRemove = clone.querySelector('.remove');

    cloneImage.src = '../assets/products/' + roll.type.toLowerCase() + '-cinnamon-roll.jpg';
    cloneRollType.textContent = roll.type + ' Cinnamon Roll';
    cloneGlaze.textContent = 'Glazing: ' + roll.glazing;
    clonePackSize.textContent = 'Pack size: ' + roll.size;
    clonePrice.textContent = '$ ' + roll.basePrice;

    shoppingCart.appendChild(roll.element);
}

for (const roll of cart) {
    createElement(roll);
    
}

const totalCartPrice = document.querySelector('.total-price');
totalCartPrice.textContent = 0;
for (const roll of cart) {
    totalCartPrice.textContent = totalCartPrice.textContent.float() + roll.basePrice;
}


