class Colors{
    
    // if we write public here then it is equivalent of declaring and initialization
    constructor(public color:string){

    }

}

const color=new Colors('orange')
console.log(color.color)