// let glazeOptions = [
//     {
//         option: 'original',
//         text: 'Keep original',
//     },
//     {
//         option: 'sugarmilk',
//         text: 'Sugar milk',
//     },
//     {
//         option: 'vanillamilk',
//         text: 'Vanilla milk',
//     },
//     {
//         option: 'doublechocolate',
//         text: 'Double chocolate',
//     },
// ];

// var glazeNames = ["Keep original", "Sugar milk", "Vanilla milk", "Double chocolate"];

// var glazePricing = [0.00, 0.00, 0.50, 1.50];

// let packSizes = [1, 3, 6, 12];

// let packPricing = [1, 3, 5, 10];

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

    var glazeDisplayedName = document.querySelector('#glazing');

    for (var i = 0; i < glazes.names.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", glazes.prices[i]);
        option.textContent = glazes.names[i];
        glazeDisplayedName.appendChild(option);
    }
}

populateGlazing();

// POPULATE PACK OPTION DROPDOWN

function populatePacks() {
    
    var packDisplayedName = document.querySelector('#sizing');

    for (var i = 0; i < packs.sizes.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", packs.prices[i]);
        option.textContent = packs.sizes[i];
        packDisplayedName.appendChild(option);
    }
}

populatePacks();

function glazingChange(element) {
    const priceChange = element.value;
}




// function onSelectValueChange() {
//     console.log
// }

// console.log(glazeOptions[0].text)