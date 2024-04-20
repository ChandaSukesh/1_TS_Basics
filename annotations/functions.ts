const addSum = (a:number,b:number) : number=>{
    return a+b
}
const sum=addSum(1,2)
console.log("suk1",sum);


// function declaration by function keyword

function divide(a:number,b:number):number{
    return a/b;
}

// anonyms function 
const multiply = function(a:number,b:number):number {
    return a*b;
}

// destructing with annotation

const todaysWeather={
    day:new Date(),
    weather:'sunny'
}

const logWeather=({day,weather}:{day:Date,weather:string,}):void=>{
    console.log(day,weather);

}
logWeather(todaysWeather)