import {defineStore} from "pinia";
import {Ref, ref} from "vue";


interface Cargo {
  x: number,
  y: number,
  onTarget?: boolean
}

export const useCargoStore = defineStore('cargo', () => {
  const _cargos: Ref<Cargo[]> = ref([])


  function initCargos(cargo: Cargo[]) {
    _cargos.value = cargo?.map((m: Cargo) => {
      return {...m, onTarget: false}
    })
  }

  function getCargo() {
    return _cargos.value
  }

  function getCargoByPosition(position: Cargo) {
    return getCargo()?.find((f: Cargo) => {
      return f.x === position.x && f.y === position.y
    })
  }

  /*
  * todo: 两种状态
  * 成功：所有箱子都推到放置点
  * 失败：有一个箱子推到墙边
  * */

  function checkIfTheGameIsOver() {
    return getCargo()?.filter((f: Cargo) => f.onTarget === true)?.length === _cargos.value.length
  }

  return {cargos: _cargos, getCargo, getCargoByPosition, initCargos, checkIfTheGameIsOver}
})
