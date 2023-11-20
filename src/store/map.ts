import {defineStore} from "pinia";

export enum MapTile {
  FLOOR = 2,
  WALL = 1
}

type Map = MapTile[][]

interface Position {
  x: number,
  y: number
}

export const useMapStore = defineStore("map", () => {
  let map = [
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
  ]

  function setupMap(newMap: Map) {
    map.splice(0, map.length, ...newMap)
  }

  function isWall(position: Position,) {
    return map[position.x][position.y] === MapTile.WALL
  }

  return {map, setupMap, isWall}
})

