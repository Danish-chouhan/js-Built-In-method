// var a = ["Danish chouhan" , 17]
// document.write(a.length)

// var a =[1,2,3,4,5];
// document.write(a.at(4));

// var a = [1,2,3];
// var b = [4,5,6];
// document.write(a.concat(b))

// var a = [1,2,3,4,5];
// var b = a.copyWithin(2,3,5)
// document.write(b)

// var a = [1,2,3,4,5,6]
// var b = a.entries()
// document.write(b.next().value)
// document.write(b.next().value)

var a = [1,2,3,4,5,6,7,8,9,10];
var b = a.every(dan)
function dan(x){
    return x < 11
}
document.write(b)