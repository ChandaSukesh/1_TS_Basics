const myCars : string[]=['Ford','BMW','Audi']


// why do we care point 1 ex:, help with inference while extracting values
const singleCar=myCars[0]
const lastCar=myCars.pop()

// point 2 ex: prevent incompatabile types
// myCars.push(100)

// point 3 ex: help with map

const upperCaseCars= myCars.map((car:string):string=>{
    return car.toUpperCase()
})

// point 4 example flexible types
const importantDates: (Date | string)[]=[new Date()]
importantDates.push('20-30-1997');
importantDates.push(new Date())
// error
// importantDates.push(100)