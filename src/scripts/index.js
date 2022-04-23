import encrypt from './encrypt.js';
import decrypt from './decrypt.js';

const DOM = {
  textarea: document.querySelector('#user_text'),
  btnEncrypt: document.querySelector('.btn.encrypt'),
  btnDecrypt: document.querySelector('.btn.decrypt'),
  btnDelete: document.querySelector('.btn.delete'),
  btnCopy: document.querySelector('.btn.copy'),
};

DOM.btnEncrypt.addEventListener('click', () => {
  if (DOM.textarea.value.trim()) {
    let text = DOM.textarea.value.toLowerCase();
    encrypt(text);
  } else {
    alert('TEXTAREA VAZIO!!');
  }
});

DOM.btnDecrypt.addEventListener('click', () => {
  if (DOM.textarea.value.trim()) {
    let text = DOM.textarea.value.toLowerCase();
    decrypt(text);
  } else {
    alert('TEXTAREA VAZIO!!');
  }
});
