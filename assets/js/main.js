/* ========================================================
Aplicación: Paisaje Evolucionado - API Canvas
Autor: Daniel Alonso
Descripción:
Versión mejorada del paisaje utilizando degradados,
sombras, profundidad visual y elementos rústicos.
Se aplican técnicas de iluminación, perspectiva y
superposición para generar mayor realismo.
========================================================
*/

// Obtención del canvas desde el DOM
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Definición del tamaño del lienzo
canvas.width = 900;
canvas.height = 560;

// Variables auxiliares para ancho y alto
const W = canvas.width;
const H = canvas.height;


/* ========================================================
   1. FONDO: CIELO CON DEGRADADO
   --------------------------------------------------------
   Se utiliza createLinearGradient() para generar una
   transición vertical de color que simula profundidad
   atmosférica.
======================================================== */
const skyGradient = ctx.createLinearGradient(0, 0, 0, 350);

// Color inicial (parte superior del cielo)
skyGradient.addColorStop(0, "#4facfe");

// Color final (zona inferior del cielo)
skyGradient.addColorStop(1, "#00f2fe");

// Aplicación del degradado como fondo
ctx.fillStyle = skyGradient;
ctx.fillRect(0, 0, W, H);


/* ========================================================
   2. SOL CON RESPLANDOR
   --------------------------------------------------------
   Se aplica shadowBlur y shadowColor para crear
   un efecto de iluminación alrededor del sol.
======================================================== */

// Configuración de sombra luminosa
ctx.shadowBlur = 30;
ctx.shadowColor = "yellow";

// Dibujo del sol (círculo)
ctx.beginPath();
ctx.arc(90, 100, 45, 0, Math.PI * 2);
ctx.fillStyle = "#FFD700";
ctx.fill();

// Reset de sombra para evitar afectar otros elementos
ctx.shadowBlur = 0;


/* ========================================================
   3. MONTAÑAS DE FONDO (PROFUNDIDAD)
   --------------------------------------------------------
   Se crea una función reutilizable para dibujar montañas
   triangulares con detalle de nieve en la cima.
======================================================== */

function drawMountain(x, y, h, w, color) {

    // Base de la montaña
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x - w/2, y);     // Punto izquierdo base
    ctx.lineTo(x, y - h);       // Pico
    ctx.lineTo(x + w/2, y);     // Punto derecho base
    ctx.closePath();
    ctx.fill();

    // Detalle de nieve (simula altura y frío)
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(x, y - h);
    ctx.lineTo(x - w/10, y - h + h/4);
    ctx.lineTo(x + w/10, y - h + h/4);
    ctx.closePath();
    ctx.fill();
}

// Montañas en segundo plano (colores más fríos = profundidad)
drawMountain(750, 390, 250, 400, "#546E7A");
drawMountain(600, 390, 180, 350, "#78909C");


/* ========================================================
   4. RÍO CON REFLEJO
   --------------------------------------------------------
   Se crea degradado vertical para simular profundidad
   del agua y reflejo del cielo.
======================================================== */

const waterGrad = ctx.createLinearGradient(0, 390, 0, H);
waterGrad.addColorStop(0, "#1e3c72");
waterGrad.addColorStop(1, "#2a5298");

ctx.fillStyle = waterGrad;
ctx.fillRect(0, 390, W, H - 390);


/* ========================================================
   5. COLINAS LATERALES
   --------------------------------------------------------
   Se usan curvas cuadráticas para generar formas
   orgánicas en el terreno.
======================================================== */

// Colina izquierda
ctx.fillStyle = "#2d5a27";
ctx.beginPath();
ctx.moveTo(0, 390);
ctx.quadraticCurveTo(150, 250, 300, 390);
ctx.fill();

// Colina derecha
ctx.beginPath();
ctx.moveTo(600, 390);
ctx.quadraticCurveTo(750, 250, 900, 390);
ctx.fill();


/* ========================================================
   6. PUENTE RÚSTICO
   --------------------------------------------------------
   Se utilizan rectángulos y sombras para generar
   sensación de volumen.
======================================================== */

// Pilares del puente
const piers = [320, 450, 580];

piers.forEach(x => {

    // Pilar principal
    ctx.fillStyle = "#3e2723";
    ctx.fillRect(x - 10, 340, 20, 100);

    // Sombra proyectada en el agua
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(x - 10, 390, 20, 40);
});

// Plataforma del puente
ctx.fillStyle = "#795548";

// Configuración de sombra estructural
ctx.shadowBlur = 5;
ctx.shadowOffsetY = 5;
ctx.shadowColor = "rgba(0,0,0,0.5)";

ctx.fillRect(250, 330, 400, 20);

// Reset sombras
ctx.shadowBlur = 0;
ctx.shadowOffsetY = 0;

// Cuerdas del puente (curvas Bézier)
ctx.strokeStyle = "#4e342e";
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(250, 290);
ctx.bezierCurveTo(350, 310, 550, 310, 650, 290);
ctx.stroke();


/* ========================================================
   7. FIGURA HUMANA (SILUETA)
   --------------------------------------------------------
   Se crea una figura simple usando formas básicas.
======================================================== */

const px = 450;
const py = 295;

ctx.fillStyle = "#212121";

// Cabeza
ctx.beginPath();
ctx.arc(px, py, 7, 0, Math.PI * 2);
ctx.fill();

// Tronco
ctx.fillRect(px - 4, py + 7, 8, 20);

// Piernas
ctx.beginPath();
ctx.moveTo(px - 4, py + 27);
ctx.lineTo(px - 10, py + 40);

ctx.moveTo(px + 4, py + 27);
ctx.lineTo(px + 10, py + 40);

ctx.stroke();