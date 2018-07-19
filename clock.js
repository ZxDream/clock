let canvas, ctx;
let clockRadius = 200;
let clockImages;

function clear() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawScence() {
    clear();

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let milliSec = date.getMilliseconds();
    hours = hours > 12? hours - 12: hours;
    hour = hours + minutes / 60 + seconds / 1200;
    minute = minutes + seconds / 60;
    second = seconds + milliSec / 1000;

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);

    ctx.beginPath();

    ctx.font = "20px Arial";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for(let i = 1; i <= 12; i++) {
        let theta = (i - 3) * (Math.PI * 2) / 12;
        let x = clockRadius * 0.7 * Math.cos(theta);
        let y = clockRadius * 0.7 * Math.sin(theta);
        ctx.fillText(i, x, y);
    }


    for(let i = 0; i < 60; i++) {
        if(i % 5 === 0) {
            let theta = (i - 10) * (Math.PI * 2) / 60;
            let x = clockRadius * 0.78 * Math.cos(theta);
            let y = clockRadius * 0.78 * Math.sin(theta);
            let x1 = clockRadius * 0.85 * Math.cos(theta);
            let y1 = clockRadius * 0.85 * Math.sin(theta);
            ctx.moveTo(x, y);
            ctx.lineTo(x1, y1);
        } else {
            let theta = (i - 10) * (Math.PI * 2) / 60;
            let x = clockRadius * 0.82 * Math.cos(theta);
            let y = clockRadius * 0.82 * Math.sin(theta);
            let x1 = clockRadius * 0.85 * Math.cos(theta);
            let y1 = clockRadius * 0.85 * Math.sin(theta);
            ctx.moveTo(x, y);
            ctx.lineTo(x1, y1);
        }

    }
    ctx.stroke();
    

    ctx.save();
    let thetaHour = (hour - 3) * 2 * Math.PI / 12;
    ctx.rotate(thetaHour);
    ctx.beginPath();
    ctx.moveTo(-6, -3);
    ctx.lineTo(-6, 3);
    ctx.lineTo(clockRadius * 0.4, 1);
    ctx.lineTo(clockRadius * 0.4, -1);
    ctx.fill();
    ctx.restore();

    ctx.save();
    let thetaMin = (minute - 15) * 2 * Math.PI / 60;
    ctx.rotate(thetaMin);
    ctx.beginPath();
    ctx.moveTo(-6, -2);
    ctx.lineTo(-6, 2);
    ctx.lineTo(clockRadius * 0.65, 1);
    ctx.lineTo(clockRadius * 0.65, -1);
    ctx.fill();
    ctx.restore();

    ctx.save();
    let thetaSec = (second - 15) * 2 * Math.PI / 60;
    ctx.rotate(thetaSec);
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.moveTo(-6, -1.5);
    ctx.lineTo(-6, 1.5);
    ctx.lineTo(clockRadius * 0.8, 0.5);
    ctx.lineTo(clockRadius * 0.8, -0.5);
    ctx.fill();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'red';
    ctx.arc(0, 0, clockRadius * 0.8, thetaSec + Math.PI / 2, 0);
    ctx.stroke();
    ctx.restore();

    ctx.restore();
}

(function start() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    setInterval(() => {
        drawScence();
    }, 40);
})();