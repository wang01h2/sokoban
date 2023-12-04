import {beforeEach, describe, expect, it} from "vitest";
import {useMapStore} from "../map.ts";
import {createPinia, setActivePinia} from "pinia";

describe('map', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('happy path', () => {
    expect(true).toBe(true)
  })


  it('should setup map', () => {
    const {map,setupMap} = useMapStore()

    const newMap = [
      [1, 1, 1, 1, 1],
      [1, 1, 2, 2, 1],
      [1, 2, 2, 2, 1],
      [1, 2, 2, 2, 1],
      [1, 1, 1, 1, 1],
    ]

    setupMap(newMap)

    expect(map).toEqual(newMap)
  })
})

