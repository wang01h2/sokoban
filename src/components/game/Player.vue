<script setup lang="ts">
import keeperImg from '../../assets/keeper.png'
import {usePlayerStore} from "../../store/player.ts";
import {computed} from "vue";

const {player, movePlayerToLeft, movePlayerToRight, movePlayerToUp, movePlayerToDown} = usePlayerStore()
// 键盘事件来控制移动
// movePlayerToLeft

window.addEventListener('keyup', (e) => {
  switch (e.code) {
    case "ArrowLeft": {
      movePlayerToLeft()
      break
    }
    case "ArrowRight": {
      movePlayerToRight()
      break
    }
    case "ArrowUp": {
      movePlayerToUp()
      break
    }
    case "ArrowDown": {
      movePlayerToDown()
      break
    }
  }
})

const STEP = 32


const position = computed(() => {
  return {
    "left": player.x * STEP + 'px',
    "top": player.y * STEP + 'px'
  }
})

</script>

<template>
  <div class="absolute" :style="position">
    <img :src="keeperImg" alt="">
  </div>
</template>

<style scoped>

</style>
