const buttonEl = document.querySelector("button")

buttonEl.addEventListener("click", () => {
    try {
        const ageEl = document.querySelector(".input-age");
        const ageValue = Number(ageEl.value);
        if (ageValue == 0 || isNaN(ageValue)) {
          throw new Error("O valor digitado não é válido.");
        }
        alert("Tudo certo!");
      } catch (error) {
        alert(error.message); // O valor digitado não é válido.
      } finally {
        alert("Tente novamente")
      }
})