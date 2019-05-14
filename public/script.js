
let cartCount = document.getElementById("counter");
let isItemSelected = false;
let itemCount = 0;
let shoppingCart = [];
let selectedSize = "";
let displaySelectedSize = document.getElementById("selected");



selectItem = () => {  
  isItemSelected = true;
  selectedSize = event.srcElement.id;
  console.log(selectedSize);
  displaySelectedSize.innerHTML = selectedSize;
}

addItem = () => {
  if (isItemSelected === true) {
    itemCount+= 1;
    cartCount.innerHTML = `(${itemCount})`;
    shoppingCart.push(selectedSize);
    console.log(shoppingCart);
    return itemSuccess();
  } else {
      return itemError();
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
  shoppingCart.map((items) => {items})
}
