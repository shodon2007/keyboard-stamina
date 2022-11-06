let text = "lorem ipsum is a new version in a last on week to search youtube";
let letter = text.split('');
let thisLetter = 0;
document.querySelector('body').innerHTML = text;

document.addEventListener('keydown', (button) => {
    if (button.key == letter[thisLetter]) {
        thisLetter++;
        document.querySelector('body').innerHTML = text.slice(thisLetter);
    } else {
        console.log("Неправильно")
    }
})