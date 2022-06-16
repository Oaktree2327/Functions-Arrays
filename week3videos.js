let customerNames = [];
customerNames.push ('Tony Erickson');
customerNames.push ('Lucas Dean');

for(let i = 0; i < customerNames.length; i++){
    console.log (customerNames[i]);
}

for (name of customerNames) {
    console.log(name);
}

// modulize means function
 function myFunction() {
    for (let i =0; i < 100; i++) {
        console.log(i);
    }
}

// writing or declaring a function doesn't result in a function being executed


function createFullName(firstName, lastName){
    console.log(firstName + " " + lastName)
}

createFullName("Alex", "Erickson")

function createFullName(firstName, lastName){
    return firstName + " " + lastName;
}

let newNamer = createFullName("Linda", "Erickson")
console.log ("Welcome, " + newNamer);


let names = ["Sam", "Tom", "Eric", "Sally", "Nicholas"];
let lengths = names.map(function(element) {
    return element.length;
});
console.log(lengths);

let sum =lengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 10);

// the 10 adds is just that + 10
console.log(sum);

names.forEach(function(element){
    console.log(element);
});

let evens = names.filter(function(element){
    return element.length % 2 == 0;
});
console.log (evens);

var dvdPlayer = {
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: 'Blue',
    dvdName: "Star Wars",
    printDVDName: function(){
        console.log(this.dvdName);
    }
};

console.log(dvdPlayer.depth);
dvdPlayer.printDVDName();


