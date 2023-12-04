<script setup lang="ts">
import cargoImg from "../../assets/cargo.png";
import cargoOnTargetImg from "../../assets/cargo_on_target.png";
import {usePosition} from "../../composables/usePosition.ts";

interface Props {
  x: number,
  y: number,
  onTarget?: boolean
}

const props = defineProps<Props>()

const {position} = usePosition(props)

</script>

<template>
  <div class="absolute" :style="position">
    <img v-if="onTarget" :src="cargoOnTargetImg" alt="">
    <img v-else :src="cargoImg" alt="">
  </div>
</template>

<style scoped>

</style>
