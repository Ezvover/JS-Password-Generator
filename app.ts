let lettersOption = document.getElementById('lettersOption') as HTMLInputElement;
let upperCaseOption = document.getElementById('upperCaseOption') as HTMLInputElement;
let lowerCaseOption = document.getElementById('lowerCaseOption') as HTMLInputElement;



lettersOption.addEventListener('change', function()
{
    if (lettersOption.checked)
    {
        upperCaseOption.disabled = false;
        lowerCaseOption.disabled = false;
    }
    else
    {
        upperCaseOption.checked = false;
        lowerCaseOption.checked = false;
        upperCaseOption.disabled = true;
        lowerCaseOption.disabled = true;
    }
});