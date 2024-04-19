// BUTTONS
const roomBtn = document.querySelector(".room-button");
const kitchenBtn = document.querySelector(".kitchen-button");
const laundryBtn = document.querySelector(".laundry-button");
const bedroom1Btn = document.querySelector(".bedroom1-button");
const bedroom2Btn = document.querySelector(".bedroom2-button");
const hallwayBtn = document.querySelector(".hallway-button");
const bathroomBtn = document.querySelector(".bathroom-button");
const allBtn = document.querySelector(".all-button");

// INSCRIÇÃO DOS "ESCUTADORES" DOS CLICKS DOS BOTÕES
roomBtn.addEventListener("click", ()=> LightController.instance.toggleRoom());
kitchenBtn.addEventListener("click", ()=> LightController.instance.toggleKitchen());
laundryBtn.addEventListener("click", ()=> LightController.instance.toggleLaundry());
bedroom1Btn.addEventListener("click", ()=> LightController.instance.toggleBedroom1());
bedroom2Btn.addEventListener("click", ()=> LightController.instance.toggleBedroom2());
hallwayBtn.addEventListener("click", ()=> LightController.instance.toggleHallway());
bathroomBtn.addEventListener("click", ()=> LightController.instance.toggleBathroom());
allBtn.addEventListener("click", ()=> LightController.instance.toggleAll());
