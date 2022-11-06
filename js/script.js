let text = "lorem ipsum is a new version in a last on week to search youtube";
let letter = text.split('');
let thisLetter = 0;
let seeText = document.querySelector('.text');
let seeButtons = document.querySelector('.buttons');
seeText.innerHTML = text.slice(thisLetter);

document.addEventListener('keydown', (button) => {
    if (button.key == letter[thisLetter]) {
        thisLetter++;
        seeText.innerHTML = text.slice(thisLetter);
        seeButtons.innerHTML = button.key;
    } else {
        console.log("Неправильно")
    }
})