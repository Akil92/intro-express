const students = [
    {firstName: "Akil", lastName: "Maynard", age: 100},
    {firstName: 'Ye', lastName: "Pew", age: 40},
    {firstName: 'Shaquile', lastName: "O'niel", age: 50}
  ];

  module.exports = {
    getAll: function() {
        return students; 
    }
  };