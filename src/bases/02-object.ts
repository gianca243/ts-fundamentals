export const person = {
    lastName: "Stark",
    age: 45,
    address: {
        city: "New York",
        zip: 512323,
        lat: 14.2323,
        lng: 34.5667
    }
}; // as const;

// const person2 = person;
const person2 = structuredClone(person)
person2.lastName = 'Parker'
person2.address.city = 'LA'
console.log({person})
console.log({person2})