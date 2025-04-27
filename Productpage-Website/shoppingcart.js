let cartCount = 1; // Assuming 1 is already in the cart

// Update cart count UI
function updateCartCount() {
  const cartCountElement = document.querySelector('.cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = cartCount;
  }
}

// DRAG & DROP
document.addEventListener('DOMContentLoaded', () => {  // Ensures DOM is fully loaded before accessing elements
  const productCards = document.querySelectorAll('.product-card');
  const cartContainer = document.querySelector('.cart-container');

  if (!productCards.length || !cartContainer) return;  // Early return if the elements aren't found

  productCards.forEach(card => {
    card.setAttribute('draggable', 'true'); // Ensures the cards are draggable

    card.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', card.dataset.productId);
      card.classList.add('dragging');
    });

    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
    });
  });

  cartContainer.addEventListener('dragover', (e) => {
    e.preventDefault(); // Allow drop
    cartContainer.classList.add('drag-over');
  });

  cartContainer.addEventListener('dragleave', () => {
    cartContainer.classList.remove('drag-over');
  });

  cartContainer.addEventListener('drop', (e) => {
    e.preventDefault();
    const productId = e.dataTransfer.getData('text/plain');
    
    // Simulate adding product to cart
    console.log("Dropped product:", productId);
    cartCount++;
    updateCartCount();

    cartContainer.classList.remove('drag-over');
  });
});

// Also support clicking "Add to cart" button
document.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('add-to-cart-button')) {
    cartCount++;
    updateCartCount();
  }
});

// Initial UI setup
updateCartCount();

const cartBtn = document.querySelector('.cart-btn');
const cartPopup = document.getElementById('cartPopup');
const deleteBtns = document.getElementsByClassName('delete-btn');

// To Toggle Visibility
cartBtn.addEventListener('click', () => {
    cartPopup.classList.toggle('hidden');
});

// To Handle delte button
Array.from(deleteBtns).forEach(btn => {
    btn.addEventListener('click',(e) => {
        e.target.closest('.cart-item').remove();
        cartCount--;
        updateCartCount();
    });
});

// Cart-drop-zone
const dropZone = document.querySelector('.cart-drop-zone');
dropZone.addEventListener('dragover', e => {
    e.preventDefault();
    dropZone.computedStyleMap.backgroundColor = 'white';
});
dropZone.addEventListener('drop', e => {
    e.preventDefault();
    //adding a product into the cart
    cartCount++;
    updateCartCount();
    dropZone.computedStyleMap.backgroundColor = 'white';
});