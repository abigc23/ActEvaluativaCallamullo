let x1 = 100; // Posición inicial en x del círculo rojo
let y1 = 300; // Posición inicial en y del círculo rojo
let xSpeedrojo = 6; // Velocidad en el eje x del círculo rojo
let ySpeedrojo = 6; // Velocidad en el eje y del círculo rojo
let colorrojo;

let x2 = 500; // Posición inicial en x del círculo azul
let y2 = 300; // Posición inicial en y del círculo azul
let xSpeedazul = 3; // Velocidad de eje x del círculo azul
let ySpeedazul = 3; // Velocidad de eje y del círculo azul
let colorazul;
let colorvioleta;

function setup() {
  createCanvas(600, 600);
  colorazul = color(0, 0, 255); // Color azul
  colorrojo = color(255, 0, 0);
  colorvioleta = color(255, 0, 255);
}

function draw() {
  background(220);
  noStroke();
  
  // Círculo rojo
  fill(colorrojo);
  ellipse(x1, y1, 50, 50);
  
  // Círculo azul
  fill(colorazul);
  ellipse(x2, y2, 50, 50);

  // Movimiento del círculo rojo
  x1 += xSpeedrojo;
  y1 += ySpeedrojo;
  
  // Bordes para el círculo rojo
  if (x1 < 25 || x1 > 575) {
    xSpeedrojo *= -1;
  }
  if (y1 < 25 || y1 > 575) {
    ySpeedrojo *= -1;
    if(y1 < 25){
      colorrojo = color(random(200, 255), random(200, 255), random(200, 255));
    }
  }
  
  // Movimiento del círculo azul
  x2 += xSpeedazul;
  y2 += ySpeedazul;
  
  // Bordes para el círculo azul
  if (x2 < 25 || x2 > 575) {
    xSpeedazul *= -1;
  }
  if (y2 < 25 || y2 > 575) {
    ySpeedazul *= -1;
    if(y2 > 25){
      colorazul = color(random(100, 255), random(100, 255), random(100, 255));
    }
    
  }
}
