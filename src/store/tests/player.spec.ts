import {beforeEach, describe, expect, it} from "vitest";
import {usePlayerStore} from "../player.ts";
import {createPinia, setActivePinia} from "pinia";
import {useMapStore} from "../map.ts";

describe('player', () => {
  // 创建 pinia
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('normal move', () => {
    beforeEach(() => {
      const {setupMap} = useMapStore()
      setupMap([
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2],
      ])
    })
    it('should move to left', () => {
      // 测试第一步：准备数据
      const {movePlayerToLeft, player} = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToLeft()

      expect(player.x).toBe(0)
    })

    it('should move to right', () => {
      // 测试第一步：准备数据
      const {movePlayerToRight, player} = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToRight()
      expect(player.y).toBe(1)
    })
    it('should move to up', () => {
      // 测试第一步：准备数据
      const {movePlayerToUp, player} = usePlayerStore()
      // const

      player.x = 1
      player.y = 1
      movePlayerToUp()
      expect(player.y).toBe(0)
    })
    it('should move to down', () => {
      // 测试第一步：准备数据
      const {movePlayerToDown, player} = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToDown()
      expect(player.y).toBe(2)
    })

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
    it('should not move to left when collision a wall', () => {
      // 测试第一步：准备数据
      const {movePlayerToLeft, player} = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToLeft()
      expect(player.x).toBe(1)
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

    it('当有两个箱子的时候，另外一个箱子不可以移动', () => {
      // 测试第一步：准备数据
      const {movePlayerToDown, player} = usePlayerStore()
      player.x = 1
      player.y = 3
      movePlayerToDown()
      expect(player.y).toBe(3)
    });
  })
})
