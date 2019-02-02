// Code your solution in this file.
students.map( s => !!s.permissionSlip && s.isVegetarian) // Find vegetarians w/ permission slips on file
  .map( s => s.preferredMeal ) // Extract the meal name
  .filter( s => s.match(/curry/i) // Find those who like curry, case-insensitive
  .length);
 
// => "How many students going on the field trip should we order curry for?"