<script setup lang="ts">
import pointImg from "../../assets/target.png";
import {usePosition} from "../../composables/usePosition.ts";

interface Props {
  x: number,
  y: number,
  onTarget: boolean
}

const props = defineProps<Props>()

const {position} = usePosition(props)

</script>

<template>
  <div class="absolute" :style="position">
    <img :src="pointImg" alt="">
  </div>
</template>

<style scoped>

</style>
