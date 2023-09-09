var lettersOption = document.getElementById('lettersOption');
var upperCaseOption = document.getElementById('upperCaseOption');
var lowerCaseOption = document.getElementById('lowerCaseOption');
lettersOption.addEventListener('change', function () {
    if (lettersOption.checked) {
        upperCaseOption.disabled = false;
        lowerCaseOption.disabled = false;
    }
    else {
        upperCaseOption.disabled = true;
        lowerCaseOption.disabled = true;
    }
});
