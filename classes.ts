class Vehicle{
    // drive():void {
    //     console.log("Drive It")
    // }

    protected drive():void {
        console.log("Drive It")
    }
}

// inheritance
class Car extends Vehicle{
    // honk():void{
    //     console.log("Honk It")
    // }
    // if we write same method of parent again here, 
    // then it will get override

   private honk():void{
        console.log("Honk It")
    }
    toStartDriving():void{
        this.honk()
        // to access parent method inside this sub class mark that method as protected
        this.drive()
    }
}

const vehicle =new Vehicle()
// error as it is protected
// vehicle.drive()

// const car=new Car()
// car.drive()
// car.honk()

// to access private methods...

const car=new Car()
car.toStartDriving()