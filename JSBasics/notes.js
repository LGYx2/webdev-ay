function Human(name,age,weight,height,gender){
    this.name = name;
    this.age = age;
    this.weight = weight+'kg';
    this.height = height;
    this.gender = gender;
    this.move = function () {alert('moving')} ;
}

let man = new Human('alex',18,'65','185','M');

