
let cartCount = document.getElementById("counter");
let isItemSelected = false;
let itemCount = 0;
let shoppingCart = [];
let selectedSize = "";
let displaySelectedSize = document.getElementById("selected");
let displayCart = document.getElementById("cart");



selectItem = () => {  
  isItemSelected = true;
  selectedSize = event.srcElement.id;
  displaySelectedSize.innerHTML = `${selectedSize}`;
}

addItem = () => {
  if (isItemSelected === true) {

    isExistingItem();

    itemCount+= 1;
    cartCount.innerHTML = `( ${itemCount}) `;
    
    return itemSuccess();
  } else {
      return itemError();
  }
}

isExistingItem = () => {

  const shopItem = {
    name: "Classic Tee",
    price: 75,
    size: `${selectedSize}`,
    quantity: 1
  }

  const existingItem = shoppingCart.find((item) => { // Check if existing size is in cart already
    return item.size === shopItem.size;
  });
    
  if(existingItem) { // increase quantity if item exists in shopping cart
    existingItem.quantity++;
  } else { // add new item
    shoppingCart.push(shopItem);
  }

}

itemError = () => {
  let errorMessage = document.getElementById("error")
  errorMessage.className = "show";
  setTimeout(function(){ errorMessage.className = errorMessage.className.replace("show", ""); }, 3000);
}

itemSuccess = () => {
  let successMessage = document.getElementById("success");
  successMessage.className = "show";
  setTimeout(function(){ successMessage.className = successMessage.className.replace("show", ""); }, 3000);
}

displayShoppingCartItems = () => {
  const markup = `
    <div class="shopping-cart">
      <div class="items">
        ${shoppingCart.map((item) => 
          `
          <span><img class="cart-image" src="./public/images/classic-tee.jpg" /></span>
          <div class="items-container">
            <p id="item">${item.name}
            <span id="item">$${item.price}</span>
            <span id="item">Size: ${item.size}</span>
            <span id="item">Qty: ${item.quantity}</span>
            </p>
          </div>
          `
          ).join("")}
      </div>
    </div>
  
  `;
  displayCart.innerHTML = markup;
}
