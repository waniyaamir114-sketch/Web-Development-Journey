let products = [
    { name : "Lapyop" , price :80000},
    { name : "Mouse" , price :1500},
    { name : "Keyboard" , price :3000},
    { name : "Monitor" , price :25000}
   
];
let affordableProducts = products.filter(function(products){
 return products.price < 30000 ;
});
console.log(affordableProducts);