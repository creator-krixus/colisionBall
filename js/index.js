import {
    Player
} from "./player.js";
import {
    Ball
} from "./ball.js"

const canvas = document.getElementById('myCanvas');
const title = document.getElementById('title')
const body = document.getElementById('body')
const btn = document.getElementById('btn')
const context = canvas.getContext('2d');
canvas.height = 200;

const ball = new Ball(300, 300, 3, 3, 10, 'blue')
const player = new Player(200, 180, 50, 15, 'red');


function colorRandom() {
    const letters = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

btn.addEventListener('click', animate)

function animate() {
    player.update();
    player.updateMove();
    canvas.width = 600;
    player.draw(context);
    ball.draw(context)

    if (ball.x + ball.vx > player.x - player.width && ball.x + ball.vx < player.x + player.width && ball.y + ball.vy > player.y - player.height / 2 && ball.y + ball.vy < player.y + player.height) {
        ball.vy = -ball.vy;
        ball.color = colorRandom();
        player.color = colorRandom();
        canvas.style.border = '5px solid' + colorRandom()
        title.style.color = colorRandom()
        body.style.backgroundColor = colorRandom()
    }
    if (ball.y + ball.vy > canvas.height - 5) {
        ball.x = 300;
        ball.y = 310;
        ball.vx = 3;
        ball.y = 3;
        ball.color = '#333'
        player.x = 450;
        player.y = 180;
        player.color = '#333';
    }
    btn.style.visibility = 'hidden';
    requestAnimationFrame(animate)
}