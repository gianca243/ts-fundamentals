// function greetPerson(name: string){
//     return `Hola, ${name}`
// }
// const greetPerson = (name: string) => {
//   return `Hola, ${ name }`;
// }
// console.log(greetPerson('Fernando'))


const getUser = (uid: string) => ({
    uid,
    username: 'Tony001'
})
console.log(getUser('XYZ-456'))

const heroes = [
    {
        id:1,
        name:'batman',
    },
    {
        id:2,
        name: 'Superman',
        power: 'super fuerza',
    },
]

const hero = heroes.find((h) => h.id === 1)
console.log(hero?.name?.toUpperCase())

