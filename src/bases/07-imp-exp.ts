import heroes, { type Owner } from '../data/heroes';
export const getHeroById = (id:number) => {
    return heroes.find(hero => hero.id === id)
}

console.log(getHeroById(1))

export const getHeroByOwner = (owner: Owner) => {
    return heroes.find( hero => hero.owner === owner)
}

console.log(getHeroByOwner('DC'))