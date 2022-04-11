const submitButton = document.querySelector('.submit-button');
const cardTwo = document.querySelector('.result-card');
const cardOne = document.querySelector('.rating-component');
const buttons = document.querySelectorAll('input');
const rateResult = document.querySelector('.result');

submitButton.addEventListener('click', showResult);

buttons.forEach((element) => {
  element.addEventListener('click', selectRate);
});

function showResult() {
  let canContinue = false;
  buttons.forEach((element) => {
    if (element.classList.contains('active')) {
      canContinue = true;
    } else return;
  });
  if (canContinue) {
    cardTwo.classList.remove('hidden');
    cardOne.classList.add('hidden');
    const activeRate = document.querySelector('.active').value
    rateResult.innerHTML = `You selected ${activeRate} out of 5`;
  }
}

function selectRate() {
  buttons.forEach((elements) => {
    elements.classList.remove('active');
  });
  this.classList.add('active');
}
