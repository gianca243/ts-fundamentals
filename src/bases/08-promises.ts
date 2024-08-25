// console.log('inicio')

// new Promise((resolve, reject)=>{
// //  console.log('cuerpo de la promesa') 
//     setTimeout(()=>{
//         // resolve('mi amigo cumplio')
//         reject('mi amigo no cumplio')
//     })
// }).then(message => console.log(message))
// .catch(errorMessage => console.log(errorMessage))
// .finally(()=> console.log('Fin de la promesa'))

// console.log('final')

import { getHeroById } from "./07-imp-exp";
import type { Hero } from "../data/heroes";

const getHeoByIdAsync = (id: number): Promise<Hero> => {
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
            const hero = getHeroById(id)
            hero ? resolve(hero): reject(`Heroe no encontrado #${id}`)
            // if (hero){
            //     resolve(hero)
            //     return;
            // }
            // reject(`Heroe no encontrado #${id}`)
            
        }, 1000)
    })
}

getHeoByIdAsync(1)
    .then( hero => console.log('El nombre es ', hero.name))
    .catch(errorMessage=>alert(errorMessage))