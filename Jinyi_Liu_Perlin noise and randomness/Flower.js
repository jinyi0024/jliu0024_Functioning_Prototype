class Flower {

  // position,leavenumber, Shape selection
  constructor(x, y, leaveNumber, shape) {
    this.x = x;
    this.y = y;
    this.leaveNumber = leaveNumber;
    this.shape = shape;
    this.noiseOffset = random(100);  // Initial noise offset
    this.colours = [];  // Array to hold colors for each leaf

    // Initialize colors for each leaf
    for (let i = 0; i < this.leaveNumber; i++) {
      let colourNum = Math.floor(random(0, 2));  // Randomize color choice
      switch (colourNum) {
        case 0:
          this.colours.push(color(341, 60, 79));
          break;
        case 1:
          this.colours.push(color(338, 48, 9));
          break;
      }
    }
  }

  display() {
    push();
    const interactRadius = 500;  // Radius for mouse interaction
    let d = dist(mouseX, mouseY, this.x, this.y);  // Distance from mouse to flower center
    let interactEffect = max(0, (interactRadius - d) / interactRadius);  // Calculate effect based on proximity

    for (let e = 1; e < this.leaveNumber; e++) {
      let nX = noise(this.noiseOffset + e * 0.1) * 200 - 1;  // X noise adjustment.
      let nY = noise(this.noiseOffset + e * 0.1 + 50) * 20 - 10;  // Y noise adjustment.
      strokeWeight(12);
      stroke(this.colours[e]);  // Use stored color for each leaf
      noFill();
      // Calculate angle from flower center to mouse
      let angle = atan2(mouseY - this.y, mouseX - this.x);

      // Adjust leaf endpoints to move away from mouse
      let dx = cos(angle) * 50 * interactEffect;  // X displacement
      let dy = sin(angle) * 50 * interactEffect;  // Y displacement
      switch (this.shape) {
        //The big flower with node
        case 0:
          curve(this.x - 900 + 100 * e + nX - dx - dx, this.y - 700 + nY - dy - dy,
            this.x, this.y,
            this.x + 400 - e * 25 + nX - dx - dx, this.y - 300 + nY - dy - dy,
            this.x - 400 + e * 40 + nX - dx - dx, this.y - 300 + nY - dy - dy)
          curve(
            this.x - 10 * e + nX - dx,
            this.y + 50 * e + nY - dy,
            this.x - 20,
            this.y + 40,
            this.x + 2 * e + nX - dx,
            this.y + 2 * e + nY - dy,
            this.x * 0.5 + nX - dx,
            this.y * 0.5 + nY - dy
          );
          curve(
            this.x - 10 * e + nX - dx,
            2 * this.y - (this.y + 50 * e) + nY - dy,
            this.x - 20,
            2 * this.y - (this.y + 40),
            this.x + 2 * e + nX - dx,
            2 * this.y - (this.y + 2 * e) + nY - dy,
            this.x * 0.5 + nX - dx,
            2 * this.y - (this.y * 0.5) + nY - dy
          );
          break;

        //The Bug like flower
        case 1:
          curve(this.x - 50 * e + nX - dx, this.y + 200 + nY - dy,
            this.x, this.y,
            this.x - 60 - 5 * e + nX - dx, this.y - 100 + 30 * e + nY - dy,
            this.x - 600 + 100 * e + nX - dx, this.y + 200 + nY - dy)

          curve(this.x + nX - dx, this.y + 200 + 20 * e + nY - dy,
            this.x, this.y,
            this.x + 150 - 20 * e + nX - dx, this.y - 200 + 50 * e + nY - dy,
            this.x + 300 - 100 * e + nX - dx, this.y + 250 + nY - dy)
          curve(
            this.x - 10 * e + nX - dx,
            this.y + 50 * e + nY - dy,
            this.x - 20,
            this.y + 40,
            this.x + 2 * e + nX - dx,
            this.y + 2 * e + nY - dy,
            this.x * 0.5 + nX - dx,
            this.y * 0.5 + nY - dy
          );
          curve(
            this.x - 10 * e + nX - dx,
            2 * this.y - (this.y + 50 * e) + nY - dy,
            this.x - 20,
            2 * this.y - (this.y + 40),
            this.x + 2 * e + nX - dx,
            2 * this.y - (this.y + 2 * e) + nY - dy,
            this.x * 0.5 + nX - dx,
            2 * this.y - (this.y * 0.5) + nY - dy
          );
          break;
        //The wave like flower on right

        case 2:
          curve(
            this.x + 60 * e + nX - dx,
            this.y - 300 * e + nY - dy,
            this.x,
            this.y,
            this.x - 190 - 12 * e + nX - dx,
            this.y - 380 + 40 * e + nY - dy,
            this.x * 0.3 + 450 + nX - dx,
            this.y * 0.8 + 100 + nY - dy);
          break;
        //The perfect flower in the centre

        case 3:
          curve(this.x + 200 + nX - dx, this.y + 200 + nY - dy,
            this.x, this.y,
            this.x + cos(e * 55) * 100 + nX - dx, this.y + sin(e * 55) * 100 + nY - dy,
            this.x + 200 + nX - dx, this.y + 100 + nY - dy)

          break;
        //The thin flower pointing to the left corner

        case 4:
          curve(
            this.x - 200 + nX - dx, this.y - 200 + nY - dy,
            this.x, this.y,
            this.x - sin(e * 25) * 100 + nX - dx, this.y - 100 * sin(e * 28) + nY - dy,
            this.x - 200 + nX - dx, this.y - 100 + nY - dy);
          break;
        //The rib like flower, LN cant go up to 7 or higher

        case 5:
          line(this.x, this.y,
            this.x + 200 + nX - dx, this.y - 200 + nY - dy
          );
          curve(this.x + 200 + nX - dx, this.y - 200 + nY - dy,
            this.x + 40 * e, this.y - 40 * e,
            this.x + 80 + 20 * e + nX - dx, this.y - 200 - 5 * e + nY - dy,
            this.x + 300 + 30 * e + nX - dx, this.y - 500 + nY - dy)
          curve(this.x + 200 + nX - dx, this.y + nY - dy,
            this.x + 40 * e, this.y - 40 * e,
            this.x + 100 + 30 * e + nX - dx, this.y - 50 - 25 * e + nY - dy,
            this.x + 500 + nX - dx, this.y - 500 + nY - dy)

          break;
        //The wave like flower number 2 on left

        case 6:
          curve(
            2 * this.x - (this.x + 60 * e) + nX - dx,
            2 * this.y - (this.y - 300 * e) + nY - dy,
            2 * this.x - this.x,
            2 * this.y - this.y,
            2 * this.x - (this.x - 190 - 12 * e) + nX - dx,
            2 * this.y - (this.y - 380 + 40 * e) + nY - dy,
            2 * this.x - (this.x * 0.3 + 450) + nX - dx,
            2 * this.y - (this.y * 0.8 + 100 + nY - dy)
          );
          break;


      }

      pop();
      this.noiseOffset += 0.0005;  // Increment noise offset for next frame
    }
  }
}