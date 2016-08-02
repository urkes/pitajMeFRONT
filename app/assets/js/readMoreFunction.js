var readMoreFunction = function(text, maxLength, readmoreLink){
  if (text.length > maxLength) {
    // split the text in two parts, the first always showing
    var firstPart = String(text).substring(0, maxLength);
    firstPart += '... <a href="'+readmoreLink+'">Pročitaj još &gt;</a>';
    return firstPart;
  }

  return text;
};

