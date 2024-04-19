document.addEventListener("DOMContentLoaded", function() {
    const decrementBtn = document.getElementById("decrementBtn");
    const incrementBtn = document.getElementById("incrementBtn");
    const quantityDisplay = document.getElementById("quantityDisplay");
  
    // Initial quantity value
    let quantity = 1;
    quantityDisplay.textContent = quantity;
  
    // Decrease quantity
    decrementBtn.addEventListener("click", function() {
      if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
      }
    });
  
    // Increase quantity
    incrementBtn.addEventListener("click", function() {
      quantity++;
      quantityDisplay.textContent = quantity;
    });
  });

  



  // Define available flavors
const flavors = ["Cookies and cream", "Pistachio Almond", "Pineapple", "Raspberry", "Red Velvet", "Mango"];

// Function to populate dropdown lists
function populateDropdowns() {
  const dropdowns = document.querySelectorAll('.layer select');
  dropdowns.forEach(dropdown => {
    dropdown.innerHTML = '<option value="">Select Flavor</option>';
    flavors.forEach(flavor => {
      dropdown.innerHTML += `<option value="${flavor}">${flavor}</option>`;
    });
  });
}

// Function to handle dropdown selection
function handleSelection() {
  const selectedFlavors = new Set();
  const dropdowns = document.querySelectorAll('.layer select');
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('change', () => {
      const selectedFlavor = dropdown.value;
      if (selectedFlavor !== '') {
        if (selectedFlavors.has(selectedFlavor)) {
          alert('Flavor already selected in another layer. Please choose a different flavor.');
          dropdown.value = '';
        } else {
          selectedFlavors.add(selectedFlavor);
        }
      }
    });
  });
}

// Populate dropdown lists and set event listeners
populateDropdowns();
handleSelection();





function updateTotal(checkbox) {
  var totalElement = document.getElementById("totalAmount");
  var currentTotal = parseFloat(totalElement.textContent);
  var toppingPrice = 100;

  if (checkbox.checked) {
    currentTotal += toppingPrice;
  } else {
    currentTotal -= toppingPrice;
  }

  totalElement.textContent =  currentTotal.toFixed(2)  + (" Rs");
}


function updateTotal() {
  var totalElement = document.getElementById("totalAmount");
  var quantity = parseInt(document.getElementById("quantity").value);
  var basePrice = 800;
  var toppingPrice = 100;
  var toppingCount = document.querySelectorAll('input[name="topping"]:checked').length;
  var totalPrice = basePrice * quantity + (toppingPrice * toppingCount);
  
  totalElement.textContent = totalPrice.toFixed(2) + ("Rs");
}

function incrementQuantity() {
  var quantityElement = document.getElementById("quantity");
  var currentQuantity = parseInt(quantityElement.value);
  quantityElement.value = currentQuantity + 1;
  updateTotal();
}

function decrementQuantity() {
  var quantityElement = document.getElementById("quantity");
  var currentQuantity = parseInt(quantityElement.value);
  if (currentQuantity > 1) {
    quantityElement.value = currentQuantity - 1;
    updateTotal();
  }
}
