const fruits = ["Mango","Apple","Orange"]
// fruits.forEach(function(fruit){
//     console.log(fruit)
// })


fruits.map(function(fruit){
    // console.log(fruit)
})

// fruits.filter(function(){
    
// })


const nums = [1,2,3,4,5]
const squares = []

nums.forEach(function(num){
    squares.push(num*num)
})
// console.log(squares)


// wap to print firstName + lastName ---> Manish Basnet using forEach

// data.forEach((hello)=>{
//     console.log(hello.firstName + " " + hello.lastName)
// })

const nums2 = [2,4,6,8]
const squared = nums2.map((num)=>{
    return num * num
})
// console.log(nums2)
// console.log(squared)

const data = [
    {
        firstName : "Manish",
        lastName : "Basnet",
        address : "Itahari"
    },
    {
        firstName : "Pranjal",
        lastName : "Sharma",
        address : "Basbari"
    },
    {
        firstName : "Bob",
        lastName : "Marley",
        address : "Balgram"
    },
]

// const output = data.map((object)=>{
//     return {
//         ...object,
//         fullName : object.firstName + object.lastName
//     }
// })
// console.log(output)

const numberData = [1,2,3,4,5,6,7,8,9,10]
const oddNumbers = numberData.filter((number)=>{
     return number%2 !== 0 
})  

// output --> [6,7,8,9,10]
console.log(oddNumbers)

const files = ["index.html","app.js","app.java","style.css","test.js"]
const JSFiles = files.filter((file)=>{
    return file.endsWith(".js")
})
console.log(JSFiles)
// Output --> ["app.js","test.js"]

const lastTask = [1,2,null,undefined,"Manish","haha","hehe"]

const resultt = lastTask.filter((task)=>{
    return task !== null && task !== undefined
})
// marks > 500,status pass, name ko lastma sh hunu paryo 
const lastData = [
    {
        name : "Manish",
        marks : 800,
        status : "pass"
    },
    {
        name : "Anish",
        marks : 500,
        status : "fail"
    },
    {
        name : "Pranjal",
        marks : 900,
        status : "pass"
    },
    {
        name : "Bob",
        marks : 100,
        status : "fail"
    },
    {
        name : "Hari",
        marks : 550,
        status : "fail"
    },
    {
        name : "Shyam",
        marks : 600,
        status : "pass"
    },
    {
        name : "Laxman",
        marks : 300,
        status : "fail"
    }
]
const outputt = lastData.filter((data)=>{
    return data.marks > 500 && data.name.endsWith("sh") && data.status === "pass"
})
console.log(resultt)
//Output -- > [1,2,"Manish","haha","hehe"]

const books = [
    {
        title : "You can win",
        author : 'shiv khera',
        publishedAt : 2001
    },
    {
        title : "Think like a monk",
        author : 'Jay shetty',
        publishedAt : 2022
    },
    {
        title : "Cashflow quadrant",
        author : 'Robert T. Kiyosaki',
        publishedAt : 1909
    },
    {
        title : "You can win2",
        author : 'shiv khera',
        publishedAt : 1990
    },
    {
        title : "Think like a monk2",
        author : 'Jay shetty',
        publishedAt : 1999
    },
    {
        title : "Cashflow quadrant2",
        author : 'Robert T. Kiyosaki',
        publishedAt : 2010
    }
]

const newBooks = books.filter((book)=>{
    return book.publishedAt > 2000
})

//  Spread Operator 
// OUtput --> 
//  [
//     {
//         firstName : "Manish",
//         lastName : "Basnet",
//         address : "Itahari",
//         fullName : "Manish Basnet"
//     },
//     {
//         firstName : "Pranjal",
//         lastName : "Sharma",
//         address : "Basbari",
//          fullName : "Pranjal Sharma"
//     },
//     {
//         firstName : "Bob",
//         lastName : "Marley",
//         address : "Balgram",
//         fullName : "Bob Marley"
//     },
// ]






// const result =  data.map((object)=>{
//     return {
//         hello : object.firstName + " " + object.lastName
//     }
// })
// console.log(result)

// const numbers = [1,2,3,4,5]
// const finalResult = numbers.map((num)=>{
//    return {
//     text  : 'A',
//     number : num
//    }
// })
// console.log(finalResult)

// OUTPUT -- > 
// [
//     {
//         text : 'A',
//         number : 1 
//     },
//     {
//         text : 'A',
//         number : 2
//     },
//     {
//         text : 'A',
//         number : 3
//     },
//     {
//         text : 'A',
//         number : 4
//     },
//     {
//         text : 'A',
//         number : 5
//     }
// ]



// output --> 

// [
//     {
//         fullName : "Manish Basnet"
//     },
//     {
//         fullName : "Pranjal Sharma"
//     },
//     {
//         fullName : "Bob Marley"
//     }
// ]

