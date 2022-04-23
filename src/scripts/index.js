import encrypt from './encrypt.js';
import decrypt from './decrypt.js';

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

DOM.btnEncrypt.addEventListener('click', () => {
  if (DOM.userText.value.trim()) {
    let text = DOM.userText.value.toLowerCase();
    showMessage(encrypt(text));
  } else {
    alert('TEXTAREA VAZIO!!');
  }
});

DOM.btnDecrypt.addEventListener('click', () => {
  if (DOM.displayResultText.value.trim()) {
    let text = DOM.displayResultText.value.toLowerCase();
    showMessage(decrypt(text));
  } else {
    if (DOM.userText.value.trim()) {
      let text = DOM.userText.value.toLowerCase();
      showMessage(decrypt(text));
    } else {
      alert('TEXTAREA VAZIO!!');
    }
  }
});
