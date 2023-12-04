import {defineStore} from "pinia";

export interface Position {
  x: number,
  y: number
}

export const usePositionStore = defineStore('position', () => {
  const error = {
    x: 0,
    y: 0
  }
  function calcLeftPosition(position: Position) {
    if (!position) return error
    return {
      x: position.x - 1,
      y: position.y
    }
  }

  function calcRightPosition(position: Position) {
    if (!position) return error
    return {
      x: position.x + 1,
      y: position.y
    }
  }

  function calcUpPosition(position: Position) {
    if (!position) return error
    return {
      x: position.x,
      y: position.y - 1
    }
  }

  function calcDownPosition(position: Position) {
    if (!position) return error
    return {
      x: position.x,
      y: position.y + 1
    }
  }

  return {calcLeftPosition, calcRightPosition, calcUpPosition, calcDownPosition}
})
