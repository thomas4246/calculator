//// onClick style ////

for (var item of document.querySelectorAll('.style')) {
  item.addEventListener(
    'mousedown',
    function (e) {
      e.target.classList.add('styleOnClick');
    },
    false
  );
}

document.getElementById('clear').addEventListener('mousedown', function () {
  document.querySelector('.style').classList.add('styleOnClick');
});

document.addEventListener('mouseup', () => {
  for (var item of document.querySelectorAll('.style')) {
    item.classList.remove('styleOnClick');
  }

  document.querySelector('.style').classList.remove('styleOnClick');
});

//// Copy result ///

const toolTip = document.querySelector('.tooltip');
window.addEventListener('mousemove', toolTipXY);
function toolTipXY(e) {
  let x = e.clientX,
    y = e.clientY;
  toolTip.style.top = y + 20 + 'px';
  toolTip.style.left = x + 20 + 'px';
}

document.getElementById('resultText').addEventListener('mouseenter', () => {
  toolTip.setAttribute('style', 'display: block');
});

document.getElementById('resultText').addEventListener('mouseleave', () => {
  toolTip.removeAttribute('style', 'display: block');
});

//// Calculation ////

const result = document.getElementById('resultText');
const calculation = document.getElementById('calculationText');

function formula() {
  var calMath = '';
  calculation.textContent.split('').map((element) => {
    if (element === 'x') {
      calMath += '*';
    } else {
      calMath += element;
    }
  });
  return calMath;
}

function calc(formula) {
  if (['+', '-', 'x', '/'].includes(formula[formula.length - 1])) {
    formula = formula.slice(0, formula.length - 1);
  }

  return eval(formula);
}

function wrightNum(num) {
  calculation.textContent += num;
}

function op(btn) {
  if (calculation.textContent.length !== 0) {
    if (
      !['+', '-', 'x', '/'].includes(
        calculation.textContent[calculation.textContent.length - 1]
      )
    ) {
      result.textContent = calc(formula());
      calculation.textContent += btn;
    } else {
      // result.textContent =  calc(formula());
      calculation.textContent = calculation.textContent.slice(
        0,
        formula.length - 1
      );
      calculation.textContent += btn;
    }
  }
}

document.getElementById('num0').addEventListener('click', () => {
  wrightNum(0);
});
document.getElementById('num1').addEventListener('click', () => {
  wrightNum(1);
});
document.getElementById('num2').addEventListener('click', () => {
  wrightNum(2);
});
document.getElementById('num3').addEventListener('click', () => {
  wrightNum(3);
});
document.getElementById('num4').addEventListener('click', () => {
  wrightNum(4);
});
document.getElementById('num5').addEventListener('click', () => {
  wrightNum(5);
});
document.getElementById('num6').addEventListener('click', () => {
  wrightNum(6);
});
document.getElementById('num7').addEventListener('click', () => {
  wrightNum(7);
});
document.getElementById('num8').addEventListener('click', () => {
  wrightNum(8);
});
document.getElementById('num9').addEventListener('click', () => {
  wrightNum(9);
});

document.getElementById('addition').addEventListener('click', () => {
  op('+');
});
document.getElementById('subtraction').addEventListener('click', () => {
  op('-');
});
document.getElementById('division').addEventListener('click', () => {
  op('/');
});
document.getElementById('multiplication').addEventListener('click', () => {
  op('x');
});

document.getElementById('clear').addEventListener('click', () => {
  calculation.textContent = '';
  result.textContent = 0;
});

document.getElementById('dot').addEventListener('click', () => {
  op('.');
});

document.getElementById('equal').addEventListener('click', () => {
  result.textContent =
    calc(formula()).length !== 0 ? calc(formula()) : result.textContent;
  calculation.textContent = result.textContent;
});

//// Copy ////

const tooltip = document.getElementsByClassName('tooltip')[0];
function restoreText() {
  tooltip.textContent = 'Click To Copy ✂️ ';
}

function copy() {
  document.execCommand('copy');
  tooltip.textContent = 'Copied! ✌🏻';
}

//// theme ////
const body = document.querySelector('body');

// Dark //
const dark = document.getElementById('dark');
dark.addEventListener('click', () => {
  body.classList.remove('color-theme');
  body.classList.add('dark-theme');
});

// color //
const color = document.getElementById('color');
color.addEventListener('click', () => {
  body.classList.remove('dark-theme');
  body.classList.add('color-theme');
});

// Bright //
const bright = document.getElementById('bright');
bright.addEventListener('click', () => {
  body.classList.remove('dark-theme', 'color-theme');
});

//// Footer Year ////
const year = document.getElementById('year');
year.innerHTML = new Date().getFullYear();
