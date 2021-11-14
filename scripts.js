const upperCase = document.getElementById("upper-case");
const lowerCase = document.getElementById("lower-case");
const properCase = document.getElementById("proper-case");
const sentenceCase = document.getElementById("sentence-case");
const saveTextFile = document.getElementById("save-text-file");
let textArea = document.querySelector("textarea");

upperCase.addEventListener('click', function () {
    textArea.value = textArea.value.toUpperCase();
});

lowerCase.addEventListener('click', function () {
    textArea.value = textArea.value.toLowerCase();
});

properCase.addEventListener('click', function () {
    textArea.value = firstLetterToUpperCase (textArea.value, ' ');
});

sentenceCase.addEventListener('click', function (){
    textArea.value = firstLetterToUpperCase (textArea.value, '. ');
});

saveTextFile.addEventListener('click', function (){
    download("text.txt", textArea.value);
});

function firstLetterToUpperCase(text, separator){
    let words = textArea.value.split(separator);
    let newWords = [];

    for (let index = 0; index < words.length; index++ ) {
        newWords.push(words[index].charAt(0).toUpperCase()+words[index].slice(1).toLowerCase());
    }
    return newWords.join(separator);
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
