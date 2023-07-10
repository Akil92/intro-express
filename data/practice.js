const cars = [
    {make: "Nissan", model: "Altima", year:2018, miles: 80000},
    {make: "Honda", model: "Accord", year: 2010, miles: 130000},
    {make:"Dodge", model: "Ram", year: 2012, miles:165000},
    {make:"Toyota", model: "Camry", year: 2023, miles: 40000},
]
 //selsect cars that are between the year 2020 and 2010, and have a milage between 85000 and 150000
module.exports = {
    select: function() {
   return cars.filter(yearMile=>{ 
   return yearMile.year > 2010 && yearMile.year < 2020;
    
   })
    }
}