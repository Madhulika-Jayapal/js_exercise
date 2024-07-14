// Getting strings for a player’s health and location

var getPlayerHealth;
var getPlayerPlace;

getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

console.log(getPlayerHealth("Kandra", 50));
console.log(getPlayerPlace("Kandra", "The Dungeon of Doom"));

var showPlayerInfo;

showPlayerInfo = function (playerName, playerHealth, playerPlace) {
    console.log(getPlayerHealth(playerName, playerHealth));
    console.log(getPlayerPlace(playerName, playerPlace));
};

showPlayerInfo("Dax", 50, "The Bath");
// Output:
// Dax has health 50
// Dax is in The Bath

showPlayerInfo("Kandra", 50, "The Dungeon of Doom");
// Output:
// Kandra has health 50
// Kandra is in The Dungeon of Doom

/* Further Adventures
 *
 * 1) Create a showPlayerInfo function with three
 *    parameters, playerName, playerHealth and
 *    playerPlace.
 *
 * 2) Call getPlayerHealth and getPlayerPlace
 *    from your new showPlayerInfo function.
 *
 *    e.g. showPlayerInfo("Dax", 50, "The Bath")
 *    should produce the output
 *
 *    Dax has health 50
 *    Dax is in The Bath
 *
 */