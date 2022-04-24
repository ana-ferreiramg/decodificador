import encrypt from './encrypt.js';
import decrypt from './decrypt.js';
import alertMessage from './alert_message.js';

const DOM = {
  userText: document.querySelector('#user_text'),
  btnEncrypt: document.querySelector('.btn.encrypt'),
  btnDecrypt: document.querySelector('.btn.decrypt'),
  btnDelete: document.querySelector('.btn.delete'),
  btnCopy: document.querySelector('.btn.copy'),
  displaySearching: document.querySelector('section.display .display_searching'),
  displayResult: document.querySelector('section.display .display_result'),
  displayResultText: document.querySelector('#display_result_text'),
};

function showMessage(text) {
  DOM.displaySearching.classList.remove('active');
  DOM.displayResult.classList.add('active');
  DOM.displayResultText.value = text;
}

function deleteText() {
  DOM.userText.value = '';
  DOM.displaySearching.classList.add('active');
  DOM.displayResult.classList.remove('active');
  DOM.userText.focus();
}

function copyToClipBoard() {
  navigator.clipboard
    .writeText(DOM.displayResultText.value)
    .then(() => {
      let text = DOM.displayResultText.value;
      navigator.clipboard.writeText(text);
      alertMessage(true);
    })
    .catch((err) => {
      alertMessage(false);
      console.log('Something went wrong', err);
    });
}

DOM.btnEncrypt.addEventListener('click', () => {
  if (DOM.userText.value.trim()) {
    let text = DOM.userText.value.toLowerCase();
    showMessage(encrypt(text));
  } else {
    alert('TEXTAREA VAZIO!!');
  }
});

DOM.btnDecrypt.addEventListener('click', () => {
  if (DOM.userText.value.trim()) {
    let text = DOM.userText.value.toLowerCase();
    showMessage(decrypt(text));
  } else {
    alert('TEXTAREA VAZIO!!');
  }
});

DOM.btnDelete.addEventListener('click', () => deleteText());

DOM.btnCopy.addEventListener('click', () => copyToClipBoard());
