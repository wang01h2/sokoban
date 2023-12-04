<script setup lang="ts">
import Map from "./Map.vue";
import Player from "./Player.vue";
import Cargo from "./Cargo.vue";
import {useCargoStore} from "../../store/cargo.ts";
import PlacePoint from "./PlacePoint.vue";
import {usePlacePointStore} from "../../store/placePoint.ts";
import {initGame} from "../../game";

initGame()

const {cargos} = useCargoStore()
const {_placePoints} = usePlacePointStore()
</script>

<template>
  <Map>
  </Map>
  <template v-for="(point) in _placePoints">
    <PlacePoint :onTarget="point.onTarget" :x="point.x" :y="point.y"/>
  </template>
  <template v-for="(cargo) in cargos">
    <Cargo :onTarget="cargo.onTarget" :x="cargo.x" :y="cargo.y"/>
  </template>
  <Player></Player>
</template>

<style scoped>

</style>
