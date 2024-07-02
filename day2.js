const days = ['Sunday','haha','Tuesday','Wednesday']
// console.log(days[2])

// days.push('Thursday')
// days.pop()
// days.unshift('Hello')
// days.shift()

// const data = days.slice(1,4)
// console.log(data)



days.splice(1,1,'haha')
// console.log(days)

const data = [1,2,3,4,5,6]
// output ---> [1,'hello','bye','world',5,6]

data.splice(1,3,'hello','bye','world')
// console.log(data)

// const vowels = ['m','a','n','i','s','h']
// //output --> [13,1,14,9,19,8]
// vowels.splice(0,6,13,1,14,9,19,8)
// console.log(vowels)

const text = 'I am from nepal'
const splittedData = text.split(" ")
console.log(splittedData)

const languages = ['Js','php','C']
// languages[1] = 'html'
languages.splice(1,0,'html')
console.log(languages)
  


// var name = "Manish"
// function greet(name){
//     console.log("hello" + name)
// }

// greet('Manish')

// class Person{
//     name = 'Manish'
//     greet(){
//         console.log("Hello manish")
//     }
// }


const person = Object.freeze({
    name : "Manish",
    address : "Itahari",
    nationality : "Nepali"
})

const test = [
    {
        name : "Manish"
    },
    {
        name : "Pranjal"
    }
]

test.push({
    name : 'Sanjeev'
})
console.log(test)
//output --> 
// [
//     {
//         name : "Manish"
//     },
//     {
//         name : "Pranjal"
//     },
//     {
//         name : "Sanjeev"
//     }
// ]


const datas = {
    name : ['Manish','Pranjal']
}
datas.name.push('Sanjeev')
console.log(datas)

const test2 = {
    name : ['Manish','Pranjal','Sanjeev']
}

test2.name.splice(0,3,1,2,3)
console.log(test2)

// output --> {
//     name : [1,2,3]
// }
// output --> {
//     name = ['Manish','Pranjal','Sanjeev']
// }
// console.log(person.address)
// console.log(person['address'])
// person.age = 22 
// person.haha = "hehe"
// console.log(person)
console.log(Object.keys(person))
console.log(Object.values(person))