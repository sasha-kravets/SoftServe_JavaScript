const colors = document.querySelectorAll(".color");
const sizes = document.querySelectorAll(".size");
const deliveryMethods = document.querySelectorAll(".delivery-method");
const shoeImages = document.querySelectorAll(".shoe");
const bgGradients = document.querySelectorAll(".gradient");
const priceElement = document.getElementById("outprice");
let colorlPrice = 170;
let sizePrice = 0;
let deliveryPrice = 0;

// Update the displayed price on the page
const updateDisplayedPrice = () => {
  const totalPrice = colorlPrice + sizePrice + deliveryPrice;
  priceElement.textContent = totalPrice.toFixed(2);
};

colors.forEach((color) => {
  color.onclick = () => {
    // Change the active color
    colors.forEach((c) => c.classList.remove("active"));
    color.classList.add("active");

    const selectedColor = color.getAttribute("color");

    // Changing shoe color
    shoeImages.forEach((shoeImage) => {
      const shoeColor = shoeImage.getAttribute("color");
      if (shoeColor === selectedColor) {
        shoeImage.classList.add("show");
      } else {
        shoeImage.classList.remove("show");
      }
    });

    // Change background color
    bgGradients.forEach((gradient) => {
      const gradientColor = gradient.getAttribute("color");
      if (gradientColor === selectedColor) {
        gradient.classList.add("second");
      } else {
        gradient.classList.remove("second");
      }
    });

    // Update the displayed price
    const selectedColorPrice = parseFloat(color.getAttribute("data-price"));
    colorlPrice = selectedColorPrice;
    updateDisplayedPrice();
  };
});

sizes.forEach((size) => {
  size.onclick = () => {
    // Changing the active size
    sizes.forEach((s) => s.classList.remove("active"));
    size.classList.add("active");

    // Update the displayed price
    sizePrice = parseFloat(size.getAttribute("data-price"));
    updateDisplayedPrice();
  };
});

deliveryMethods.forEach((delivery) => {
  delivery.onclick = () => {
    // Changing the active delivery method
    deliveryMethods.forEach((d) => d.classList.remove("active"));
    delivery.classList.add("active");

    // Update the displayed price
    deliveryPrice = parseFloat(delivery.getAttribute("data-price"));
    updateDisplayedPrice();
  };
});