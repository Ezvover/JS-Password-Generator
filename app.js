var lettersOption = document.getElementById('lettersOption');
var upperCaseOption = document.getElementById('upperCaseOption');
var lowerCaseOption = document.getElementById('lowerCaseOption');
var numberOption = document.getElementById('numberOption');
var symbolOption = document.getElementById('symbolOption');
var digitsAmount = document.getElementById('digitsAmount');
var generateButton = document.getElementById('generateButton');
var outputLabel = document.getElementById('outputLabel');
function GenerateArray() {
    if (lettersOption.checked || numberOption.checked) {
        var symbolsArr = [];
        if (lettersOption.checked) {
            if (lowerCaseOption.checked) {
                symbolsArr.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
            }
            if (upperCaseOption.checked) {
                symbolsArr.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
            }
            if (upperCaseOption.checked == false && lowerCaseOption.checked == false) {
                symbolsArr.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
                symbolsArr.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
            }
        }
        if (numberOption.checked) {
            symbolsArr.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
        }
        if (symbolOption.checked) {
            symbolsArr.push('!', '@', '#', '$', '%', '&', '?', '*', '-', '+');
        }
        return symbolsArr;
    }
}
function GeneratePassword() {
    try {
        var symbolsArr = GenerateArray();
        var answer = "";
        while (answer.length <= parseInt(digitsAmount.value) - 1) {
            answer += symbolsArr[Math.floor(Math.random() * symbolsArr.length)];
        }
        return answer;
    }
    catch (_a) {
        alert("You didn't select one of the options");
    }
}
lettersOption.addEventListener('change', function () {
    if (lettersOption.checked) {
        upperCaseOption.disabled = false;
        lowerCaseOption.disabled = false;
        lowerCaseOption.checked = true;
        upperCaseOption.parentElement.style.color = '';
        lowerCaseOption.parentElement.style.color = '';
    }
    else {
        upperCaseOption.disabled = true;
        lowerCaseOption.disabled = true;
        upperCaseOption.checked = false;
        lowerCaseOption.checked = false;
        upperCaseOption.parentElement.style.color = 'gray';
        lowerCaseOption.parentElement.style.color = 'gray';
    }
});
generateButton.addEventListener('click', function (event) {
    event.preventDefault();
    outputLabel.textContent = GeneratePassword();
});
