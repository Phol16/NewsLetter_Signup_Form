const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submitButton');
const dismissButton = document.querySelector('#dismissButton');
const errorMessage = document.querySelector('#errorMessage');

const mainComponent = document.querySelector('#mainComponent');
const thanksComponent = document.querySelector('#thanksComponent');

const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;

emailInput.addEventListener('input', () => {
  (emailInput.style.backgroundColor = 'white'),
    (emailInput.style.border = 'solid var(--Grey) 1px');
  errorMessage.style.display = 'none';
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (!emailRegEx.test(emailInput.value)) {
    (emailInput.style.backgroundColor = '#ffba85'),
      (emailInput.style.border = 'solid var(--Tomato) 1px');
    errorMessage.style.display = 'block';
  } else {
    thanksComponent.style.display = 'grid';
    mainComponent.style.display = 'none';

    (emailInput.style.backgroundColor = 'white'),
      (emailInput.style.border = 'solid var(--Grey) 1px');

    errorMessage.style.display = 'none';
  }
});
dismissButton.addEventListener('click', (e) => {
  thanksComponent.style.display = 'none';
  mainComponent.style.display = 'flex';
});
