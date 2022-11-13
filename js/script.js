let text = "21312321313112154656";
let letter = text.split('');
let mistakes = 0;
let thisLetter = 0;
let seeText = document.querySelector('.text');
let seeButtons = document.querySelector('.buttons');
seeText.innerHTML = text.slice(thisLetter);

document.addEventListener('keyup', (button) => {
    resetStyles();
    let seeButton = document.getElementById(button.key);

    if (button.key == letter[thisLetter]) {
        seeButton.classList.add('active');
        thisLetter++;
        seeText.innerHTML = text.slice(thisLetter);
    } else {
        mistakes++;
        console.log("Количество ошибок: " + mistakes);
    }

    if (text.slice(thisLetter) == false) {
        console.log('finish')
    }
});

function resetStyles() {
    let buttonList = document.querySelectorAll('.button')
    buttonList.forEach((key) => {
        key.classList.remove('active');
    })
}