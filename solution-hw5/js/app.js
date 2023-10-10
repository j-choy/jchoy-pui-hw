
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');


function addRoll(roll) {
    // console.log('Adding roll');
    glazeIndex = glazes.names.indexOf(roll.glazing);
    packIndex = packs.sizes.indexOf(roll.size);
    roll.basePrice = (roll.basePrice + glazes.prices[glazeIndex]) * packs.prices[packIndex];
    roll.basePrice = roll.basePrice.toFixed(2);

    cart.add(roll);
}

addRoll(rollOriginal);
addRoll(rollWalnut);
addRoll(rollRaisin);
addRoll(rollApple);

const shoppingCart = document.querySelector('#shopping-cart');

// CALCULATE CART TOTAL

let displayedCartTotal = document.querySelector('.total-price');
let cartTotal = 0;

// FUNCTION TO CALCULATE TOTAL PRICE

function updatePrice(roll) {
    cartTotal -= roll.basePrice;
}



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

    cloneImage.src = '.././assets/products/' + roll.type.toLowerCase() + '-cinnamon-roll.jpg';
    cloneRollType.textContent = roll.type + ' Cinnamon Roll';
    cloneGlaze.textContent = 'Glazing: ' + roll.glazing;
    clonePackSize.textContent = 'Pack size: ' + roll.size;
    clonePrice.textContent = '$ ' + roll.basePrice;

    shoppingCart.appendChild(roll.element);

    // WHEN YOU CLICK THE REMOVE BUTTON, SHOULD REMOVE THE ROLL FROM CART

    let removeButton = roll.element.querySelector('.remove');
    removeButton.addEventListener('click', () => {removeRoll(roll);
    });
}

// function updateElement(roll) {

// }


for (const roll of cart) {
    createElement(roll);
    cartTotal = cartTotal + parseFloat(roll.basePrice);
    console.log(cartTotal);
    
}

//  UPDATE TOTAL CART PRICE

displayedCartTotal.innerHTML = '$ ' + cartTotal.toFixed(2);



function removeRoll(roll) {
    if (cart.size > 0) {
        roll.element.remove();
        cart.delete(roll);
        updatePrice(roll);
        console.log(cartTotal);
        displayedCartTotal.innerHTML = '$ ' + cartTotal.toFixed(2);
    }
    
}

