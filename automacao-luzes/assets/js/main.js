// BUTTONS
const roomBtn = document.querySelector(".room-button");
const kitchenBtn = document.querySelector(".kitchen-button");
const laundryBtn = document.querySelector(".laundry-button");
const bedroom1Btn = document.querySelector(".bedroom1-button");
const bedroom2Btn = document.querySelector(".bedroom2-button");
const hallwayBtn = document.querySelector(".hallway-button");
const bathroomBtn = document.querySelector(".bathroom-button");
const allBtn = document.querySelector(".all-button");

// VIEWS
const roomViewEl = document.querySelector(".room-view");
const kitchenViewEl = document.querySelector(".kitchen-view");
const laundryViewEl = document.querySelector(".laundry-view");
const bedroom1ViewEl = document.querySelector(".bedroom1-view");
const bedroom2ViewEl = document.querySelector(".bedroom2-view");
const hallwayViewEl = document.querySelector(".hallway-view");
const bathroomViewEl = document.querySelector(".bathroom-view");

// INSCRIÇÃO DOS "ESCUTADORES" DOS CLICKS DOS BOTÕES
roomBtn.addEventListener("click", () => {
  AutomacaoLuzes.instance.toggle("room");
});
kitchenBtn.addEventListener("click", () => {
  AutomacaoLuzes.instance.toggle("kitchen");
});
laundryBtn.addEventListener("click", () => {
  AutomacaoLuzes.instance.toggle("laundry");
});
bedroom1Btn.addEventListener("click", () => {
  AutomacaoLuzes.instance.toggle("bedroom1");
});
bedroom2Btn.addEventListener("click", () => {
  AutomacaoLuzes.instance.toggle("bedroom2");
});
hallwayBtn.addEventListener("click", () => {
  AutomacaoLuzes.instance.toggle("hallway");
});
bathroomBtn.addEventListener("click", () => {
  AutomacaoLuzes.instance.toggle("bathroom");
});
allBtn.addEventListener("click", () => {
  AutomacaoLuzes.instance.toggle("all");
});

// INSCRIÇÃO DOS "ESCUTADORES"
AutomacaoLuzes.instance.inscrever(() => {
  if (AutomacaoLuzes.instance.room) {
    roomViewEl.classList.add("active");
  } else {
    roomViewEl.classList.remove("active");
  }
});
AutomacaoLuzes.instance.inscrever(() => {
  if (AutomacaoLuzes.instance.kitchen) {
    kitchenViewEl.classList.add("active");
  } else {
    kitchenViewEl.classList.remove("active");
  }
});
AutomacaoLuzes.instance.inscrever(() => {
  if (AutomacaoLuzes.instance.laundry) {
    laundryViewEl.classList.add("active");
  } else {
    laundryViewEl.classList.remove("active");
  }
});
AutomacaoLuzes.instance.inscrever(() => {
  if (AutomacaoLuzes.instance.bedroom1) {
    bedroom1ViewEl.classList.add("active");
  } else {
    bedroom1ViewEl.classList.remove("active");
  }
});
AutomacaoLuzes.instance.inscrever(() => {
  if (AutomacaoLuzes.instance.bedroom2) {
    bedroom2ViewEl.classList.add("active");
  } else {
    bedroom2ViewEl.classList.remove("active");
  }
});
AutomacaoLuzes.instance.inscrever(() => {
  if (AutomacaoLuzes.instance.hallway) {
    hallwayViewEl.classList.add("active");
  } else {
    hallwayViewEl.classList.remove("active");
  }
});
AutomacaoLuzes.instance.inscrever(() => {
  if (AutomacaoLuzes.instance.bathroom) {
    bathroomViewEl.classList.add("active");
  } else {
    bathroomViewEl.classList.remove("active");
  }
});

// LIGANDO A LUZ DA SALA
AutomacaoLuzes.instance.toggle("room");
