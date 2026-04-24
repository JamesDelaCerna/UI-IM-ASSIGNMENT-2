import { getInputDirection } from './input.js'
import { drawSnake } from './render.js'

let snake = [{ x: 10, y: 10 }]

function update() {
  const direction = getInputDirection()

  const newHead = {
    x: snake[0].x + direction.x,
    y: snake[0].y + direction.y
  }

  snake.unshift(newHead)
  snake.pop()
}

function gameLoop() {
  update()
  drawSnake(snake)
}

setInterval(gameLoop, 200)