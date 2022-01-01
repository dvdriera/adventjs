import listGifts from './index.js'

const carta = 'bici  coche balón _playstation bici coche peluche'

test('contar dos bicis', () => {
    const regalos = listGifts(carta)
    console.log(regalos)
    expect(regalos.bici).toBe(2)
})

test('contar un peluche', () => {
  const regalos = listGifts(carta)
  console.log(regalos)
  expect(regalos.peluche).toBe(1)
})

test('contar sin tachados', () => {
  const regalos = listGifts(carta)
  console.log(regalos)
  expect(regalos['_playstation']).toBe(undefined)
})  