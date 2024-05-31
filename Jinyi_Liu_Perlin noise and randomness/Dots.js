class Dot {

  // position,number of Dots 
  constructor(x, y, colourNum) {
    this.x = x;
    this.y = y;
    this.colourNum = colourNum
    this.xOffset = random(10);  // Random offset for x noise
    this.yOffset = random(10);  // Random offset for y noise
    this.radius = 20;  // Range of movement around the original position
    //Three different colours
    switch (this.colourNum) {
      case 0:
        this.colour = color(350, 25, 100);
        break;
      case 1:
        this.colour = color(0, 0, 0);
        break;
      case 2:
        this.colour = color(0, 100, 55);
        break;
    }
  }

  display() {
    push();
    const interactRadius = 500;  // Radius for mouse interaction
    let d = dist(mouseX, mouseY, this.x, this.y);  // Distance from mouse to flower center
    let interactEffect = max(0, (interactRadius - d) / interactRadius);  // Calculate effect based on proximity
    // Update position using noise
    let nx = this.x + (noise(this.xOffset) - 0.5) * 2 * this.radius;  // Adjust by radius
    let ny = this.y + (noise(this.yOffset) - 0.5) * 2 * this.radius;  // Adjust by radius
    let angle = atan2(mouseY - this.y, mouseX - this.x);
    // Adjust leaf endpoints to move away from mouse
    let dx = cos(angle) * 50 * interactEffect;  // X displacement
    let dy = sin(angle) * 50 * interactEffect;  // Y displacement
    strokeWeight(8);
    stroke(this.colour)
    fill(this.colour);
    circle(nx - dx, ny - dy, 10);  // Use updated positions
    pop();
    // Increment noise offsets for smooth motion
    this.xOffset += 0.01;
    this.yOffset += 0.01;



  }
}