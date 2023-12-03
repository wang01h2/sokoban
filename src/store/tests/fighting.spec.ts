import {beforeEach, describe, expect, it} from "vitest";
import {usePlayerStore} from "../player.ts";
import {createPinia, setActivePinia} from "pinia";
import {useMapStore} from "../map.ts";
import {useCargoStore} from "../cargo";
import {Direction, useFightingStore} from "../fighting";

describe('fighting', () => {
  // 创建 pinia
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('move to left', () => {
    beforeEach(() => {
      const {setupMap} = useMapStore()
      setupMap([
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1],
      ])
    })
    it('玩家和箱子', () => {
      // 测试第一步：准备数据
      const {player, initPlayer} = usePlayerStore()
      const {fighting} = useFightingStore()
      const {getCargo, initCargos} = useCargoStore()
      initPlayer({x: 3, y: 1})
      initCargos([{x: 2, y: 1}])

      fighting(Direction.left)

      const cargo = getCargo()[0]
      expect(cargo.x).toBe(1)
      expect(player.x).toBe(2)
    })

    it('当下一个左位置不是墙时应该向左移动', () => {
      // 测试第一步：准备数据
      const {player, initPlayer} = usePlayerStore()
      const {fighting} = useFightingStore()
      initPlayer({x: 2, y: 1})

      fighting(Direction.left)

      expect(player.x).toBe(1)
    })

    it('箱子撞墙的时候不应该移动', () => {
      // 测试第一步：准备数据
      const {player, initPlayer} = usePlayerStore()
      const {fighting} = useFightingStore()
      const {getCargo, initCargos} = useCargoStore()
      initPlayer({x: 2, y: 1})
      initCargos([{x: 1, y: 1}])

      fighting(Direction.left)
      const cargo = getCargo()[0]
      expect(cargo.x).toBe(1)
      expect(player.x).toBe(2)
    })
  })
})
