import {beforeEach, describe, expect, it} from "vitest";
import {Direction, usePlayerStore} from "../player.ts";
import {createPinia, setActivePinia} from "pinia";
import {useMapStore} from "../map.ts";
import {useCargoStore} from "../cargo";
import {useFightingStore} from "../fighting";

describe('fighting', () => {
  // 创建 pinia
  beforeEach(() => {
    setActivePinia(createPinia())
  })
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
  describe('move to left', () => {
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
    it('当下一个左边位置是墙时不应该移动', () => {
      // 测试第一步：准备数据
      const {player, initPlayer} = usePlayerStore()
      const {fighting} = useFightingStore()
      initPlayer({x: 1, y: 1})

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
  describe('move to right', () => {
    it('玩家和箱子', () => {
      // 测试第一步：准备数据
      const {player, initPlayer} = usePlayerStore()
      const {fighting} = useFightingStore()
      const {getCargo, initCargos} = useCargoStore()
      initPlayer({x: 3, y: 1})
      initCargos([{x: 2, y: 1}])

      fighting(Direction.right)

      const cargo = getCargo()[0]
      expect(cargo.x).toBe(2)
      expect(player.x).toBe(3)
    })

    it('当下一个右边位置不是墙时应该向右移动', () => {
      // 测试第一步：准备数据
      const {player, initPlayer} = usePlayerStore()
      const {fighting} = useFightingStore()
      initPlayer({x: 1, y: 1})

      fighting(Direction.right)

      expect(player.x).toBe(2)
    })
    it('当下一个右边位置是墙时不应该移动', () => {
      // 测试第一步：准备数据
      const {player, initPlayer} = usePlayerStore()
      const {fighting} = useFightingStore()
      initPlayer({x: 3, y: 1})

      fighting(Direction.right)

      expect(player.x).toBe(3)
    })

    it('箱子撞墙的时候不应该移动', () => {
      // 测试第一步：准备数据
      const {player, initPlayer} = usePlayerStore()
      const {fighting} = useFightingStore()
      const {getCargo, initCargos} = useCargoStore()
      initPlayer({x: 2, y: 1})
      initCargos([{x: 3, y: 1}])

      fighting(Direction.right)
      const cargo = getCargo()[0]
      expect(cargo.x).toBe(3)
      expect(player.x).toBe(2)
    })
  })
  describe('move to up', () => {
    it('玩家和箱子', () => {
      // 测试第一步：准备数据
      const {player, initPlayer} = usePlayerStore()
      const {fighting} = useFightingStore()
      const {getCargo, initCargos} = useCargoStore()
      initPlayer({x: 1, y: 3})
      initCargos([{x: 2, y: 4}])

      fighting(Direction.up)

      const cargo = getCargo()[0]
      expect(cargo.y).toBe(4)
      expect(player.y).toBe(2)
    })

    it('当下一个向上的位置不是墙时应该向上移动', () => {
      // 测试第一步：准备数据
      const {player, initPlayer} = usePlayerStore()
      const {fighting} = useFightingStore()
      initPlayer({x: 1, y: 3})

      fighting(Direction.up)

      expect(player.y).toBe(2)
    })
    it('当下一个上方位置是墙时不应该移动', () => {
      // 测试第一步：准备数据
      const {player, initPlayer} = usePlayerStore()
      const {fighting} = useFightingStore()
      initPlayer({x: 1, y: 1})

      fighting(Direction.up)

      expect(player.y).toBe(1)
    })

    it('箱子撞墙的时候不应该移动', () => {
      // 测试第一步：准备数据
      const {player, initPlayer} = usePlayerStore()
      const {fighting} = useFightingStore()
      const {getCargo, initCargos} = useCargoStore()
      initPlayer({x: 2, y: 2})
      initCargos([{x: 2, y: 1}])

      fighting(Direction.up)
      const cargo = getCargo()[0]
      expect(cargo.y).toBe(1)
      expect(player.y).toBe(2)
    })
  })
  describe('move to down', () => {
    it('玩家和箱子', () => {
      // 测试第一步：准备数据
      const {player, initPlayer} = usePlayerStore()
      const {fighting} = useFightingStore()
      const {getCargo, initCargos} = useCargoStore()
      initPlayer({x: 2, y: 1})
      initCargos([{x: 2, y: 2}])

      fighting(Direction.down)

      const cargo = getCargo()[0]
      expect(cargo.y).toBe(3)
      expect(player.y).toBe(2)
    })

    it('当下一个向下的位置不是墙时应该向下移动', () => {
      // 测试第一步：准备数据
      const {player, initPlayer} = usePlayerStore()
      const {fighting} = useFightingStore()
      initPlayer({x: 1, y: 2})

      fighting(Direction.down)

      expect(player.y).toBe(3)
    })
    it('当下一个下方位置是墙时不应该移动', () => {
      // 测试第一步：准备数据
      const {player, initPlayer} = usePlayerStore()
      const {fighting} = useFightingStore()
      initPlayer({x: 1, y: 3})

      fighting(Direction.down)

      expect(player.y).toBe(3)
    })

    it('箱子撞墙的时候不应该移动', () => {
      // 测试第一步：准备数据
      const {player, initPlayer} = usePlayerStore()
      const {fighting} = useFightingStore()
      const {getCargo, initCargos} = useCargoStore()
      initPlayer({x: 2, y: 2})
      initCargos([{x: 2, y: 3}])

      fighting(Direction.down)
      const cargo = getCargo()[0]
      expect(cargo.y).toBe(3)
      expect(player.y).toBe(2)
    })
  })
})
