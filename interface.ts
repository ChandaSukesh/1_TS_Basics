// write interface name in generic, so that we can use anywhere
interface Vehicle{
    name:string;
    weight:number;
    isSUV:boolean;
}

const oldCars ={
    name:'Honda',
    weight:4543,
    isSUV:false
}

const printCar=(car:Vehicle)=>{
    console.log(car.name,car.weight,car.isSUV)
}

printCar(oldCars)

// the above code works fine. But the problem is when the keys and values in object are more.