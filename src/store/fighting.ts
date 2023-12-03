import {defineStore} from "pinia";
import {reactive} from "vue";
import {useMapStore, Map} from "./map.ts";
import {useCargoStore} from "./cargo";
import {Position, usePositionStore} from "./position";
import {Direction, usePlayerStore} from "./player";

export const useFightingStore = defineStore('fighting', () => {
  const player = reactive({
    x: 5,
    y: 3
  })
  const {isWall, cargoCollision} = useMapStore()
  const {getCargoByPosition} = useCargoStore()
  const {calcLeftPosition, calcRightPosition, calcUpPosition, calcDownPosition} = usePositionStore()


  function fighting(direction: Direction) {
    const {player} = usePlayerStore()
    // 1.箱子推到 放置点
    // 2.箱子检测是不是碰到了箱子
    const map: Record<string, {
      calcPositionFn: (position: Position) => Position,
      dirPropName: 'x' | 'y',
      dir: -1 | 1
    }> = {
      left: {calcPositionFn: calcLeftPosition, dirPropName: 'x', dir: -1},
      right: {calcPositionFn: calcRightPosition, dirPropName: 'x', dir: 1},
      up: {calcPositionFn: calcUpPosition, dirPropName: 'y', dir: -1},
      down: {calcPositionFn: calcDownPosition, dirPropName: 'y', dir: 1},
    }
    const {calcPositionFn, dirPropName, dir} = map[direction]
    // 计算是不是墙
    if (isWall(calcPositionFn(player))) return
    // 是否能取出箱子
    const cargo = getCargoByPosition(calcPositionFn(player))
    if (cargo) {
      if (isWall(calcPositionFn(cargo))) return
      if (cargoCollision(calcPositionFn(cargo))) return
      // cargo.x += 1
      cargo[dirPropName] += 1 * dir
    }
    // player.x += 1
    player[dirPropName] += 1 * dir
  }

  return {fighting}
})
