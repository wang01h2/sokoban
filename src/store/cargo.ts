import {defineStore} from "pinia";
import {ref} from "vue";


interface Cargo {
  x: number,
  y: number,
  onTarget: boolean
}

export const useCargoStore = defineStore('cargo', () => {
  const _cargos: Cargo[] = ref([])

  function initCargos(cargo: Cargo[]) {
    _cargos.value = cargo?.map((m) => {
      return {...m, onTarget: false}
    })
  }

  function getCargo() {
    return _cargos.value
  }

  function getCargoByPosition(position: Cargo) {
    return getCargo()?.find(f => {
      return f.x === position.x && f.y === position.y
    })
  }

  return {cargos: _cargos, getCargo, getCargoByPosition, initCargos}
})
