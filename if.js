// 1

let a = 7;
let b = 6;

let result = (a + b < 4) ? 'Мало' : 'Много';

console.log(result);

// 2

let login = 'Сотрудник';

let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';

  console.log(message);