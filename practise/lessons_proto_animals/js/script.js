"use strict"

function Animal(height, weight) {
    this.height = height;
    this.weight = weight;
}
Animal.prototype.eat = function() {
    alert("eat");
}
Animal.prototype.run = function() {
    alert("run");
}
Animal.prototype.sleep = function() {
    alert("sleep");
}

function Vegan(name) {
    this.name = name;
}
Vegan.prototype = Object.create(Animal.prototype);
Vegan.prototype.constructor = Vegan;

Vegan.prototype.eat = function(products) {
    if(products == "grass" || products == "vegetables") {
        return true;
    }
    return false;
}

function Predator(name) {
    this.name = name;
}
Predator.prototype = Object.create(Animal.prototype);
Predator.prototype.constructor = Predator;

Predator.prototype.eat = function(products) {
    if (products == "cat" || products == "dog" || products == "cow" || products == "mouse"){
       return true;
    }
    return false;
};

function Cat() {

}
Cat.prototype = Object.create(Predator.prototype);
Cat.prototype.constructor = Cat;

function Dog() {

}
Dog.prototype = Object.create(Predator.prototype);
Dog.prototype.constructor = Dog;

function Cow() {

}
Cow.prototype = Object.create(Vegan.prototype);
Cow.prototype.constructor = Cow;

function Mouse() {

}
Mouse.prototype = Object.create(Vegan.prototype);
Mouse.prototype.constructor = Mouse;

$(document).ready(function () {
    $("#animal-form").on("submit", function (e) {
        e.preventDefault();
        var animal = $(".animals").val(),
            product = $(".products").val(),
            animalObj;

        if(animal == "dog") {
            animalObj = new Dog();
        } else if (animal == "cat") {
            animalObj = new Cat();
        } else if(animal == "cow") {
            animalObj = new Cow();
        } else if(animal == "mouse") {
            animalObj = new Mouse();
        }
        if(animalObj.eat(product)) {
            $(".text").val(animal + " eats " + product);
        } else {
            $(".text").val(animal + " does not eat " + product);
        }
    });

})
