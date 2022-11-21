let text = "grid template colums";
let letter = text.split('');
let mistakes = 0;
let thisLetter = 0;
let seeText = document.querySelector('.text');
let seeButtons = document.querySelector('.buttons');
seeText.innerHTML = text.slice(thisLetter);

print();

document.addEventListener('keyup', (button) => {
    resetStyles();
    print();
    let seeButton = document.getElementById(button.key);
    seeButton.classList.add('click');

    if (button.key == letter[thisLetter]) {
        thisLetter++;
        print();

        if (text.slice(thisLetter) == false) {
            seeText.innerHTML = "";
        }
    } else {
        mistakes++;
    }

    console.log();
    document.getElementById(text[thisLetter])?.classList.add("active");
});

function resetStyles() {
    let buttonList = document.querySelectorAll('.button');
    buttonList.forEach((key) => {
        key.classList.remove('active');
        key.classList.remove('click');
    })
}

function print() {
    let result = text.slice(thisLetter);
    let printed = text.slice((thisLetter >= 10) ? (thisLetter - 10) : 0, thisLetter);
    if (result.length >= 20) {
        result = result.slice(0, 20);
        result += "...";
    }

    if (printed.at(-1) == " ") {
        printed = printed.slice(0, printed.length - 1) + "&#160;";
    }
    if (result[0] == " ") {
        result = "&#160;" + result.slice(1);
    }

    if (text.slice(thisLetter) == false) {
        seeText.innerHTML = "";
    } else {
        seeText.innerHTML = `<div class="printed">${printed}</div>` + result;
    }
}