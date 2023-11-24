import {beforeEach, describe, expect, it} from "vitest";
import {usePlayerStore} from "../player.ts";
import {createPinia, setActivePinia} from "pinia";
import {useMapStore} from "../map.ts";
import {useCargoStore} from "../cargo";

describe('cargo', () => {
  // 创建 pinia
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('collision wall', () => {
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
    it('should not move cargo to left when collision a wall', () => {
      // 测试第一步：准备数据
      const {movePlayerToLeft, player} = usePlayerStore()
      const {getCargo, initCargos} = useCargoStore()
      player.x = 1
      player.y = 1
      movePlayerToLeft()
      initCargos({x: 1, y: player.y})
      const cargo = getCargo()[0]
      expect(cargo.x).toBe(1)
    })
    it('should not move to right when collision a wall', () => {
      // 测试第一步：准备数据
      const {movePlayerToRight, player} = usePlayerStore()
      player.x = 3
      player.y = 1
      movePlayerToRight()
      expect(player.x).toBe(3)
    })
    it('should not move to up when collision a wall', () => {
      // 测试第一步：准备数据
      const {movePlayerToUp, player} = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToUp()
      expect(player.y).toBe(1)
    })
    it('should not move to down when collision a wall', () => {
      // 测试第一步：准备数据
      const {movePlayerToDown, player} = usePlayerStore()
      player.x = 1
      player.y = 3
      movePlayerToDown()
      expect(player.y).toBe(3)
    })
  })
})
