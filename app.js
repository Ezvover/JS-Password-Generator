var lettersOption = document.getElementById('lettersOption');
var upperCaseOption = document.getElementById('upperCaseOption');
var lowerCaseOption = document.getElementById('lowerCaseOption');
var numberOption = document.getElementById('numberOption');
var digitsAmount = document.getElementById('digitsAmount');
var generateButton = document.getElementById('generateButton');
var outputLabel = document.getElementById('outputLabel');
function GeneratePassword() {
    var symbolsArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var answer = "";
    while (answer.length <= parseInt(digitsAmount.value)) {
        answer += symbolsArr[Math.floor(Math.random() * symbolsArr.length)];
    }
    console.log(answer);
    return answer;
}
lettersOption.addEventListener('change', function () {
    if (lettersOption.checked) {
        upperCaseOption.disabled = false;
        lowerCaseOption.disabled = false;
    }
    else {
        upperCaseOption.checked = false;
        lowerCaseOption.checked = false;
        upperCaseOption.disabled = true;
        lowerCaseOption.disabled = true;
    }
});
numberOption.addEventListener('change', function () {
    if (numberOption.checked) {
        digitsAmount.style.display = 'block';
    }
    else {
        digitsAmount.style.display = 'none';
    }
});
generateButton.addEventListener('click', function (event) {
    event.preventDefault();
    outputLabel.textContent = GeneratePassword();
});
