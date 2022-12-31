let text = document.querySelector('.text').textContent;
let startTime = Date.now();
let letter = getArrayText(text);
text = letter.join('');
let mistakes = 0;
let thisLetter = 0;
let allowedToPrint = true;
let seeText = document.querySelector('.text');
let seeButtons = document.querySelector('.buttons');
seeText.innerHTML = text.slice(thisLetter);

print();

document.addEventListener('keyup', (button) => {
    if (allowedToPrint == true) {
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
        document.getElementById(text[thisLetter])?.classList.add("active");
    }
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
    document.querySelector('.progress__body').style.width = (thisLetter / text.length * 100).toFixed() + '%';


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

    if (result == false) {
        showModalWindow();
    }

    if (text.slice(thisLetter) == false) {
        seeText.innerHTML = "";
    } else {
        seeText.innerHTML = `<div class="printed">${printed}</div>` + result;
    }
}


function showModalWindow() {
    (function showSpeedPrint() {
        let time = Date.now() - startTime;
        let speed = (text.length / (Math.floor(time / 1000) / 60)).toFixed(0);
        document.querySelector('.statistic__speed').innerHTML = `Speed: <span style='color: rgb(0, 150, 0)'>${speed}</span> WRM`;
    })()
    document.querySelector('.statistic').style.display = 'flex';
    let endTime = Date.now();
    let time = ((endTime - startTime) / 1000).toFixed(2);
    allowedToPrint = false;
    document.querySelector('.statistic__mistakes').innerHTML = `Mistakes: <span style='color: rgb(255, 0, 0)'>${mistakes}</span>`;
    document.querySelector('.statistic__time').innerHTML = `Time: <span style='color: rgb(0, 150, 0)'>${time}</span>s`;
}


function getArrayText(text) {
    let letter = text.split('');
    let count = 0;



    return letter.filter((el) => {
        if (el == " ") {
            count++;
        } else {
            count = 0;
        }

        if (count >= 2 || el == "\n") {
            return false;
        } else {
            return true;
        }
    });
}