const profile={
    name:'Sukesh',
    age:20,
    cords:{
        lat: 12.70,
        lng:16.89
    },
    setAge(age:number):void{
        this.age=age;
    }
}

const {age,cords} : {age:number, cords:{lat:number;lng:number}}=profile