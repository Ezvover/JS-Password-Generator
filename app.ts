let lettersOption : HTMLInputElement = document.getElementById('lettersOption') as HTMLInputElement;
let upperCaseOption : HTMLInputElement = document.getElementById('upperCaseOption') as HTMLInputElement;
let lowerCaseOption : HTMLInputElement = document.getElementById('lowerCaseOption') as HTMLInputElement;
let numberOption : HTMLInputElement = document.getElementById('numberOption') as HTMLInputElement;
let symbolOption : HTMLInputElement = document.getElementById('symbolOption') as HTMLInputElement;
let digitsAmount : HTMLInputElement = document.getElementById('digitsAmount') as HTMLInputElement;
let generateButton : HTMLInputElement = document.getElementById('generateButton') as HTMLInputElement;
let outputLabel : HTMLInputElement = document.getElementById('outputLabel') as HTMLInputElement;

function GenerateArray()
{
    if (lettersOption.checked || numberOption.checked)
    {
        type arr = number | string;
        let symbolsArr : arr[] = [];
        if (lettersOption.checked)
        {
            if (lowerCaseOption.checked)
            {
                symbolsArr.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
            }
            if (upperCaseOption.checked)
            {
                symbolsArr.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
            }
            if (upperCaseOption.checked == false && lowerCaseOption.checked == false)
            {
                symbolsArr.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
                symbolsArr.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
            }
        }

        if (numberOption.checked)
        {
            symbolsArr.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
        }
        
        if (symbolOption.checked)
        {
            symbolsArr.push('!', '@', '#', '$', '%', '&', '?', '*', '-', '+');
        }

        return symbolsArr;
    }

}

function GeneratePassword()
{
    try
    {
        let symbolsArr = GenerateArray();
        let answer : string = "";

        while (answer.length <= parseInt(digitsAmount.value) - 1)
        {
            answer += symbolsArr[Math.floor(Math.random() * symbolsArr.length)];
        }

        return answer;
    }
    catch
    {
        alert("You didn't select one of the options");
    }

}

lettersOption.addEventListener('change', function()
{
    if (lettersOption.checked)
    {
        upperCaseOption.disabled = false;
        lowerCaseOption.disabled = false;
        lowerCaseOption.checked = true;
        upperCaseOption.parentElement.style.color = '';
        lowerCaseOption.parentElement.style.color = '';
    }
    else
    {
        upperCaseOption.disabled = true;
        lowerCaseOption.disabled = true;
        upperCaseOption.checked = false;
        lowerCaseOption.checked = false;
        upperCaseOption.parentElement.style.color = 'gray';
        lowerCaseOption.parentElement.style.color = 'gray';
    }
});

generateButton.addEventListener('click', function (event)
{
    event.preventDefault();
    outputLabel.textContent = GeneratePassword();
});