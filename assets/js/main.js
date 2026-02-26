/*
====================================================
Aplicación: Examen T1 - Ilustración Canvas
Autor: Daniel Alonso
Descripción: Recreación de ilustración usando API Canvas
====================================================
*/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* ============================
   FONDO
============================ */
ctx.fillStyle = "#bde0fe";
ctx.fillRect(0, 0, canvas.width, canvas.height);

/* ============================
   SOL
============================ */
ctx.beginPath();
ctx.arc(300, 80, 40, 0, Math.PI * 2);
ctx.fillStyle = "#FFD166";
ctx.fill();

/* ============================
   Nube 1
============================ */
ctx.beginPath();
ctx.arc(120, 120, 30, 0, Math.PI * 2);
ctx.arc(150, 100, 40, 0, Math.PI * 2);
ctx.arc(180, 120, 30, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

/* ============================
   Nube 2
============================ */
ctx.beginPath();
ctx.arc(420, 120, 30, 0, Math.PI * 2);
ctx.arc(450, 100, 40, 0, Math.PI * 2);
ctx.arc(480, 120, 30, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

/* ============================
   Montaña Izquierda
============================ */
ctx.beginPath();
ctx.moveTo(50, 350);
ctx.lineTo(200, 200);
ctx.lineTo(300, 350);
ctx.closePath();
ctx.fillStyle = "#90BE6D";
ctx.fill();
ctx.stroke();

/* ============================
   Montaña Derecha
============================ */
ctx.beginPath();
ctx.moveTo(300, 350);
ctx.lineTo(450, 200);
ctx.lineTo(550, 350);
ctx.closePath();
ctx.fillStyle = "#90BE6D";
ctx.fill();
ctx.stroke();

/* ============================
   Río
============================ */
ctx.beginPath();
ctx.moveTo(270, 350);
ctx.bezierCurveTo(260, 400, 330, 450, 300, 600);
ctx.lineWidth = 80;
ctx.strokeStyle = "#4EA8DE";
ctx.stroke();

/* ============================
   Puente Base
============================ */
ctx.beginPath();
ctx.rect(200, 250, 200, 80);
ctx.fillStyle = "#BC8F8F";
ctx.fill();
ctx.stroke();

/* ============================
   Arco del Puente
============================ */
ctx.beginPath();
ctx.arc(300, 330, 80, Math.PI, 0);
ctx.stroke();

/* ============================
   Árbol 1
============================ */
ctx.beginPath();
ctx.moveTo(120, 300);
ctx.lineTo(150, 250);
ctx.lineTo(180, 300);
ctx.closePath();
ctx.fillStyle = "#2D6A4F";
ctx.fill();

/* ============================
   Árbol 2
============================ */
ctx.beginPath();
ctx.moveTo(420, 300);
ctx.lineTo(450, 250);
ctx.lineTo(480, 300);
ctx.closePath();
ctx.fillStyle = "#2D6A4F";
ctx.fill();