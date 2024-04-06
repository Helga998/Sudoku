function read() {
  return[
    ['-','8','6','-','1','9','4','2','7'],
    ['-','2','-','7','-','-','9','-','-'],
    ['-','7','-','-','5','-','-','8','3'],
    ['7','-','-','-','6','-','5','9','8'],
    ['-','-','8','9','-','-','-','-','-'],
    ['-','9','1','-','-','5','7','-','-'],
    ['-','6','-','5','-','3','8','7','1'],
    ['-','-','-','-','-','-','3','-','9'],
    ['4','3','7','1','-','8','-','5','-'],
  ]
}

function solve() {
  const arr = read(num);
  const askArrSolved = [];
  for (let i = 0; i < arr.length; i += 1) {
    let etalon = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    askArrSolved[i] = arr[i]
      .map((el) => {
        if (el !== "-") {
          etalon.splice(etalon.indexOf(el), 1);
          return el;
        } else {
          return el;
        }
      })
      .map((el) => {
        if (el === "-") {
          let index = Math.floor(Math.random() * etalon.length);
          el = etalon[index];
          etalon.splice(index, 1);
          return el;
        } else {
          return el;
        }
      });
  }
  return askArrSolved;
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
