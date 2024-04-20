const oldCars ={
    name:'Honda',
    weight:4543,
    isSUV:false
}

const printCar=(car:{name:string;weight:number;isSUV:boolean;})=>{
    console.log(car.name,car.weight,car.isSUV)
}

printCar(oldCars)

// the above code works fine. But the problem is when the keys and values in object are more.