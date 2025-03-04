// const num =[1,2,3];

// // const total = num.reduce( function(acc , cv){
// //     console.log( `acc : ${acc}`);
// //     return acc+ cv
// // },0);

// const total = num.reduce( (acc, cv) => (acc+cv) , 0);

// console.log(total);



const shoppingCart = [
    {
        itemName : "py course",
        price :5999
    },
    {
        itemName : "Jaava course",
        price :59
    },
    {
        itemName : "namna course",
        price :59990
    }
]


const prices = shoppingCart.reduce( (acc , item) => acc + item.price , 0);
console.log(prices);
