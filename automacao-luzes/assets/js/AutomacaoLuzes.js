class AutomacaoLuzes {
    static instance;
    observers = []

    room = false;
    kitchen = false;
    laundry = false;
    bedroom1 = false;
    bedroom2 = false;
    hallway = false;
    bathroom = false;
    all = false;

    toggle(convenient) {
        if(convenient == 'room') {
            this.room = !this.room
        } else if(convenient == 'kitchen') {
            this.kitchen = !this.kitchen
        } else if(convenient == 'laundry') {
            this.laundry = !this.laundry
        } else if(convenient == 'bedroom1') {
            this.bedroom1 = !this.bedroom1
        } else if(convenient == 'bedroom2') {
            this.bedroom2 = !this.bedroom2
        } else if(convenient == 'hallway') {
            this.hallway = !this.hallway
        } else if(convenient == 'bathroom') {
            this.bathroom = !this.bathroom
        } else if(convenient == 'all') {
            if(this.room && this.kitchen && this.laundry && this.bedroom1 && this.bedroom2 && this.hallway && this.bathroom) {
                this.all = false
            } else {
                this.all = true;
            }
            this.room = this.all
            this.kitchen = this.all
            this.laundry = this.all
            this.bedroom1 = this.all
            this.bedroom2 = this.all
            this.hallway = this.all
            this.bathroom = this.all
        }

        this.executar()
    }

    getState(convenient) {
        if(convenient == 'room') {
            return this.room
        } else if (convenient == 'kitchen') {
            return this.kitchen
        }
    }

    inscrever(funcao) {
        this.observers.push(funcao)
    }

    executar() {
        console.log(this.observers)
        this.observers.forEach((funcao)=>{
            funcao()
        })
    }
}

AutomacaoLuzes.instance = new AutomacaoLuzes()