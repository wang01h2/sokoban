import {defineStore} from "pinia";
import {ref} from "vue";


interface PlacePoint {
  x: number,
  y: number,
  onTarget: boolean
}

export const usePlacePointStore = defineStore('placePoint', () => {
  const _placePoints: PlacePoint[] = ref([])

  function initPlacePoints(placePoints: PlacePoint[]) {
    _placePoints.value = placePoints?.map(m => {
      return {...m, onTarget: false}
    })
  }

  function getPlacePoints() {
    return _placePoints.value
  }

  function getPlacePointByPosition(position: PlacePoint) {
    return getPlacePoints()?.find(f => {
      return f.x === position.x && f.y === position.y
    })
  }

  return {_placePoints, getPlacePoints, getPlacePointByPosition, initPlacePoints}
})
