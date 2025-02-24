// Open the Modal
const openSubscriptionModal = () => {
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
};

// Close the Modal by clicking button
const closeSubscriptionModal = () => {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
};

// Close Modal by clicking outside
window.onclick = function (event) {
  let modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/* Open modal with Enter key
  - Selects the figure tag to listen if user clicks enter on it.
  - Only accessable if user tab into it using keyboard naviation.
  - Hitting enter opens the modal
*/
document.querySelector("figure").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    openSubscriptionModal();
  }
});

// Close modal with Escape key
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeSubscriptionModal();
  }
});
