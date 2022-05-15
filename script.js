const shoppingCart = document.getElementById('shopping-cart');
const productsBox = document.querySelector('.products-box');
let btnProductOne = document.getElementById('product1');
let productOneQuantity = 0;
let quantityProd1 = 0;
let quantityProd2 = 0;
let quantityProd3 = 0;


function getProductName(idNum) {
    let productLeft = document.querySelectorAll('.product-left');
    let productNames = [];
    for(let i = 0; i < productLeft.length; i++) {
        productNames.push(productLeft[i].textContent);
    }
    return(productNames[idNum]);
}


function getPrice(idNum) {
    let prices = document.querySelectorAll('.item-price');
    let pricesArray = [];
    for(let i = 0; i < prices.length; i++) {
        pricesArray.push(Number(prices[i].textContent.slice(1)));
    }
    return pricesArray[idNum];
}


function addToCartAction() {
    let para = document.getElementById('has-products');
    para.textContent = 'Products in your shopping cart';
    para.className = 'shopping-cart-para bolded ';
    document.querySelector('.output-div').style.display = 'flex';
    document.querySelector('.shopping-cart-hr').style.display = 'block';
    shoppingCart.style.height = 'auto';
    document.querySelector('.hr-total-price ').style.display = 'flex';
    document.querySelector('.continue-button').style.display ='flex';

}

function generateProductInfo(prodNumber) {
    let productName = getProductName(prodNumber-1);
    let productPrice = getPrice(prodNumber-1);
    let nameAndPrice = [];
    document.querySelector(`.product-div-${prodNumber}`).style.display = 'flex';
    let productValue = document.querySelector(`.product-${prodNumber}-price`);
    productValue.innerHTML = `$${productPrice.toFixed(2)}`;
    nameAndPrice.push(productName);
    nameAndPrice.push(productPrice);
    return nameAndPrice;
}


function getAllPrices() {
    let prices = [];
    let productsPrices = document.querySelectorAll('.item-price');
    for(let i = 0; i < productsPrices.length; i++) {
        prices.push(Number(productsPrices[i].textContent.slice(1)).toFixed(2));
    }
    return prices;
}


function getTotalPrice(quantities, itemsPrices) {
    let sum = 0;
    for(let i = 0; i < quantities.length; i++) {
        sum += quantities[i] * itemsPrices[i];
    }
    return sum.toFixed(2);
}




productsBox.addEventListener('click', (e) => {
    if(e.target.className == 'add-to-cart-button') {
        addToCartAction();
    
        if(e.target.getAttribute('id') == 'button1') {
            let myProdInfo = generateProductInfo(1);
            quantityProd1++;
            console.log(quantityProd1);
            let quantityInput = document.querySelector('.product-1-input');
            quantityInput.setAttribute('value', `${quantityProd1}`);
        } else if(e.target.getAttribute('id') == 'button2') {
            let myProdInfo = generateProductInfo(2);
            quantityProd2++;
            console.log(quantityProd2);
            let quantityInput = document.querySelector('.product-2-input');
            quantityInput.setAttribute('value', `${quantityProd2}`);

        } else if(e.target.getAttribute('id') == 'button3') {
            let myProdInfo = generateProductInfo(3);
            quantityProd3++;
            console.log(quantityProd3);
            let quantityInput = document.querySelector('.product-3-input');
            quantityInput.setAttribute('value', `${quantityProd3}`);
        }
        let quantities = [quantityProd1, quantityProd2, quantityProd3];
        let allPrices = getAllPrices();
        let finalAmmount = getTotalPrice(quantities, allPrices);
        console.log(allPrices);
        console.log(getTotalPrice(quantities, allPrices));
        document.querySelector('.result').textContent = `Total: $${finalAmmount}`;
        document.querySelector('.final-price').style.display = 'flex';

        

    }
})
