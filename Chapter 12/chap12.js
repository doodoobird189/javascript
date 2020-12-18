var trainSpeed = 250;
var trainPosition = 0;
var animation;

/*
var train = document.getElementById("train");
train.addEventListener("click", speedUp);
*/

var startButton = document.getElementById("startButton");
startButton.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation); // setting interval to 0
    animation = setInterval(frame, trainSpeed);


    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition >= 916) { // passes 915 mark as its speed is too great
        clearInterval(animation);
        alert(":O!");
        console.log("Crash!");
    }
}

function stopTrain() {
    clearInterval(animation);
    if (trainPosition < 916) {
        console.log("Whew! That was close!");
    }
}