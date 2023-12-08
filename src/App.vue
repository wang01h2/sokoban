<script setup lang="ts">
import Game from "./components/game/Game.vue";
import {useGameStore} from "./store/game.ts";
const {message} = useGameStore()
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <p class="text-gray-800 py-1 text-xl">sokoban</p>
    <Game></Game>
    <p class="text-gray-800 py-1 text-xl">{{ message }}</p>
  </div>
</template>

<style scoped>

</style>
