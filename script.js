const modal = document.getElementById("cardModal");
const modalImage = document.getElementById("modalImage");
const modalLabel = document.getElementById("modalLabel");
const closeButton = document.querySelector(".modal-close");

document.querySelectorAll("[data-card]").forEach((button) => {
  button.addEventListener("click", () => {
    const src = button.dataset.card;
    const name = button.dataset.name || "PROFILE";

    modalImage.src = src;
    modalImage.alt = `${name} profile`;
    modalLabel.textContent = name;

    if (typeof modal.showModal === "function") {
      modal.showModal();
    }
  });
});

function closeModal() {
  if (modal.open) modal.close();
}

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  const rect = modal.getBoundingClientRect();
  const outside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (outside) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});
