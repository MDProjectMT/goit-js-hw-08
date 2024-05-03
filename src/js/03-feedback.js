import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('submit', event => {
  event.preventDefault(); // Zapobieganie standardowej akcji przesłania formularza

  const email = emailInput.value;
  const message = messageInput.value;

  console.log({ email, message }); // Wylogowanie danych do konsoli

  localStorage.removeItem('feedback-form-state'); // Usunięcie danych z localStorage
  form.reset(); // Resetowanie formularza
});


const saveFormData = throttle(() => {
  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}, 500); // Aktualizacja nie częściej niż raz na 500 ms

emailInput.addEventListener('input', saveFormData);
messageInput.addEventListener('input', saveFormData);

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email;
    messageInput.value = message;
  }
});
