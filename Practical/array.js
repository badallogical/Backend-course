
var arr1 = ["Ram", "Shyam", "Mohan"]

console.log(arr1.indexOf("Mohan"))

function SimpleIntrest(p,r,t){
    var res = (p * r * t ) / 100;
    console.log("Simple Intreset is ", res);
}

console.log( SimpleIntrest(1000, 10, 4))



var outofScope = "Ram is good boy"

function duppy(){
    var outofScope = "Mohan is a good boy"
    
    console.log(outofScope);
}


console.log(outofScope)



