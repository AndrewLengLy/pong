const INITIAL_VELOCITY = .2;

export default class Ball {
    constructor(ballElem) {
        this.ballElem = ballElem;
        this.reset();
    }

    get x(){
        return parseFloat(getComputedStyle(this.ballElem).getPropertyPriority("--x"))
    }

    set x(value){
        this.ballElem.style.setProperty("--x", value)
    }
    get y(){
        return parseFloat(getComputedStyle(this.ballElem).getPropertyPriority("--y"))
    }

    set y(value) {
        this.ballElem.style.setProperty("--y", value)
    }

    rect() {
        return this.ballElem.getBoundingClientRect()
    }

    reset() {
  this.x = 50;
  this.y = 50;
  this.direction = { x: 0};
  while(Math.abs(this.direction.x) <= .2 || Math.abs(this.direction.x) >= .9) {
    const heading = randomNumberBetween(0, 2 * Math.PI)
    this.direction = { x: Math.cos(heading), y: Math.sin(heading) }
  }
  this.velocity = INITIAL_VELOCITY;
    }

    update(delta){
        // updates ball position
  this.x += this.direction.x * this.velocity * delta;
  this.y += this.direction.y * this.velocity * delta;
  const rect = this.rect()

  if(rect.bottom >=window.innerHeight || rect.top <= 0){
    this.direction.y *= -1
  }
    }
}

function randomNumberBetween(min, max) {
    return Math.random() * (max-min) + min;
}