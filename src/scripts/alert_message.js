function alertMessage(status) {
  let card = document.querySelector('.alert_card');
  let p = document.querySelector('.alert_card p');
  card.classList.add('active');

  if (status) {
    card.classList.add('success');
    p.innerHTML = `Texto copiado com sucesso!`;
  } else {
    card.classList.add('fail');
    p.innerHTML = `Texto não copiado! :(`;
  }

  setTimeout(function () {
    card.classList.remove('active');
    card.classList.remove('success');
    card.classList.remove('fail');
  }, 3000);

  clearTimeout(alertMessage);
}

export default alertMessage;
