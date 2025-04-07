import { describe, it, expect } from 'vitest'
import { deepMerge } from '../deepMerge'

describe('deepMerge', () => {
  it('fusiona propiedades de nivel superior', () => {
    const a = { a: 1 }
    const b = { b: 2 }
    const merged = deepMerge(a, b)

    expect(merged).toEqual({ a: 1, b: 2 })
  })

  it('fusiona propiedades anidadas sin sobrescribir', () => {
    const a = { a: { x: 1 } }
    const b = { a: { y: 2 } }
    const merged = deepMerge(a, b)

    expect(merged).toEqual({ a: { x: 1, y: 2 } })
  })

  it('no sobrescribe propiedades anidadas existentes', () => {
    const a = { a: { x: 1 } }
    const b = { a: { x: 999, y: 3 } }
    const merged = deepMerge(a, b)

    expect(merged).toEqual({ a: { x: 1, y: 3 } })
  })

  it('agrega propiedades nuevas en niveles anidados', () => {
    const a = { user: { name: 'Ema' } }
    const b = { user: { age: 30 } }
    const merged = deepMerge(a, b)

    expect(merged).toEqual({ user: { name: 'Ema', age: 30 } })
  })

  it('ignora arrays y los deja como están', () => {
    const a = { items: [1, 2] }
    const b = { items: [3, 4] }
    const merged = deepMerge(a, b)

    // no los fusiona, porque no son objetos tipo Record
    expect(merged).toEqual({ items: [1, 2] })
  })

  it('fusiona estructuras profundamente anidadas', () => {
    const a = { a: { b: { c: 1 } } }
    const b = { a: { b: { d: 2 }, e: 3 } }
    const merged = deepMerge(a, b)

    expect(merged).toEqual({ a: { b: { c: 1, d: 2 }, e: 3 } })
  })
})
