function setup(){
    createCanvas(600,400)
    background (0)
}



function draw() {
    stroke(255)
    const offsetX = mouseX + random(-20,20)
    const offsetY = mouseY + random(-100,100)
    line(mouseX, mouseY, mouseX, height)
}