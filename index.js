// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers, query) {
    const lowerCaseQuery = query.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase() === lowerCaseQuery);
}




function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
}



function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}