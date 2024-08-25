const character = ['goku', 'vegeta', 'trunks', 'goten']
const [g, v, t,g2,g3 = 'Yamashi'] = character

const returnArray = () => {
    return [123, 'ABC'] as const
}

const [numbers, letters] = returnArray()

console.log(numbers, letters)