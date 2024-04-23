function setup(){
    createCanvas(600,400)
    background (0)
}



/*function draw() {
    stroke(255)
    const offsetX = mouseX + random(-20,20)
    const offsetY = mouseY + random(-100,100)
    line(mouseX, mouseY, mouseX, height)
}
*/

function draw() {
    background(220)

    

    for (let i = bubbles.length - 1; i>= 0; i--) {
        bubbles[i].display()
        bubbles[i].move()

        if (bubbles[i].y < -50) {
            bubbles[i].splice(i,1)
        }
    }

    if (random() < 0.05) {
        let x = random(width)
        let y = random(height,height * 2)
        let speed = random(1, 3)
        bubbles.push(new Burnuja(x,y,speed))
    }
}



