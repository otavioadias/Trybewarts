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
