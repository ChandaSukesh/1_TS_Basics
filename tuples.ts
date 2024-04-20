const drink={
    color:'brown',
    carbonated:true,
    sugar:40
}

// const pepsi=['brown',true,40]
// here we can change the order,  but ideally that is not the case, so tuples come into the picture

// so below declaration is a tuple
const pepsi : [string,boolean,number]=['brown',true,40]

// or
// type alias
type Drink= [string,boolean,number]
const tea : Drink=['brown',true,40]  // both are same
