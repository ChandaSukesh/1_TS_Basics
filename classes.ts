class Vehicle{
    drive():void {
        console.log("Drive It")
    }
}

// inheritance
class Car extends Vehicle{
    honk():void{
        console.log("Honk It")
    }
    // if we write same method of parent again here, 
    // then it will get override
}

const vehicle =new Vehicle()
vehicle.drive()

const car=new Car()
car.drive()
car.honk()