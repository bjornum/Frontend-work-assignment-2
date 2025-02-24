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
