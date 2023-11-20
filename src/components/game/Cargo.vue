<script setup lang="ts">
import cargoImg from "../../assets/cargo.png";
import {usePosition} from "../../composables/usePosition.ts";

interface Props {
  x: number,
  y: number
}

const props = defineProps<Props>()

const {position} = usePosition(props)

</script>

<template>
  <div class="absolute" :style="position">
    <img :src="cargoImg" alt="">
  </div>
</template>

<style scoped>

</style>
