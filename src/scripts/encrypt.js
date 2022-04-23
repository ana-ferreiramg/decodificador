function encrypt(text) {
  let newText;
  text = text.split(' ');

  newText = text.map((word) => {
    let newWord = [];
    word = word.split('');

    word.forEach((element) => {
      switch (element) {
        case 'a':
          element = 'ai';
          break;
        case 'e':
          element = 'enter';
          break;
        case 'i':
          element = 'imes';
          break;
        case 'o':
          element = 'ober';
          break;
        case 'u':
          element = 'ufat';
          break;
        default:
          break;
      }
      newWord.push(element);
    });
    newWord = newWord.join('');
    return newWord;
  });

  newText = newText.join(' ');
  return newText;
}

export default encrypt;
