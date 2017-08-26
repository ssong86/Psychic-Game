// Sets the computer choices to whole alphabet
// Probably an easier method but didn't bother to research
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Declares the tallies to 0
var wins = 0;
var losses = 0;
var guessCount = 9;
var guessTally = [];
var setCompPick = "";
// When the user presses the key it records the keypress and then sets it to userguess
document.onkeyup = function(event) {
    var userPick = String.fromCharCode(event.keyCode).toLowerCase();

    // This sets the computer guess, at the beginning of the game
    if (guessCount == 9) {
        var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        setCompPick = computerPick;
    }
    // if userPick is not in guessTally array, run game
    var userCheck = guessTally.indexOf(userPick);
    if (userCheck < 0){

        // Compares userPick to computerPick
        if (userPick == setCompPick){
            // if true, User wins, reset game
            wins++;
            guessCount = 9;
            guessTally = [];
        }else{
            // add user pick to user array guessTally and reduce guessCount
            guessTally.push(userPick);
            guessCount--;
        }

    }
    // check if guessCount = 0, add as a loss, and reset game
    if (guessCount == 0) {
        losses++;
        guessCount = 9;
        guessTally = [];
    }

    // Taking the tallies and displaying them in HTML
    var html = "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " +
        wins +
        "</p>" +
        "<p>Losses: " +
        losses +
        "</p>" +
        "<p>Guesses Left: " +
        guessCount +
        "</p>" +
        "<p>Your Guesses so far: " +
        guessTally +
        "</p>";
    // Placing the html into the game ID
    document.querySelector('#game').innerHTML = html;
}