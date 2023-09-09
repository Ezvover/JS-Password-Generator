let lettersOption = document.getElementById('lettersOption') as HTMLInputElement;
let upperCaseOption = document.getElementById('upperCaseOption') as HTMLInputElement;
let lowerCaseOption = document.getElementById('lowerCaseOption') as HTMLInputElement;
let numberOption = document.getElementById('numberOption') as HTMLInputElement;
let digitsAmount = document.getElementById('digitsAmount') as HTMLInputElement;
let generateButton = document.getElementById('generateButton') as HTMLInputElement;
let outputLabel = document.getElementById('outputLabel') as HTMLInputElement;


function GenerateArray()
{
    if (lettersOption.checked || numberOption.checked)
    {
        let symbolsArr : any[] = [];
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
        }

        if (numberOption.checked)
        {
            symbolsArr.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
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

        while (answer.length <= parseInt(digitsAmount.value))
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
    }
    else
    {
        upperCaseOption.disabled = true;
        lowerCaseOption.disabled = true;
    }
});

numberOption.addEventListener('change', function ()
{
    if (numberOption.checked)
    {
        digitsAmount.style.display = 'block';
    }
    else
    {
        digitsAmount.style.display = 'none';
    }
});

generateButton.addEventListener('click', function (event)
{
    event.preventDefault();
    outputLabel.textContent = GeneratePassword();
});