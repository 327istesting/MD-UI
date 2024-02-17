document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("meta-modal");
  const closeModalButton = document.querySelector(".meta-modal-close-button");

  closeModalButton.addEventListener("click", function() {
      modal.classList.remove("active");
  });

  window.addEventListener("click", function(event) {
      if (event.target === modal) {
          modal.classList.remove("active");
      }
  });
});


function openModal(event) {
    const modal = document.getElementById("meta-modal");
    event.preventDefault();
    modal.classList.add("active");
}