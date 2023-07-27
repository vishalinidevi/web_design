let item = {
    name:'phone',
    price:234566,
    qantity:1,
    catogery : ['electronics','phones'],
    dimensions:{
        length:7,
        breath:3.5,
        height:4
    },
    buy:function()
    {
        console.log('add the items')
    }
}

item.buy()

console.log(item)

console,(item.catogery)

let item2 = new Object()

item2.name = 'phone'
item2.price = 2234
item2.quantity =1
//accessing object
//dot access
console.log(item.price)

item.price = 232
console.log(item)

//add new property

item.returnable = true

//square bracket notation
console.log(item['price'])

item['returnable'] = false

item[key] = 325345 //not working

//Loops
//for,while,do-while

for(let i=1;i<=5;i++)
{
    console.log(i)
}

//print 10 to 1
for(let i =10;i>=1;i--)
{
    console.log(i) 
}
i=10
while(i>=1)
{
    console.log(i)
    i--;
}
i=10
do{
    console.log(i)
    i--;
}while(i>=1)

// while(true){
//     let num = Number(prompt('enter a number '))
//     if(!isNaN(num))
//         break;
// }

//continue - skips the current iteration

for(i=1;i<=10;i++){
    if(i%3==0)
        continue
    console.log(i)
}

//for..of

let arr = ['apple','orange','grapes','mango']

for(i=0;i<arr.length;i++)
    console.log(arr[i])

for(let fruit of arr)
    console.log(fruit)

//for..in

let item = {
    name:'phone',
    price:234566,
    qantity:1}

for(let key in item){
    console.log(item[key])
}


