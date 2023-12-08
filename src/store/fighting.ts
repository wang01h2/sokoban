import {defineStore} from "pinia";
import {useMapStore} from "./map.ts";
import {useCargoStore} from "./cargo";
import {Position, usePositionStore} from "./position";
import {Direction, usePlayerStore} from "./player";
import {usePlacePointStore} from "./placePoint.ts";
import {useGameStore} from "./game.ts";

export const useFightingStore = defineStore('fighting', () => {
  const {isWall, cargoCollision} = useMapStore()
  const {getCargoByPosition, checkIfTheGameIsOver} = useCargoStore()
  const {calcLeftPosition, calcRightPosition, calcUpPosition, calcDownPosition} = usePositionStore()
  const {showConfetti} = useGameStore()

  function fighting(direction: Direction) {
    const {player} = usePlayerStore()
    const {getPlacePointByPosition} = usePlacePointStore()
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
      const nextPoint = calcPositionFn(cargo)
      if (isWall(nextPoint)) return
      if (cargoCollision(nextPoint)) return
      // 如果把箱子推出终点，恢复样式
      if (cargo.onTarget) {
        cargo.onTarget = !cargo.onTarget
      }
      // cargo.x += 1
      cargo[dirPropName] += 1 * dir
      // 检测是否到放置点
      if (getPlacePointByPosition(nextPoint)) {
        cargo.onTarget = true
      }

      // 检测是否游戏结束
      if (checkIfTheGameIsOver()) {
        showConfetti()
      }
    }
    // player.x += 1
    player[dirPropName] += 1 * dir
  }

  return {fighting}
})
