<script setup lang="ts">
import keeperImg from '../../assets/keeper.png'
import {usePlayerStore} from "../../store/player.ts";
import {onMounted, onUnmounted} from "vue";
import {usePosition} from "../../composables/usePosition.ts";

useMove()

const {player} = usePlayerStore()
const {position} = usePosition(player)

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

</script>

<template>
  <div class="absolute" :style="position">
    <img :src="keeperImg" alt="">
  </div>
</template>

<style scoped>

</style>
