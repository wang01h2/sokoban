import {beforeEach, describe, expect, it} from "vitest";
import {usePlayerStore} from "../player.ts";
import {createPinia, setActivePinia} from "pinia";

describe('player', () => {
  // 创建 pinia
  beforeEach(() => {
    setActivePinia(createPinia())
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
