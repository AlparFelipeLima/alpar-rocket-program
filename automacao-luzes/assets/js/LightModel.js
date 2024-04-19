class LightModel {
  _room = false;
  _kitchen = false;
  _laundry = false;
  _bedroom1 = false;
  _bedroom2 = false;
  _hallway = false;
  _bathroom = false;

  get room() {
    return this._room;
  }
  set room(value) {
    this._room = value;
  }

  get kitchen() {
    return this._kitchen;
  }
  set kitchen(value) {
    this._kitchen = value;
  }

  get laundry() {
    return this._laundry;
  }
  set laundry(value) {
    this._laundry = value;
  }

  get bedroom1() {
    return this._bedroom1;
  }
  set bedroom1(value) {
    this._bedroom1 = value;
  }

  get bedroom2() {
    return this._bedroom2;
  }
  set bedroom2(value) {
    this._bedroom2 = value;
  }

  get hallway() {
    return this._hallway;
  }
  set hallway(value) {
    this._hallway = value;
  }

  get bathroom() {
    return this._bathroom;
  }
  set bathroom(value) {
    this._bathroom = value;
  }

  get all() {
    return this._room && this._kitchen && this._laundry && this.bedroom1 && this.bedroom2 && this.bathroom && this.hallway
  }
  set all(value) {
    this.room = value
    this.kitchen = value
    this.laundry = value
    this.bedroom1 = value
    this.bedroom2 = value
    this.bathroom = value
    this.hallway = value
  }
}
