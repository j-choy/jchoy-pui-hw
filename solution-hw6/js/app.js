
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');




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
    cloneRemove.textContent = 'Remove';

    shoppingCart.appendChild(roll.element);

    // WHEN YOU CLICK THE REMOVE BUTTON, SHOULD REMOVE THE ROLL FROM CART

    let removeButton = roll.element.querySelector('.remove');
    removeButton.addEventListener('click', () => {removeRoll(roll);
    });
}

// function updateElement(roll) {

// }




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

// RETRIEVE FROM LOCAL STORAGE

function retrieveFromLocalStorage() {
    const cartString = localStorage.getItem('cart');
    cartArray = JSON.parse(cartString);
    console.log(cartArray);

    for (const rollData of cartArray) {
        const roll = new Roll(rollData.type, rollData.glazing, rollData.size, rollData.basePrice);
        createElement(roll);
        cartTotal = cartTotal + parseFloat(roll.basePrice);
        console.log(cartTotal);
        
    }
}


if (localStorage.getItem('cart') != null) {
    retrieveFromLocalStorage();
} else {
    cart.clear();
}