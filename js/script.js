let text = "hellomynameisshodonasrorovandiam15yearsold";
let letter = text.split('');
let mistakes = 0;
let thisLetter = 0;
let seeText = document.querySelector('.text');
let seeButtons = document.querySelector('.buttons');
seeText.innerHTML = text.slice(thisLetter);

print();

document.addEventListener('keyup', (button) => {
    console.log(button.key);
    resetStyles();
    print();
    let seeButton = document.getElementById(button.key);
    seeButton.classList.add('click');

    if (button.key == letter[thisLetter]) {
        thisLetter++;
        print();

        if (text.slice(thisLetter) == false) {
            console.log('finish');
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
    seeText.innerHTML = `<div class="printed">${printed}</div>` + result;
}