import {defineStore} from "pinia";
import {Position} from "../composables/usePosition.ts";
import {useCargoStore} from "./cargo.ts";

export enum MapTile {
  FLOOR = 2,
  WALL = 1
}

type Map = MapTile[][]

export const useMapStore = defineStore("map", () => {
  const {getCargoByPosition} = useCargoStore()
  let map = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ]

  function setupMap(newMap: Map) {
    map.splice(0, map.length, ...newMap)
  }

  function isWall(position: Position) {
    return map[position.x][position.y] === MapTile.WALL
  }

  function cargoCollision(position: Position) {
    const cargo = getCargoByPosition(position)
    return !!cargo
  }

  return {map, setupMap, isWall, cargoCollision}
})

