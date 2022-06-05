// const calc = (a,b)=>{
//     console.log(a+b)
//     return a+b  
// }

// const display = (sum)=>{
//     console.log(sum)
// }

// let x = 0
// setTimeout(()=>{
//     x = calc(5,2)
// },2000);


// display(x)

// console.log('Hello')


function calc(a,b,callback){
    let x=  a+b
    callback(x)
}

function display(sum){
    console.log('Sum is '+sum)
}

calc(5,2,display)