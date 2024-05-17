let x1 = 100; // Posición inicial en x del círculo rojo
let y1 = 300; // Posición inicial en y del círculo rojo
let xSpeedrojo = 6; // Velocidad en el eje x del círculo rojo
let ySpeedrojo = 6; // Velocidad en el eje y del círculo rojo
let colorrojo=255;

let x2 = 500; // Posición inicial en x del círculo azul
let y2 = 300; // Posición inicial en y del círculo azul
let xSpeedazul = 3; // Velocidad de eje x del círculo azul
let ySpeedazul = 3; // Velocidad de eje y del círculo azul
let colorazul= 255;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  noStroke();
  
  // Círculo rojo
  fill(colorrojo, 0, 0);
  ellipse(x1, y1, 70, 70);
  
  // Círculo azul
  fill(0, 0, colorazul);
  ellipse(x2, y2, 70, 70);

  // Movimiento del círculo rojo
  x1 += xSpeedrojo;
  y1 += ySpeedrojo;
  
  // Bordes para el círculo rojo
  if (x1 < 35 || x1 > 565) {
    xSpeedrojo *= -1;
  }
  if (y1 < 35 || y1 > 565) {
    ySpeedrojo *= -1;
    if(y1 < 35){
      colorrojo = colorrojo - 20;
      if(colorrojo <= 120){
        colorrojo=255;
      }
    }
  }
  
  // Movimiento del círculo azul
  x2 += xSpeedazul;
  y2 += ySpeedazul;
  
  // Bordes para el círculo azul
  if (x2 < 35 || x2 > 565) {
    xSpeedazul *= -1;
  }
  if (y2 < 35 || y2 > 565) {
    ySpeedazul *= -1;
      if(y2 > 35){
        colorazul = colorazul - 20;
        if(colorazul <= 120){
          colorazul=255;
        }
    }
  }
}
