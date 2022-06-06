var randomNumbers = Math.floor(((Math.random()) * 10) + 1);

for (var i = 1; userNumber != randomNumbers; i++) {

    var userNumber = prompt("Please guess a number between 1 and 10..");
    userNumber = parseInt(userNumber);
}

alert("Well done! You have guessed the correct number " + randomNumbers + " in " + i + " number of attempts.");