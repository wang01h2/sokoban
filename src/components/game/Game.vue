<script setup lang="ts">
import Map from "./Map.vue";
import Player from "./Player.vue";
import Cargo from "./Cargo.vue";
import {useCargoStore} from "../../store/cargo.ts";
import PlacePoint from "./PlacePoint.vue";
import {usePlacePointStore} from "../../store/placePoint.ts";
import {initGame} from "../../game";
import {useMapStore} from "../../store/map.ts";

const {map} = useMapStore()
const styles = {
  height: map?.length * 32 + 'px',
  width: map[0].length * 32 + 'px'
}

initGame()

const {cargos} = useCargoStore()
const {_placePoints} = usePlacePointStore()
</script>

<template>
  <div class="relative" :style="styles">
    <Map>
    </Map>
    <template v-for="(point) in _placePoints">
      <PlacePoint :x="point.x" :y="point.y"/>
    </template>
    <template v-for="(cargo) in cargos">
      <Cargo :onTarget="cargo.onTarget" :x="cargo.x" :y="cargo.y"/>
    </template>
    <Player></Player>
  </div>
</template>

<style scoped>

</style>
