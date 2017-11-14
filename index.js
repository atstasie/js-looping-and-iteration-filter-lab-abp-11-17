// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching (drivers, name) {
  return drivers.filter(
    function(driverName) {
      return driverName.toLowerCase() === name.toLowerCase()
    });
}
  
  
function fuzzyMatch(drivers, name) {
    function fuzzyMatch (drivers, name) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}
}  

