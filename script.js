// Open the Modal
let saturnImage = document.querySelector("img");
saturnImage.onclick = function () {
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
};

// Close the Modal by clicking button
let closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function () {
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
