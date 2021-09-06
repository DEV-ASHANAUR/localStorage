//display local storageCart
const displayLocalCart = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProduct(name);
    }
}
// add btn
const addItem = () => {
    const inputField = document.getElementById('input-field');
    const name = inputField.value;
    if (!name) {
        return;
    }
    //display prduct
    displayProduct(name);
    //visiable place order button
    document.getElementById('order').classList.remove('d-none');
    //add to cart
    addCart(name);
    //clear input field
    inputField.value = '';
}
//displayProduct
const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = name;
    ul.appendChild(li);
}
// get cart
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    } else {
        cartObj = {};
    }
    return cartObj;
}
// add to cart
const addCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    } else {
        cart[name] = 1;
    }
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
}
//placeOrder
const placeOrder = () => {
    document.getElementById('products').textContent = '';
    document.getElementById('order').classList.add('d-none');
    localStorage.removeItem('cart');
}

// call displayLocalCart
displayLocalCart();