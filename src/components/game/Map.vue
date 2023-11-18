<script setup lang="ts">
import {MapTile, useMapStore} from "../../store/map.ts";
import floorImg from '../../assets/floor.png'
import wallImg from '../../assets/wall.png'

const { map } = useMapStore()


</script>

<template>
  <div class="relative">
    <div v-for="(row, i) in map" class="flex">
      <div v-for="(col, j) in map[i]">
        <template v-if="map[i][j] === MapTile.FLOOR">
          <img :src="floorImg" alt="">
        </template>
        <template v-else-if="map[i][j] === MapTile.WALL">
          <img :src="wallImg" alt="">
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
