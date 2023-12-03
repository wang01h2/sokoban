import {defineStore} from "pinia";
import {ref} from "vue";


interface Cargo {
  x: number,
  y: number
}

export const useCargoStore = defineStore('cargo', () => {
  const cargos: Cargo[] = ref([
    {
      x: 4,
      y: 3,
    },
    {
      x: 3,
      y: 3
    }])

  function setupCargo(cargos: Cargo[]) {
    cargos.value = cargos
  }

  function initCargos(cargo: Cargo[]) {
    cargos.value = cargo
  }

  function getCargo() {
    return cargos.value
  }

  function getCargoByPosition(position: Cargo) {
    return getCargo()?.find(f => {
      return f.x === position.x && f.y === position.y
    })
  }

  return {cargos, setupCargo, getCargo, getCargoByPosition, initCargos}
})
