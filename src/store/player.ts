import {defineStore} from "pinia";
import {reactive} from "vue";
import {Map} from "./map.ts";
import {useFightingStore} from "./fighting";

export interface Player {
  x: number,
  y: number,
  onTarget?: boolean
}

export enum Direction {
  left = 'left',
  right = 'right',
  up = 'up',
  down = 'down'
}

export const usePlayerStore = defineStore('player', () => {
  const player = reactive({
    x: 1,
    y: 1,
    onTarget: false
  })
  const {fighting} = useFightingStore()

  function movePlayerToLeft() {
    fighting(Direction.left)
  }

  function movePlayerToRight() {
    fighting(Direction.right)
  }


  function movePlayerToUp() {
    fighting(Direction.up)
  }

  function movePlayerToDown() {
    fighting(Direction.down)
  }

  function initPlayer(position: Player) {
    player.x = position.x
    player.y = position.y
    player.onTarget = false
  }
  function playerPointOnTarget(){

  }

  return {player, movePlayerToLeft, movePlayerToRight, movePlayerToUp, movePlayerToDown, initPlayer}
})
