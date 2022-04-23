function decrypt(text) {
  let newText;
  text = text.split(' ');

  newText = text.map((word) => {
    let newWord = [];

    word = word.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    newWord.push(word);

    return newWord;
  });

  newText = newText.join(' ');
  return newText;
}

export default decrypt;
