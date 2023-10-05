// bases
// canvas = lienzo
// width = ancho
// height = alto
// Cordenadas = x, y

//          Y
//    -+    l
//          l    ++
// ---------l--------- X
//     --   l    +-
//          l

// -----------------------

// CORDENADA DE ORIHEN EN PANTALLA
// ----------------------------
// l
// l
// l          ++
// l
// l         solo tenemos cordenadas positivas
// l
// ---------------------------------------

// funciones

// nombredelafuncion (paremetros, parametros)
//   //instriciones
//   //instruciones

// elipse(cordenada en X, cordenada en y, ancho, alto)
// ---------------------------------------------
// formas basicas en forma de funcion

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(600, 600);
  // stroke(255);
}

function draw() {
  background(100);
  // PROPIEDADES DE LAS FIGURAS
  // STROKEWIGHT: Establece el ancho de trazo de utilizado para formas las ifguras en la unidad de pixeles

  strokeWeight(5);
  // hacer esquinas redondas, LIZAS
  // strokeJoin(round)
  strokeJoin(BEVEL);

  // circle(mouseX, mouseY, 20);

  // estable como van a terminar las puntas (SQUARE, ROUND)
  strokeCap(ROUND);

  // rectMode: modifica la ubicación desde la que se dibujan los rectángulos cambiando la forma en que se interpretan los parámetros dados
  // modo prederteminado CORNER - 2 primero para metros son la esquia superior izquierda de la figura, los otros 2 son ancho y alto.
  // CORNERS, interpreta los primeros 2 parametros como la ubicación de una esquina, y los parámetros terceros y cuartos como la ubicacion de la esquina opuestas.
  // CENTER, LOS 2 primeros parametros son el centro, los 2 son alto y ancho, RECOMENDADO
  // RADIUS TAMBIEN USA LOS 2 PRIMEROS PARAMENTROS COMO CENTRO, PERO USO LOS PARAMETSO 3 Y 4 PARA ESPECIFICAR LA MITAD DEL ANCHO Y ALTO DE LAS FORMAS
  rectMode(CORNERS);

  // ellipseMode()intepreta los parametros de la elipse
  // CENTER, predertinado
  // RADIUS, usa los primeros parametros como punto central, pero el terecero y cuarto para identificar la mitad del alto y ancho
  // CORNER, interpeta los 2 primeros como la esquina superior de la figura, mientras los 2 son alto y ancho
  // CORNERS, INTERPRETA LOS PRIMEROS 2 PARAMETRO COMO LA UBICACION DE UNA ESQUINA, Y LOS PARAMETRS TERCER Y CUARTO COMO LA UBICACION DE LA ESQUINA OPUESTA.

  point(300, 300);
  // lineas resibe 4 parametos (x1,y1, donde inicia la linea, y un y1, y2 donde termina)
  line(300, 0, 300, 600);
  // 300 es la mitad de canvas
  line(0, 300, 600, 300);

  // triangulo, resive 6 parametros (los primeros especifican en punto 1
  // x1,y1 - los 2 segundos especifican el puntos X2,Y2 - los 2 ultimos especifican
  // el punto y3,x3)
  triangle(300, 200, 300, 300, 230, 300);

  // cuadrilatero, pologono de  4 lados, similar a un rectangulo, pero
  // angulos estan limitados a 4 lados, (resibe 8 parametos
  // punto 1 (x1,y1), punto 1 (x2,y2),punto 1 (x3,y3),punto 1 (x4,y4),
  // funcion en relacion manecillas del reloj
  quad(50, 50, 200, 50, 200, 200, 50, 300);

  // rectangulo, este es de 90 grados, 4 paramentos
  // el primero y el segundoson puntos x y y en la esquima superior isquierda
  // el tercero es width, el ancho de la figura, y height alto de la figura.alto

  rect(50, 0, 250, 50);

  // elipse, con 4 parametos 2primero son el ancho y alto
  ellipse(250, 150, 50, 50);

  // AbortController, resibe seis parametos, con voca de pacman
  // x y ancho/width, alto/Height, start donde inicia la boca, y stop donde termina
  // tranaja 4 tipo de datos, radianes, contantes(HALF-PI), ANGULOS (radians(350))

  arc(300, 300, 300, 300, 4.71, 0);
}
