function login() {
  const emailLogin = document.querySelector('#email-login');
  const passwordLogin = document.querySelector('#password-login');
  const buttonLogin = document.querySelector('#button-login');

  buttonLogin.addEventListener('click', () => {
    if (emailLogin.value === 'tryber@teste.com' && passwordLogin.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

login();

const checkBox = document.querySelector('#agreement');
const buttonSubmit = document.querySelector('#submit-btn');

// Referência: https://stackoverflow.com/questions/18110865/how-to-disable-enable-a-button-with-a-checkbox-if-checked
checkBox.onchange = function submitBtn() {
  if (this.checked) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
};

const textArea = document.querySelector('#textarea');

textArea.addEventListener('input', ({ currentTarget: target }) => {
  const counter = document.querySelector('#counter');
  const maxLength = target.getAttribute('maxlength');
  const currentLength = target.value.length;
  counter.innerHTML = `${maxLength - currentLength} `;
});
