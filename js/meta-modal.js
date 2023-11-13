document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("meta-modal");
  const openModalButton = document.getElementById("open-modal");
  const closeModalButton = document.querySelector(".meta-modal-close-button");
  console.log(openModalButton)
  openModalButton.addEventListener("click", function(event) {
      event.preventDefault();
      modal.classList.add("active");
  });

  closeModalButton.addEventListener("click", function() {
      modal.classList.remove("active");
  });

  window.addEventListener("click", function(event) {
      if (event.target === modal) {
          modal.classList.remove("active");
      }
  });
});
