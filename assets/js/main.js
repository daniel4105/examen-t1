/* ========================================================
   Aplicación: Examen T1 - Ilustración Canvas Final PRO
   Autor: Daniel Alonso
   Materia: Aplicaciones Web
   Descripción General:
   Ilustración completa desarrollada con API Canvas que
   representa un paisaje natural con:
   - Cielo degradado
   - Sol con efecto radial
   - Montañas con sombra
   - Río con profundidad
   - Puente estructural
   - Casa con detalles
   - Vegetación (pinos y flores)
   - Nubes con sombra
   - Figura humana (stickman)
   - Aves en el cielo

   Técnicas utilizadas:
   - createLinearGradient()
   - createRadialGradient()
   - arc()
   - ellipse()
   - quadraticCurveTo()
   - shadowBlur y shadowOffset
   - Funciones reutilizables
======================================================== */

// =============================
// CONFIGURACIÓN INICIAL
// =============================

// Obtener referencia del canvas
const canvas = document.getElementById("canvas");

// Obtener contexto 2D para dibujar
const ctx = canvas.getContext("2d");

// Definir tamaño fijo del lienzo
canvas.width = 900;
canvas.height = 560;

// Variables de referencia para ancho y alto
const W = canvas.width;
const H = canvas.height;

/* ========================================================
    1. CIELO CON DEGRADADO
    Se crea un degradado vertical que simula
    profundidad atmosférica.
======================================================== */

// Crear degradado vertical
const skyGrad = ctx.createLinearGradient(0, 0, 0, H);
// Color superior (más intenso)
skyGrad.addColorStop(0, "#6ec6ff");

// Color inferior (más claro)
skyGrad.addColorStop(1, "#d0f0ff");

// Aplicar degradado
ctx.fillStyle = skyGrad;
ctx.fillRect(0, 0, W, H);


/* ========================================================
   2. SOL CON DEGRADADO RADIAL
   Se utiliza un degradado radial para dar
   sensación de volumen y luz.
======================================================== */

// Coordenada horizontal del sol
const sunX = 800;

// Crear degradado radial
const sunGrad = ctx.createRadialGradient(
    sunX, 70, 10,  // Centro interno
    sunX, 70, 40   // Centro externo
);

// Colores del centro al exterior
sunGrad.addColorStop(0, "#fff176"); // Amarillo claro
sunGrad.addColorStop(1, "#ff8f00"); // Naranja

// Dibujar círculo del sol
ctx.beginPath();
ctx.arc(sunX, 70, 40, 0, Math.PI * 2);
ctx.fillStyle = sunGrad;
ctx.fill();

/* -------- Rayos del sol -------- */
ctx.strokeStyle = "black";
ctx.lineWidth = 1.5;

// Bucle para generar 12 rayos equidistantes
for (let i = 0; i < 12; i++) {

    let angle = (i * Math.PI) / 6;

    ctx.beginPath();
    ctx.moveTo(
        sunX + Math.cos(angle) * 45,
        70 + Math.sin(angle) * 45
    );

    ctx.lineTo(
        sunX + Math.cos(angle) * 65,
        70 + Math.sin(angle) * 65
    );

    ctx.stroke();
}


/* ========================================================
   3. MONTAÑAS CON SOMBRA
   Se usa una función para reutilizar código.
   Se aplica sombra usando shadowBlur.
======================================================== */

function drawSnowyMountain(x, y, h, w) {

    ctx.save(); // Guardar estado actual

    // Configurar sombra
    ctx.shadowColor = "rgba(0,0,0,0.4)";
    ctx.shadowBlur = 15;
    ctx.shadowOffsetY = 10;

    // Montaña base
    ctx.fillStyle = "#808080";
    ctx.beginPath();
    ctx.moveTo(x - w / 2, y);
    ctx.lineTo(x, y - h);
    ctx.lineTo(x + w / 2, y);
    ctx.closePath();
    ctx.fill();

    ctx.restore(); // Restaurar estado

    // Nieve en la cima
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(x, y - h);
    ctx.lineTo(x - w / 8, y - h + h / 4);
    ctx.lineTo(x + w / 8, y - h + h / 4);
    ctx.fill();
}

// Dibujar montañas
drawSnowyMountain(550, 390, 220, 280);
drawSnowyMountain(680, 390, 180, 250);


/* ========================================================
   4. RÍO CON DEGRADADO
   Se aplica degradado vertical para simular
   profundidad y reflejo.
======================================================== */

const riverGrad = ctx.createLinearGradient(0, 390, 0, H);

riverGrad.addColorStop(0, "#5dade2");
riverGrad.addColorStop(1, "#1b4f72");

ctx.fillStyle = riverGrad;
ctx.fillRect(0, 390, W, H - 390);


/* ========================================================
   5. PUENTE
   Estructura básica con plataforma y columnas.
======================================================== */

ctx.strokeStyle = "black";
ctx.lineWidth = 2;

// Plataforma superior
ctx.fillStyle = "#5D4037";
ctx.fillRect(250, 350, 400, 20);
ctx.strokeRect(250, 350, 400, 20);

// Columnas verticales
ctx.fillRect(350, 370, 25, 60);
ctx.strokeRect(350, 370, 25, 60);

ctx.fillRect(525, 370, 25, 60);
ctx.strokeRect(525, 370, 25, 60);


/* ========================================================
   6. COLINAS
   Se utilizan elipses para generar formas
   suaves y naturales.
======================================================== */

ctx.fillStyle = "#228B22";

ctx.beginPath();
ctx.ellipse(100, 400, 250, 100, 0, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.ellipse(800, 400, 250, 100, 0, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

// =====================================
// FLORES EN COLINAS
// =====================================
function drawFlower(x, y) {
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
}

drawFlower(80, 390);
drawFlower(120, 310);
drawFlower(60, 420);
drawFlower(750, 390);
drawFlower(820, 410);
drawFlower(870, 420);
drawFlower(200, 420);
drawFlower(160, 320);
drawFlower(260, 420);
drawFlower(760, 450);
drawFlower(620, 400);
drawFlower(680, 450);
drawFlower(760, 350);


/* ========================================================
   7. CASA
   Construcción con cuerpo, techo,
   chimenea y ventana.
======================================================== */

// Fachada
ctx.fillStyle = "#f5deb3d6";
ctx.fillRect(50, 300, 80, 70);
ctx.strokeRect(50, 300, 80, 70);

// Techo
ctx.fillStyle = "#800020";
ctx.beginPath();
ctx.moveTo(40, 300);
ctx.lineTo(90, 250);
ctx.lineTo(140, 300);
ctx.closePath();
ctx.fill();
ctx.stroke();

// Chimenea
ctx.fillStyle = "orange";
ctx.fillRect(110, 260, 15, 30);
ctx.strokeRect(110, 260, 15, 30);

// Ventana
ctx.fillStyle = "#87CEFA";
ctx.fillRect(75, 315, 30, 30);
ctx.strokeRect(75, 315, 30, 30);
// =====================================
// PINOS
// =====================================
// Función reutilizable para dibujar un árbol tipo pino.
// Parámetros:
// x -> coordenada horizontal base del árbol
// y -> coordenada vertical base del árbol
// scale -> factor de escala para aumentar o reducir tamaño
function drawPine(x, y, scale = 1) {

    // Se crea un degradado vertical para simular volumen
    // (verde más claro arriba, más oscuro abajo)
    const grad = ctx.createLinearGradient(
        x,
        y - 40 * scale,
        x,
        y + 30 * scale
    );

    grad.addColorStop(0, "#2e7d32"); // Verde claro
    grad.addColorStop(1, "#1b5e20"); // Verde oscuro

    ctx.fillStyle = grad;

    // ---------- Parte inferior del follaje ----------
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 15 * scale, y + 30 * scale);
    ctx.lineTo(x + 15 * scale, y + 30 * scale);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // ---------- Parte media del follaje ----------
    ctx.beginPath();
    ctx.moveTo(x, y - 15 * scale);
    ctx.lineTo(x - 20 * scale, y + 20 * scale);
    ctx.lineTo(x + 20 * scale, y + 20 * scale);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // ---------- Parte superior del follaje ----------
    ctx.beginPath();
    ctx.moveTo(x, y - 35 * scale);
    ctx.lineTo(x - 25 * scale, y + 5 * scale);
    ctx.lineTo(x + 25 * scale, y + 5 * scale);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // ---------- Tronco ----------
    ctx.fillStyle = "#5D4037"; // Marrón
    ctx.fillRect(
        x - 4 * scale,
        y + 30 * scale,
        8 * scale,
        15 * scale
    );
    ctx.strokeRect(
        x - 4 * scale,
        y + 30 * scale,
        8 * scale,
        15 * scale
    );
}

// Pines lado izquierdo (escala normal)
drawPine(30, 310, 0.8);
drawPine(150, 315, 0.9);

// Pines lado derecho (más grandes para dar profundidad visual)
drawPine(680, 360, 1.2);
drawPine(720, 350, 1.3);
drawPine(760, 355, 1.25);
drawPine(800, 350, 1.35);
drawPine(840, 360, 1.2);


/* ========================================================
   8. NUBES CON SOMBRA
   Se construyen con múltiples círculos superpuestos
   para generar una forma orgánica.
======================================================== */

// Función reutilizable para dibujar una nube
function drawCloud(x, y) {

    // Guardar estado actual del contexto
    ctx.save();

    // Aplicar sombra suave para dar profundidad
    ctx.shadowColor = "rgba(0,0,0,0.4)";
    ctx.shadowBlur = 15;

    ctx.fillStyle = "white";

    // Se combinan tres círculos
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);             // círculo izquierdo
    ctx.arc(x + 25, y - 10, 25, 0, Math.PI * 2);  // círculo central
    ctx.arc(x + 50, y, 20, 0, Math.PI * 2);       // círculo derecho
    ctx.fill();

    // Restaurar estado para evitar que la sombra afecte otros elementos
    ctx.restore();
}

// Nubes distribuidas en el cielo
drawCloud(150, 100);
drawCloud(400, 50);
drawCloud(650, 90);


/* ========================================================
   9. STICKMAN
   Figura humana minimalista compuesta por
   un círculo (cabeza) y líneas (cuerpo).
======================================================== */

// Coordenadas base del personaje
const sX = 450;
const sY = 305;

//Color y ancho de lineas
ctx.strokeStyle = "black";
ctx.lineWidth = 2;

// Cabeza
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(sX, sY, 8, 0, Math.PI * 2);
ctx.fill();

// Cuerpo + extremidades
ctx.beginPath();

// Torso
ctx.moveTo(sX, sY + 8);
ctx.lineTo(sX, sY + 30);

// Brazo izquierdo
ctx.moveTo(sX, sY + 15);
ctx.lineTo(sX - 12, sY + 25);

// Brazo derecho
ctx.moveTo(sX, sY + 15);
ctx.lineTo(sX + 12, sY + 25);

// Pierna izquierda
ctx.moveTo(sX, sY + 30);
ctx.lineTo(sX - 10, sY + 45);

// Pierna derecha
ctx.moveTo(sX, sY + 30);
ctx.lineTo(sX + 10, sY + 45);

ctx.stroke();


/* =====================================
   AVES SENCILLAS EN EL CIELO
   ===================================== */

// Configuración del trazo
ctx.strokeStyle = "black";
ctx.lineWidth = 1.5;

// Función para dibujar un ave minimalista.
// Se usa una curva cuadrática para simular alas abiertas.
function drawBird(x, y, size = 15) {

    ctx.beginPath();

    // Curva central que representa las alas
    ctx.moveTo(x - size, y);
    ctx.quadraticCurveTo(
        x,              // punto de control
        y - size,       // altura del ala
        x + size, y
    );

    ctx.stroke();
}

// Grupo de aves distribuidas en distintas posiciones
drawBird(200, 150, 12);
drawBird(260, 140, 14);
drawBird(300, 110, 10);
drawBird(500, 130, 13);
drawBird(530, 115, 11);
drawBird(600, 150, 16);