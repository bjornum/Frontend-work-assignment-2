/* ===== Subscription Modal =====*/

// Open the Subscription Modal
const openSubscriptionModal = () => {
  const subscriptionModal = document.getElementById("subscriptionModal");
  const modalBackground = document.getElementById("modalBackground");
  subscriptionModal.style.display = "block";
  modalBackground.style.display = "block";
};

// Close the Subscription Modal
const closeSubscriptionModal = () => {
  const subscriptionModal = document.getElementById("subscriptionModal");
  const modalBackground = document.getElementById("modalBackground");
  subscriptionModal.style.display = "none";
  modalBackground.style.display = "none";
};

// Gives an Subscriptiption confirmation message
const subscriptionConfirmation = () => {
  document.getElementById("subscriptionId").value = "";
  alert("You have now subscribed!");
};

/* ===== Image Modal ===== */

// Opens the Modal, sets image if there is one
const openImageModal = (image) => {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  // Check if there is an image, before setting it
  if (image) {
    modalImage.src = image.src;
  }
  modal.style.display = "block";
};

// Close the modal by setting display to none
const closeImageModal = () => {
  const imageModal = document.getElementById("imageModal");
  const modalBackground = document.getElementById("modalBackground");
  imageModal.style.display = "none";
};

// Opens the image modal through tabbing to it, then hitting enter
document.querySelector("figure").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // Getting the image and passing it on to the function
    const image = document.querySelector("figure img");
    openImageModal(image);
  }
});

// Close imageModal with Escape key
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeImageModal();
  }
});

/* ===== Contact Form ===== */

// "Sends" the Form and prevents page from reloading
const sendContactForm = (event) => {
  event.preventDefault();
  alert("Message sent successfully");

  // Clear input fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
};

/* ===== Fact about moons ===== */

const moonFacts = (moon) => {
  if (moon == "Titan") {
    alert("Titan – The king of Saturn’s moons, wrapped in a thick orange haze, with lakes of liquid methane! 🌫️🌊");
  } else if (moon == "Rhea") {
    alert("Rhea – The second largest moon of Saturn, with a surface of ice and rock! 🌌❄️");
  } else if (moon == "Iapetus") {
    alert("Iapetus – The yin-yang moon of Saturn, with a two-toned surface! ☯️🌑");
  } else if (moon == "Dione") {
    alert("Dione – The fourth largest moon of Saturn, with a surface of ice and rock! 🌌❄️");
  } else if (moon == "Enceladus") {
    alert("Enceladus – The moon of Saturn with a subsurface ocean, and geysers of water vapor! 🌊💨");
  } else {
    alert("No facts available for this moon");
  }
};

// Mouse over to click one of the onclick moons with enter button
// document.querySelectorAll(".moon").forEach((moon) => {
//   moon.addEventListener("mouseover", (event) => {
//     event.target.click();
//   });
// });

// Opens the image modal through tabbing to it, then hitting enter
document.querySelectorAll(".moon").forEach((moon) => {
  moon.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      moonFacts(event.target.textContent);
    }
  });
});
