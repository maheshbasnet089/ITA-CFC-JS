// const isRaining = false 

// // if(isRaining){
// //     console.log("Carry umbrella")
// // }else{
// //     console.log("Don't carry umbrella")
// // }

// //ternary operator
// // const result = isRaining ? "Carry Umbrella" : "Dont carry umbrella"
// // console.log(result)

// //short-circuit
// isRaining && console.log("Carry Umbrella")

// // const age = 21 
// // if(age > 18){
// //     console.log("you can cast vote")
// // }else{
// //     console.log("you cannot cast vote")
// // }

// // const age = "21" 
// // if(age === 21){
// //     console.log("Age equals 21")
// // }else{
// //     console.log("Age doesn't equals 21")
// // }

// // const temperature = 27 
// // if(temperature > 30){
// //     console.log("Hot")
// // }else if(temperature > 20){
// //     console.log("Moderate")
// // }else{
// //     console.log("Cool")
// // }

// // const grade = 70 
// // Grade
// // 80-90 --> console.log("A") 
// // 70- 80 --> console.log("B+") 
// // 60- 70 --> console.log("B") 
// // 0-60 --> console.log("Fail")

// const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

// // for(var i = 0; i < days.length;i++){
// //     console.log(days[i])
// // }

// // for(let abc of days){
// //     console.log(abc)
// // }

// // const data = {
// //     name : "Manish",
// //     age : 22, 
// //     address : "Itahari"
// // }

// for(let key in data){
//     console.log(key + " is " + data[key])
// }
// // name is manish 
// // age is 22 
// // address is Itahari




// // console.log(1+2)
// // console.log(2+3)
// // console.log(5+6)

// //regular function 
// function add(data){

// }

// add(1,2,3)

// //named regular function
// // const add =  function(a,b){
// //     console.log(a + b)
// // }

// // const add = (a,b)=>{
// //     console.log(a + b)
// // }

// // ()=>{
// //     console.log("Hello world")
// // }

// add(2,5,7)

// const numbers = [1,2,3,4,5]

// Make function that takes accepts numbers array as 
// parameter and loops it using for of and prints it

// accepts numbers array and print its square


const data = {
    status: 200,
    message: "Code found",
    code: [
        {
            _id: "668510da18d90581711b6292",
            text: "test\n",
            userId: "f959757",
            title: "test",
            ipAddress: "49.244.110.12",
            createdAt: "2024-07-03T08:50:34.704Z"
           
        }
    ]
}


function getSomething(param){
    console.log(param.code[0].userId)
    console.log(param.code[0].ipAddress)
    console.log(param.code[0].title)
}

getSomething(data)