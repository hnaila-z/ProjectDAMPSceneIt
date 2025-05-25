function showSignUp() {
  document.getElementById('main-screen').classList.add('d-none');
  document.getElementById('sign-in').classList.add('d-none');
  document.getElementById('sign-up').classList.remove('d-none');
}

function showSignIn() {
  document.getElementById('main-screen').classList.add('d-none');
  document.getElementById('sign-up').classList.add('d-none');
  document.getElementById('sign-in').classList.remove('d-none');
}

function showMain() {
  document.getElementById('sign-in').classList.add('d-none');
  document.getElementById('sign-up').classList.add('d-none');
  document.getElementById('main-screen').classList.remove('d-none');
}
