let expression = document.getElementById('expression');
let removeBtn = document.getElementById('remove');
let result = document.getElementById('result');
let equalBtn = document.getElementById('equal');
let clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click', () => {
  expression.innerText = '';
});

equalBtn.addEventListener('click', () => {
  result.innerText = eval(expression.innerText);
});

removeBtn.addEventListener('click', () => {
  let newExp = expression.innerText.split('');
  newExp.pop();
  newExp.join('');
  expression.innerText = newExp.join('');
});

function insert(num) {
  return expression.innerText = expression.innerText + num;
}