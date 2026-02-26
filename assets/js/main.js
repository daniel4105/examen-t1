/* ========================================================
   Aplicación: Examen T1 - Ilustración Pro (30+ Figuras)
   Descripción: Paisaje con puente, casa detallada, fauna y flora.
   ======================================================== */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 560;
const W = canvas.width;
const H = canvas.height;

// 1-5. CIELO Y NUBES (Ya cuentan como varias figuras de arco/círculo)
ctx.fillStyle = "#87CEEB";
ctx.fillRect(0, 0, W, H);

function drawCloud(x, y) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.arc(x + 25, y - 10, 25, 0, Math.PI * 2);
    ctx.arc(x + 50, y, 20, 0, Math.PI * 2);
    ctx.fill();
}
drawCloud(150, 80);  // Nube 1
drawCloud(400, 50);  // Nube 2
drawCloud(700, 90);  // Nube 3

// 6. SOL (Círculo)
ctx.beginPath();
ctx.arc(800, 70, 40, 0, Math.PI * 2);
ctx.fillStyle = "#FDC813";
ctx.fill();

// 7-8. MONTAÑAS (Triángulos)
function drawMnt(x, h, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x - 150, 390);
    ctx.lineTo(x, 390 - h);
    ctx.lineTo(x + 150, 390);
    ctx.fill();
}
drawMnt(200, 200, "#708090");
drawMnt(350, 150, "#778899");

// 9. RÍO (Rectángulo)
ctx.fillStyle = "#4682B4";
ctx.fillRect(0, 390, W, H - 390);

// 10-11. COLINAS (Curvas/Caminos cerrados)
ctx.fillStyle = "#228B22";
ctx.beginPath(); // Izquierda
ctx.ellipse(100, 400, 250, 100, 0, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath(); // Derecha
ctx.ellipse(800, 400, 250, 100, 0, 0, Math.PI * 2);
ctx.fill();

// 12-16. AVES EN V (Líneas/Paths)
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
function drawBird(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y + 5);
    ctx.lineTo(x + 20, y);
    ctx.stroke();
}
drawBird(500, 100); drawBird(530, 120); drawBird(560, 100);

// 17-21. LA CASA DETALLADA (Rectángulos y Triángulos)
ctx.fillStyle = "#A52A2A"; // Pared
ctx.fillRect(50, 300, 80, 70); 
ctx.fillStyle = "#2F4F4F"; // Techo (Triángulo)
ctx.beginPath();
ctx.moveTo(40, 300); ctx.lineTo(90, 250); ctx.lineTo(140, 300); ctx.fill();
ctx.fillStyle = "black"; // Chimenea (Rectángulo)
ctx.fillRect(110, 260, 15, 30);
// Humo (Círculos pequeños)
ctx.fillStyle = "rgba(200,200,200,0.6)";
ctx.beginPath(); ctx.arc(120, 245, 8, 0, Math.PI*2); ctx.fill();
ctx.beginPath(); ctx.arc(130, 230, 10, 0, Math.PI*2); ctx.fill();

// 22-26. EL PUENTE (Vigas y Postes)
ctx.fillStyle = "#5D4037";
ctx.fillRect(250, 350, 400, 15); // Base puente
for(let i=0; i<5; i++) {
    ctx.fillRect(280 + (i*80), 365, 10, 50); // Pilares (5 figuras)
}

// 27-28. PECES SALTANDO (Arcos)
ctx.strokeStyle = "orange";
ctx.beginPath(); ctx.arc(400, 430, 10, 0, Math.PI, true); ctx.stroke();
ctx.beginPath(); ctx.arc(550, 450, 10, 0, Math.PI, true); ctx.stroke();

// 29-32. FLORES EN EL PASTO (Círculos pequeños)
function drawFlower(x, y) {
    ctx.fillStyle = "yellow";
    ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = "red";
    ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI*2); ctx.fill();
}
drawFlower(100, 450); drawFlower(150, 470); drawFlower(800, 440);

// 33. FIGURA HUMANA (Stickman)
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.arc(450, 335, 7, 0, Math.PI*2); // Cabeza
ctx.moveTo(450, 342); ctx.lineTo(450, 360); // Cuerpo
ctx.moveTo(450, 350); ctx.lineTo(440, 360); // Brazo L
ctx.moveTo(450, 350); ctx.lineTo(460, 360); // Brazo R
ctx.stroke();