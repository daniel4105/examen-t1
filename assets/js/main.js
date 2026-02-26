/* ========================================================
   Aplicación: Examen T1 - Ilustración Canvas Final
   Autor: Daniel Alonso / Gemini Collab
   Descripción: Paisaje con puente, casa con ventana, 
                montañas nevadas, sol con rayos y stickman.
   ======================================================== */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 560;
const W = canvas.width;
const H = canvas.height;

// 1. CIELO
ctx.fillStyle = "#87CEEB";
ctx.fillRect(0, 0, W, H);

// 2. SOL CON RAYOS (NUEVO: Líneas negras)
const sunX = 800;
const sunY = 700; // Ajustado un poco la posición para que luzca mejor
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

// 3. MONTAÑAS GRISES CON PUNTA BLANCA (NUEVAS)
function drawSnowyMountain(x, y, h, w) {
    // Base Gris
    ctx.fillStyle = "#808080";
    ctx.beginPath();
    ctx.moveTo(x - w / 2, y);
    ctx.lineTo(x, y - h);
    ctx.lineTo(x + w / 2, y);
    ctx.fill();
    // Punta Blanca (Triángulo)
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(x, y - h);
    ctx.lineTo(x - w / 8, y - h + h / 4);
    ctx.lineTo(x + w / 8, y - h + h / 4);
    ctx.fill();
}
drawSnowyMountain(550, 390, 220, 280); 
drawSnowyMountain(680, 390, 180, 250);

// 4. RÍO Y COLINAS
ctx.fillStyle = "#4682B4";
ctx.fillRect(0, 390, W, H - 390);

ctx.fillStyle = "#228B22";
ctx.beginPath(); ctx.ellipse(100, 400, 250, 100, 0, 0, Math.PI * 2); ctx.fill();
ctx.beginPath(); ctx.ellipse(800, 400, 250, 100, 0, 0, Math.PI * 2); ctx.fill();

// 5. CASA CON VENTANA (NUEVA: Ventana blanca con marco)
ctx.fillStyle = "#A52A2A"; 
ctx.fillRect(50, 300, 80, 70); 

ctx.fillStyle = "#2F4F4F";
ctx.beginPath(); ctx.moveTo(40, 300); ctx.lineTo(90, 250); ctx.lineTo(140, 300); ctx.fill();

// Ventana
ctx.fillStyle = "white";
ctx.fillRect(75, 315, 30, 30);
ctx.strokeStyle = "black";
ctx.strokeRect(75, 315, 30, 30);
ctx.beginPath();
ctx.moveTo(90, 315); ctx.lineTo(90, 345);
ctx.moveTo(75, 330); ctx.lineTo(105, 330);
ctx.stroke();

// 6. EL PUENTE
ctx.fillStyle = "#5D4037";
ctx.fillRect(250, 350, 400, 15); 
for(let i=0; i<5; i++) {
    ctx.fillRect(280 + (i*80), 365, 10, 50); 
}

// 7. STICKMAN CORREGIDO (Sobre el puente)
// Elevado para que los pies toquen la plataforma (y = 350)
const sX = 450;
const sY = 305; // Ajuste de altura

ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(sX, sY, 8, 0, Math.PI * 2); // Cabeza
ctx.moveTo(sX, sY + 8); ctx.lineTo(sX, sY + 30); // Cuerpo
ctx.moveTo(sX, sY + 15); ctx.lineTo(sX - 12, sY + 25); // Brazo L
ctx.moveTo(sX, sY + 15); ctx.lineTo(sX + 12, sY + 25); // Brazo R
ctx.moveTo(sX, sY + 30); ctx.lineTo(sX - 10, sY + 45); // Pierna L (Toca 350)
ctx.moveTo(sX, sY + 30); ctx.lineTo(sX + 10, sY + 45); // Pierna R (Toca 350)
ctx.stroke();