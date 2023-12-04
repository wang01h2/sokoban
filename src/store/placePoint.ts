import {defineStore} from "pinia";
import {Ref, ref} from "vue";


interface PlacePoint {
  x: number,
  y: number,
  onTarget?: boolean
}

export const usePlacePointStore = defineStore('placePoint', () => {
  const _placePoints: Ref<PlacePoint[]> = ref([])

  function initPlacePoints(placePoints: PlacePoint[]) {
    _placePoints.value = placePoints?.map((m: PlacePoint) => {
      return {...m, onTarget: false}
    })
  }

  function getPlacePoints() {
    return _placePoints.value
  }

  function getPlacePointByPosition(position: PlacePoint) {
    return getPlacePoints()?.find((f: PlacePoint) => {
      return f.x === position.x && f.y === position.y
    })
  }

  return {_placePoints, getPlacePoints, getPlacePointByPosition, initPlacePoints}
})
