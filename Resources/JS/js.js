for (var i = 1; i >= 1; i++) {
    
    var randomNumbers = Math.floor(((Math.random()) * 10) + 1);

    var userNumber = prompt("Please guess a number between 1 and 10..");
    userNumber = parseInt(userNumber);

    if (userNumber === randomNumbers) {
        alert("Well done! You have guessed the correct number " + randomNumbers + " in " + i + " number of attempts.");
        break;
    }
}