<script setup lang="ts">
import keeperImg from '../../assets/keeper.png'
import {usePlayerStore} from "../../store/player.ts";
import {computed, onMounted, onUnmounted} from "vue";

const STEP = 32

useMove()
const {position} = usePosition()

function useMove() {
  const {movePlayerToLeft, movePlayerToRight, movePlayerToUp, movePlayerToDown} = usePlayerStore()
  // 键盘事件来控制移动
  function handleKeyup(e: KeyboardEvent) {
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
  }

  onMounted(() => {
    window.addEventListener('keyup', (e) => {
      handleKeyup(e)
    })
  })
  onUnmounted(() => {
    window.removeEventListener('keyup', handleKeyup)
  })
}

function usePosition() {
  const {player} = usePlayerStore()
  const position = computed(() => {
    return {
      "left": player.x * STEP + 'px',
      "top": player.y * STEP + 'px'
    }
  })
  return {position}
}

</script>

<template>
  <div class="absolute" :style="position">
    <img :src="keeperImg" alt="">
  </div>
</template>

<style scoped>

</style>
