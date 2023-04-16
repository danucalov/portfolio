const cnvrtBtn = document.querySelector('button');
// console.log(cnvrtBtn);

cnvrtBtn.addEventListener('click', inchesToCm);

function inchesToCm() {
    let inches = document.querySelector('#inputInches').value;
    inches = Number(inches);
    // String concatenation = stupid
    // console.log(inches + " inches = " + inches*2.54 + " centimeters ");
    // Template Literals = our best friend
    // console. log(`${inches} inches = § {inches*2.54} centimeters`);

    const cm = document.querySelector ('#result');
    // console.log(cm);
    cm.innerHTML = `${inches} inches = ${inches*2.54} centimeters`;
}