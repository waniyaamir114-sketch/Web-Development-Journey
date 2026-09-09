let phone ={
Brand: "Samsung",
Model: "Galaxy S21",
Price: 799,
ram: "8GB"
};

//experiment 2

phone.Price = 699;

console.log(phone.Price);

// challenge 

phone.ram = "12GB";

console.log(phone.ram);

phone.Model = "Galaxy S22";

console.log(phone.Model);

//experiment 3 + challenge

phone.color = "Black";

console.log(phone.color);

phone.storage = "256GB";

console.log(phone.storage);

// EXPERIMENT 6

if ("storage" in phone) {
    console.log("Storage is available");
}

// experiment 7

 phone.greet = function() {
    console.log("Hello, I am a " + this.Brand + " " + this.Model);
 }

 phone.greet();

 // Final challenge of day 42

 phone.showDetails = function() {
    console.log("Brand: " + this.Brand);
    console.log("Model: " + this.Model);
    console.log("RAM: " + this.ram);
    console.log("Storage: " + this.storage);
 }

phone.showDetails();