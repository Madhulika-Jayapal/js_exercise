// Converting a string to upper case

var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);

var getBig = function (str) {
    return str.toUpperCase();
}

var planet1 = "Saturn";
console.log(planet1 + " becomes " + getBig(planet1));

var getSmall = function (str) {
    return str.toLowerCase();
};

var planet2 = "Mars";
console.log(planet2 + " becomes " + getSmall(planet2));
/* Further Adventures
 *
 * 1) Create a getBig function that accepts a
 *    string as an argument and returns it
 *    converted to upper case.
 *
 * There is also a toLowerCase string method.
 *
 * 2) Create a getSmall function that accepts a
 *    string as an argument and returns it
 *    converted to lower case.
 *
 */