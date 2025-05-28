const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

// Сохраняем ввод в localStorage
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Обработка отправки формы
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  emailInput.value = '';
  messageInput.value = '';
});

// Восстановление данных из localStorage при загрузке
window.addEventListener('load', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    emailInput.value = parsedData.email;
    messageInput.value = parsedData.message;
    formData.email = parsedData.email;
    formData.message = parsedData.message;
  }
});

// Встроенные стили
const style = document.createElement('style');
style.textContent = `
  .feedback-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 360px;
  }

  .form-label,
  .text-form {
    display: flex;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: #2e2f42;
  }

  .text-form {
    margin: 0;
    margin-bottom: 8px;
  }

  .form-input {
    height: 40px;
    border-radius: 8px;
    margin-bottom: 8px;
    border: 1px solid #ccc;
    padding: 8px;
    transition: border-radius 0.3s ease, border 0.3s ease;
  }

  .form-textarea {
    margin-bottom: 16px;
    fill: none;
    height: auto;
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 8px;
    transition: border-radius 0.3s ease, border 0.3s ease;
  }

  .form-input:hover,
  .form-textarea:hover {
    border: 2px solid black;
  }

  input:focus,
  textarea:focus {
    border: 1px solid #666;
    outline: none;
  }

  .form-btn {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    width: 95px;
    height: 40px;
    background: #4e75ff;
  }

  .form-btn:hover {
    background: #6c8cff;
  }
`;
document.head.appendChild(style);