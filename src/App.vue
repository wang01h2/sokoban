<script setup lang="ts">
import {useMapStore} from "./store/map.ts";

const { map } = useMapStore()

</script>

<template>
  <div>
    <h1 class="text-yellow-300">sokoban {{ map }}</h1>
  </div>
</template>

<style scoped>

</style>
