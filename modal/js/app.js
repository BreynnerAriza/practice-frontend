const modal = document.querySelector(".modal__container");
const buttonsOpenModal = document.querySelectorAll(".modal__button");

buttonsOpenModal.forEach(button => {
    button.addEventListener("click", () => {
        modal.classList.toggle("modal__container--open");
    });
});