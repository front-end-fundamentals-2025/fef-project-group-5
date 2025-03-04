function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = "";

  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    itemDiv.innerHTML = `
        <img src="${item.img}" alt="${item.name}" />
        <p>${item.name}</p>
        <p>${item.price}</p>
        <button class="remove-item" data-index="${index}">Remove</button>
      `;

    cartContainer.appendChild(itemDiv);
  });

  //should we add event listeners to remove buttons
  const removeButtons = document.querySelectorAll(".remove-item");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      removeFromCart(index); //to remove the item from the cart
    });
  });
}
function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}
function clearCart() {
  localStorage.removeItem("cart");
  renderCart();
}

renderCart();

// event listener for the clear cart button
document.getElementById("clear-cart").addEventListener("click", clearCart);
