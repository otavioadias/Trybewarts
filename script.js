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

function show() {
  let localSt = JSON.parse(localStorage.getItem('Formulário'));
  localSt = (Object.values(localSt));
  const formulario = document.querySelector('#evaluation-form');
  const form = document.createElement('ul');
  form.classList = ('result');
  for (let index = 0; index < localSt.length; index += 1) {
    const specs = document.createElement('li');
    specs.innerText = localSt[index];
    form.appendChild(specs);
  }
  formulario.innerHTML = '';
  formulario.appendChild(form);
}

function selected() {
  const mat = document.querySelectorAll('.subject:checked');
  let matValue = '';
  for (let index = 0; index < mat.length; index += 1) {
    if (index === mat.length - 1) {
      matValue += `${mat[index].value}`;
    } else {
      matValue += `${mat[index].value}, `;
    }
  }
  return matValue;
}

function saveForms(event) {
  const name = document.querySelector('#input-name').value;
  event.preventDefault();
  const objectForms = {
    Nome: `Nome: ${name} ${document.querySelector('#input-lastname').value}`,
    Email: `Email: ${document.querySelector('#input-email').value}`,
    Casa: `Casa: ${document.querySelector('#house').value}`,
    Família: `Família: ${document.querySelector('input[name="family"]:checked').value}`,
    Matérias: `Matérias: ${selected()}`,
    Avaliação: `Avaliação: ${document.querySelector('input[name="rate"]:checked').value}`,
    Observações: `Observações: ${document.querySelector('#textarea').value}`,
  };
  localStorage.setItem('Formulário', JSON.stringify(objectForms));
  show();
}

buttonSubmit.addEventListener('click', saveForms);
