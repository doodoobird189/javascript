var secret_number = Math.floor(Math.random() * 11) + 1;
var guess;
document.getElementById("Enter").addEventListener("click", check_guess);

function check_guess() {
    guess = Number(document.getElementById("guess").value);

    var answer = document.getElementById("answer");

    if (guess > secret_number) {
        answer.innerHTML = "<br><br>Guess is too high";
    } else if (guess < secret_number) {
        answer.innerHTML = "<br><br>Guess is too low";
    } else {
        answer.innerHTML = "<br><br>Correct!";
    }

    document.getElementById("guess").value = "";
}