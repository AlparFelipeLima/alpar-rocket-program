class LightController {
    static instance
    data
    view

    constructor() {
        this.data = new LightModel()
        this.view = new LightView()
    }

    toggleRoom() {
        this.data.room = !this.data.room;
        if(this.data.room) {
            this.view.turnOnRoom()
        } else {
            this.view.turnOffRoom()
        }
        this.execute()
    }

    toggleKitchen() {
        this.data.kitchen = !this.data.kitchen;
        if(this.data.kitchen) {
            this.view.turnOnKitchen()
        } else {
            this.view.turnOffKitchen()
        }
        this.execute()
    }

    toggleLaundry() {
        this.data.laundry = !this.data.laundry;
        if(this.data.laundry) {
            this.view.turnOnLaundry()
        } else {
            this.view.turnOffLaundry()
        }
        this.execute()
    }

    toggleBedroom1() {
        this.data.bedroom1 = !this.data.bedroom1;
        if(this.data.bedroom1) {
            this.view.turnOnBedroom1()
        } else {
            this.view.turnOffBedroom1()
        }
        this.execute()
    }

    toggleBedroom2() {
        this.data.bedroom2 = !this.data.bedroom2;
        if(this.data.bedroom2) {
            this.view.turnOnBedroom2()
        } else {
            this.view.turnOffBedroom2()
        }
        this.execute()
    }

    toggleBathroom() {
        this.data.bathroom = !this.data.bathroom;
        if(this.data.bathroom) {
            this.view.turnOnBathroom()
        } else {
            this.view.turnOffBathroom()
        }
        this.execute()
    }

    toggleHallway() {
        this.data.hallway = !this.data.hallway;
        if(this.data.hallway) {
            this.view.turnOnHallway()
        } else {
            this.view.turnOffHallway()
        }
        this.execute()
    }

    toggleAll() {
        this.data.all = !this.data.all;
        if(this.data.all) {
            this.view.turnOnAll()
        } else {
            this.view.turnOffAll()
        }
        this.execute()
    }

    // OBSERVERS
    observers = []
    subscribe(observeFn) {
        this.observers.push(observeFn)
    }
    execute() {
        this.observers.forEach((observeFn)=>{
            observeFn(data)
        })
    }
    
}

LightController.instance = new LightController()