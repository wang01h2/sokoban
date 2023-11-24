import {defineStore} from "pinia";
import {reactive} from "vue";
import {useMapStore, Map} from "./map.ts";
import {useCargoStore} from "./cargo";


interface Position {
  x: number,
  y: number
}

export const usePlayerStore = defineStore('player', () => {
  const player = reactive({
    x: 5,
    y: 3
  })
  const {isWall} = useMapStore()
  const {getCargoByPosition} = useCargoStore()

  function movePlayerToLeft() {
    // 判断人的位置
    if (isWall({x: player.x - 1, y: player.y})) return

    // 需要获取到左侧的箱子
    const position: Position = {
      x: player.x - 1,
      y: player.y
    }
    // 移动箱子的位置
    // 查找是否有箱子
    const cargo = getCargoByPosition(position)
    if (cargo) {
      // 判断箱子是否撞墙
      if (isWall({x: cargo.x - 1, y: cargo.y})) return
      cargo.x -= 1
    }
    player.x -= 1
  }

  function movePlayerToRight() {
    if (isWall({x: player.x + 1, y: player.y})) return
    const position = {
      x: player.x + 1,
      y: player.y
    }

    const cargo = getCargoByPosition(position)

    if (cargo) {
      if (isWall({x: cargo.x + 1, y: cargo.y})) return
      cargo.x += 1
    }
    player.x += 1
  }

  function movePlayerToUp() {
    if (isWall({x: player.x, y: player.y - 1})) return
    const position = {
      x: player.x,
      y: player.y - 1
    }

    const cargo = getCargoByPosition(position)

    if (cargo) {
      if (isWall({x: cargo.x, y: cargo.y - 1})) return
      cargo.y -= 1
    }
    player.y -= 1
  }

  function movePlayerToDown() {
    if (isWall({x: player.x, y: player.y + 1})) return
    const position = {
      x: player.x,
      y: player.y + 1
    }
    const cargo = getCargoByPosition(position)
    if (cargo) {
      if (isWall({x: cargo.x, y: cargo.y + 1})) return
      cargo.y += 1
    }
    player.y += 1
  }

  return {player, movePlayerToLeft, movePlayerToRight, movePlayerToUp, movePlayerToDown}
})
