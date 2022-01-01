import contarOvejas from './index.js'

test('contar 2 ovejas con a en nombre', () => {
    const ovejas = [
        { name: 'Noa', color: 'azul' },
        { name: 'Euge', color: 'rojo' },
        { name: 'Navidad', color: 'rojo' },
        { name: 'Ki Na Ma', color: 'rojo'},
        { name: 'AAAAAaaaaa', color: 'rojo' },
        { name: 'Nnnnnnnn', color: 'rojo'}
      ]

    const ovejasFiltradas = contarOvejas(ovejas)
    console.log(ovejasFiltradas)

    expect(ovejasFiltradas.length).toBe(2)
})  