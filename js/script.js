let text = "lorem ipsum is a new version in a last on week to search youtube";
let letter = text.split('');
let mistakes = 0;
let thisLetter = 0;
let seeText = document.querySelector('.text');
// let seeButtons = document.querySelector('.buttons');
seeText.innerHTML = text.slice(thisLetter);

document.addEventListener('keyup', (button) => {
    if (button.key == letter[thisLetter]) {
        thisLetter++;
        seeText.innerHTML = text.slice(thisLetter);
    } else {
        mistakes++;
        console.log("Количество ошибок: " + mistakes)
    }

    if (text.slice(thisLetter) == false) {
        console.log('finish')
    }
})