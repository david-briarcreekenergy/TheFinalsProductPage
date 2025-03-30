export const titleCase = (str) => {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

export const camelCaseToTitleCase = (str) => {
  const regex = /[A-Z]/g;
  const capitalLettersFound = str.match(regex);

  if (!capitalLettersFound) {
    return str[0].toUpperCase() + str.slice(1);
  }

  const indexesOfCapitalLetters = [];
  capitalLettersFound.forEach((capital) => {
    indexesOfCapitalLetters.push(str.indexOf(capital));
  });

  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (i === 0) {
      newStr = letter.toUpperCase();
      continue;
    }

    newStr = indexesOfCapitalLetters.includes(str.indexOf(letter))
      ? (newStr += " " + letter)
      : newStr + letter;
  }

  return newStr;
};
