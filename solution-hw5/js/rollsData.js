const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

// GLAZE AND PACK INFO

const glazes = {
    names: ["Keep original", "Sugar milk", "Vanilla milk", "Double chocolate"],
    prices: [0.00, 0.00, 0.50, 1.50],
}

const packs = {
    sizes: [1, 3, 6, 12],
    prices: [1, 3, 5, 10],
}

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

const cart = new Set();

const rollOriginal = new Roll('Original', 'Sugar milk', 1, 2.49);
const rollWalnut = new Roll('Walnut', 'Vanilla milk', 12, 3.49);
const rollRaisin = new Roll('Raisin', 'Sugar milk', 3, 2.99);
const rollApple = new Roll('Apple', 'Keep original', 3, 3.49);

