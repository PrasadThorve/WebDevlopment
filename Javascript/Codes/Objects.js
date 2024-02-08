function HouseWife(name,age,experience,work){
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.work = work;
}

var HouseWife1 = new HouseWife('xyz',14,0,["cleaning","cooking"]);

console.log(HouseWife1.age);
console.log(HouseWife1.work);