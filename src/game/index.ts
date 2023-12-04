import {usePlacePointStore} from "../store/placePoint.ts";
import {useCargoStore} from "../store/cargo.ts";
import {usePlayerStore} from "../store/player.ts";

export function initGame() {
  const {initPlacePoints} = usePlacePointStore()
  const {initCargos} = useCargoStore()
  const {initPlayer} = usePlayerStore()
  initPlayer({x: 5, y: 3})
  initCargos([
    {
      x: 4,
      y: 3,
    },
    {
      x: 3,
      y: 3
    }])
  initPlacePoints([
    {
      x: 4,
      y: 5,
    },
    {
      x: 3,
      y: 5
    }])
}
