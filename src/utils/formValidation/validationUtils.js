//verifica se a entrada contém apenas numéros de 0 a 9.
export function isValidNumers(input) {
  return /^[0-9]+$/.test(input);
}

//verifica se a entrada contém apenas caracteres alfabéticos maiúsculos ou minúsculos.
export function isValidLetters(input) {
  return /^[a-zA-Z]+$/.test(input);
}

//Para o cartão no formato ____.____.____.____.
export function isValidCardNumber(cardNumber) {
  return /^(\d{4}\.){3}\d{4}$/.test(cardNumber);
}

// Para a data de validade no formato __/__
export function isValidExpiryDate(expiryDate) {
  return /^d{2}\/\d{2}$/.test(expiryDate);
}

//Para email no formato correto sem ou com dominio
const emailRegex =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?:[a-zA-Z]{2,}|[a-zA-Z]{2,}\.[a-zA-Z]{2,}|aero|arpa|biz|com|coop|edu|gov|info|int|jus|mil|museum|name|net|org|pro|[a-zA-Z]{2,})$/i;

export function isValidEmail(email) {
  return emailRegex.test(email);
}

//Para CPF no formato ___.___.___-__
export function isValidCPF(cpf) {
  return /^(\d{3}\.){2}\d{3}-\d{2}$/.test(cpf);
}
