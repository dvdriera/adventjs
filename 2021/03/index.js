const isParenthesis = (c) => {
  return /[(]|[)]|[[]|[]]|[{]|[}]/.test(c);
};

const isOpenParenthesis = (c) => {
  return /[(]|[[]|[{]/.test(c);
};

const getOpposite = (c) => {
  return c === "("
    ? ")"
    : c === ")"
    ? "("
    : c === "["
    ? "]"
    : c === "]"
    ? "["
    : c === "{"
    ? "}"
    : c === "}"
    ? "{"
    : false;
};

export default function isValid(letter) {
  // ¡No dejes que el Grinch gane!
  if (/\(\)/.test(letter)) {
    return false;
  }

  if (/\[\]/.test(letter)) {
    return false;
  }

  if (/\{\}/.test(letter)) {
    return false;
  }

  let valid = true;
  const filao = [];
  [...letter].forEach((letterChar) => {
    if (valid && isParenthesis(letterChar)) {
      if (isOpenParenthesis(letterChar)) {
        filao.push(letterChar);
      } else {
        if (letterChar === getOpposite(filao[filao.length - 1])) {
          filao.pop();
        } else {
          valid = false;
        }
      }
    }
  });

  if (filao.length) {
    valid = false;
  }

  return valid;
}
