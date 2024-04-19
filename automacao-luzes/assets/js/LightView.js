const roomViewEl = document.querySelector(".room-view");
const kitchenViewEl = document.querySelector(".kitchen-view");
const laundryViewEl = document.querySelector(".laundry-view");
const bedroom1ViewEl = document.querySelector(".bedroom1-view");
const bedroom2ViewEl = document.querySelector(".bedroom2-view");
const hallwayViewEl = document.querySelector(".hallway-view");
const bathroomViewEl = document.querySelector(".bathroom-view");

class LightView {
  turnOnRoom() {
    roomViewEl.classList.add("active");
  }
  turnOffRoom() {
    roomViewEl.classList.remove("active");
  }

  turnOnKitchen() {
    kitchenViewEl.classList.add("active");
  }
  turnOffKitchen() {
    kitchenViewEl.classList.remove("active");
  }

  turnOnLaundry() {
    laundryViewEl.classList.add("active");
  }
  turnOffLaundry() {
    laundryViewEl.classList.remove("active");
  }

  turnOnBedroom1() {
    bedroom1ViewEl.classList.add("active");
  }
  turnOffBedroom1() {
    bedroom1ViewEl.classList.remove("active");
  }

  turnOnBedroom2() {
    bedroom2ViewEl.classList.add("active");
  }
  turnOffBedroom2() {
    bedroom2ViewEl.classList.remove("active");
  }

  turnOnBathroom() {
    bathroomViewEl.classList.add("active");
  }
  turnOffBathroom() {
    bathroomViewEl.classList.remove("active");
  }

  turnOnHallway() {
    hallwayViewEl.classList.add("active");
  }
  turnOffHallway() {
    hallwayViewEl.classList.remove("active");
  }

  turnOnAll() {
    this.turnOnRoom()
    this.turnOnKitchen()
    this.turnOnLaundry()
    this.turnOnBedroom1()
    this.turnOnBedroom2()
    this.turnOnBathroom()
    this.turnOnHallway()
  }
  turnOffAll() {
    this.turnOffRoom()
    this.turnOffKitchen()
    this.turnOffLaundry()
    this.turnOffBedroom1()
    this.turnOffBedroom2()
    this.turnOffBathroom()
    this.turnOffHallway()
  }
}
