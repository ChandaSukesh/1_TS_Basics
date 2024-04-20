// write interface name in generic, so that we can use anywhere
interface Vehicle{
    name:string;
    weight:number;
    isSUV:boolean;
    summary() : string
}

const oldCars ={
    name:'Honda',
    weight:4543,
    isSUV:false,
    summary():string{
        return `Name is  ${this.name}`
    }
}

const printCar=(car:Vehicle)=>{
    console.log(car.name,car.weight,car.isSUV)
    console.log(car.summary())
}

printCar(oldCars)

// the above code works fine. But the problem is when the keys and values in object are more.