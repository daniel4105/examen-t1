
/* ========================================================
   Aplicación: Examen T1 - Ilustración Canvas Final
   Autor: Daniel Alonso / Gemini Collab + Mejoras finales
   Descripción: Paisaje con puente, casa con ventana, 
                montañas nevadas, sol con rayos, stickman,
                pinos, flores y olas.
   ======================================================== */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 560;
const W = canvas.width;
const H = canvas.height;

// =====================================
// 1. CIELO
// =====================================
ctx.fillStyle = "#87CEEB";
ctx.fillRect(0, 0, W, H);

// =====================================
// 2. SOL CON RAYOS
// =====================================
const sunX = 800;

ctx.beginPath();
ctx.arc(sunX, 70, 40, 0, Math.PI * 2);
ctx.fillStyle = "#FDC813";
ctx.fill();

ctx.strokeStyle = "black";
ctx.lineWidth = 1.5;

for (let i = 0; i < 12; i++) {
    let angle = (i * Math.PI) / 6;
    ctx.beginPath();
    ctx.moveTo(sunX + Math.cos(angle) * 45, 70 + Math.sin(angle) * 45);
    ctx.lineTo(sunX + Math.cos(angle) * 65, 70 + Math.sin(angle) * 65);
    ctx.stroke();
}

// =====================================
// 3. MONTAÑAS NEVADAS
// =====================================
function drawSnowyMountain(x, y, h, w) {
    ctx.fillStyle = "#808080";
    ctx.beginPath();
    ctx.moveTo(x - w / 2, y);
    ctx.lineTo(x, y - h);
    ctx.lineTo(x + w / 2, y);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(x, y - h);
    ctx.lineTo(x - w / 8, y - h + h / 4);
    ctx.lineTo(x + w / 8, y - h + h / 4);
    ctx.fill();
}

drawSnowyMountain(550, 390, 220, 280);
drawSnowyMountain(680, 390, 180, 250);

// =====================================
// 4. RÍO
// =====================================
ctx.fillStyle = "#4682B4";
ctx.fillRect(0, 390, W, H - 390);

// =====================================
// 5. PUENTE
// =====================================
ctx.fillStyle = "#5D4037";
ctx.fillRect(250, 350, 400, 15);

for (let i = 0; i < 5; i++) {
    ctx.fillRect(280 + (i * 80), 365, 10, 50);
}


// =====================================
// 6. COLINAS
// =====================================
ctx.fillStyle = "#228B22";

ctx.beginPath();
ctx.ellipse(100, 400, 250, 100, 0, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.ellipse(800, 400, 250, 100, 0, 0, Math.PI * 2);
ctx.fill();

// =====================================
// 7. CASA
// =====================================
ctx.fillStyle = "#A52A2A";
ctx.fillRect(50, 300, 80, 70);

ctx.fillStyle = "#2F4F4F";
ctx.beginPath();
ctx.moveTo(40, 300);
ctx.lineTo(90, 250);
ctx.lineTo(140, 300);
ctx.fill();

// Chimenea
ctx.fillStyle = "black";
ctx.fillRect(110, 260, 15, 30);

// Humo
ctx.fillStyle = "rgba(200,200,200,0.6)";
ctx.beginPath(); ctx.arc(120, 245, 8, 0, Math.PI * 2); ctx.fill();
ctx.beginPath(); ctx.arc(130, 230, 10, 0, Math.PI * 2); ctx.fill();

// Ventana
ctx.fillStyle = "white";
ctx.fillRect(75, 315, 30, 30);
ctx.strokeStyle = "black";
ctx.strokeRect(75, 315, 30, 30);
ctx.beginPath();
ctx.moveTo(90, 315); ctx.lineTo(90, 345);
ctx.moveTo(75, 330); ctx.lineTo(105, 330);
ctx.stroke();

// =====================================
// FUNCIÓN PINO
// =====================================
function drawPine(x, y, scale = 1) {
    ctx.fillStyle = "#0B6623";

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 15 * scale, y + 30 * scale);
    ctx.lineTo(x + 15 * scale, y + 30 * scale);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x, y - 15 * scale);
    ctx.lineTo(x - 20 * scale, y + 20 * scale);
    ctx.lineTo(x + 20 * scale, y + 20 * scale);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x, y - 35 * scale);
    ctx.lineTo(x - 25 * scale, y + 5 * scale);
    ctx.lineTo(x + 25 * scale, y + 5 * scale);
    ctx.fill();

    ctx.fillStyle = "#5D4037";
    ctx.fillRect(x - 4 * scale, y + 30 * scale, 8 * scale, 15 * scale);
}

// Pines junto a casa
drawPine(30, 310, 0.8);
drawPine(150, 315, 0.9);

// Grupo de pinos colina derecha
drawPine(680, 360, 0.7);
drawPine(720, 350, 0.8);
drawPine(760, 355, 0.75);
drawPine(800, 350, 0.85);
drawPine(840, 360, 0.7);


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
drawFlower(120, 410);
drawFlower(60, 420);
drawFlower(750, 390);
drawFlower(820, 410);
drawFlower(870, 420);

// =====================================
// STICKMAN
// =====================================
const sX = 450;
const sY = 305;

ctx.strokeStyle = "black";
ctx.lineWidth = 2;

ctx.beginPath();
ctx.arc(sX, sY, 8, 0, Math.PI * 2);
ctx.moveTo(sX, sY + 8); ctx.lineTo(sX, sY + 30);
ctx.moveTo(sX, sY + 15); ctx.lineTo(sX - 12, sY + 25);
ctx.moveTo(sX, sY + 15); ctx.lineTo(sX + 12, sY + 25);
ctx.moveTo(sX, sY + 30); ctx.lineTo(sX - 10, sY + 45);
ctx.moveTo(sX, sY + 30); ctx.lineTo(sX + 10, sY + 45);
ctx.stroke();

// =====================================
// AVES
// =====================================
function drawBird(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y + 5);
    ctx.lineTo(x + 20, y);
    ctx.stroke();
}

drawBird(500, 100);
drawBird(530, 120);
drawBird(560, 100);
drawBird(250, 140);
drawBird(280, 120);
drawBird(310, 140);

// =====================================
// NUBES
// =====================================
function drawCloud(x, y) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.arc(x + 25, y - 10, 25, 0, Math.PI * 2);
    ctx.arc(x + 50, y, 20, 0, Math.PI * 2);
    ctx.fill();
}

drawCloud(150, 100);
drawCloud(400, 50);
drawCloud(650, 90);

// =====================================
// OLAS GRANDES ESTÉTICAS BAJO PUENTE
// =====================================
ctx.strokeStyle = "black";
ctx.lineWidth = 2;

function drawBridgeWave(x, y) {
    ctx.beginPath();
    ctx.moveTo(x - 25, y);

    ctx.quadraticCurveTo(x - 15, y - 10, x - 5, y);
    ctx.quadraticCurveTo(x + 5, y + 10, x + 15, y);
    ctx.quadraticCurveTo(x + 25, y - 10, x + 35, y);

    ctx.stroke();
}

// Posicionadas justo debajo de cada columna
for (let i = 0; i < 3; i++) {
    let waveX = 373 + (i * 70);
    drawBridgeWave(waveX, 420);
}

// =====================================
// OLAS PEQUEÑAS DISPERSAS
// =====================================
ctx.lineWidth = 1.2;

function drawSmallWave(x, y, size = 15) {
    ctx.beginPath();
    ctx.moveTo(x - size, y);
    ctx.quadraticCurveTo(x, y - 6, x + size, y);
    ctx.stroke();
}

// Distribución más natural
drawSmallWave(100, 535, 18);
drawSmallWave(200, 535, 18);
drawSmallWave(350, 455, 12);
drawSmallWave(350, 500, 12);
drawSmallWave(500, 445, 16);
drawSmallWave(500, 505, 16);
drawSmallWave(650, 500, 14);
drawSmallWave(780, 535, 18);
drawSmallWave(420, 470, 10);
drawSmallWave(600, 530, 13);