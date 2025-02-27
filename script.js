/* ===== Subscription Modal =====*/

const openSubscriptionModal = () => {
  let subscriptionModal = document.getElementById("subscriptionModal");
  let modalBackground = document.getElementById("modalBackground");

  subscriptionModal.style.display = "block";
  modalBackground.style.display = "block";
};

const closeSubscriptionModal = () => {
  let subscriptionModal = document.getElementById("subscriptionModal");
  let modalBackground = document.getElementById("modalBackground");
  subscriptionModal.style.display = "none";
  modalBackground.style.display = "none";
};

/* ===== Image Modal ===== */

// Opens the Modal, sets image if there is one
const openImageModal = (image) => {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalBackground = document.getElementById("modalBackground");
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
