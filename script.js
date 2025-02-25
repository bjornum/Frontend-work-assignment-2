/* ===== Subscription Modal =====*/

// // Open the Modal
// const openSubscriptionModal = () => {
//   let modal = document.getElementById("myModal");
//   modal.style.display = "block";
// };

// // Close the Modal by clicking button
// const closeSubscriptionModal = () => {
//   let modal = document.getElementById("myModal");
//   modal.style.display = "none";
// };

// // Close Modal by clicking outside
// window.onclick = function (event) {
//   let modal = document.getElementById("myModal");
//   let imageModal = document.getElementById("imageModal");
//   if (event.target == modal) {
//     modal.style.display = "none";
//   } else if (event.target == imageModal) {
//     imageModal.style.display = "none";
//   }
// };

/* Open modal with Enter key
  - Selects the figure tag to listen if user clicks enter on it.
  - Only accessable if user tab into it using keyboard naviation.
  - Hitting enter opens the modal
*/

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
