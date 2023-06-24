document.addEventListener('DOMContentLoaded', () => {
  let item = document.querySelectorAll('.hitting-content-item'),
    input = document.querySelectorAll('.hitting-content__field '),
    input1 = document.querySelector('.input-one'),
    input2 = document.querySelector('.input-two'),
    input3 = document.querySelector('.input-three'),
    inputText = document.querySelectorAll('.hitting-content__field p'),
    inputText1 = document.querySelector('.input-one p'),
    inputText2 = document.querySelector('.input-two p'),
    inputText3 = document.querySelector('.input-three p'),
    close = document.querySelectorAll('.close'),
    welldone = document.querySelector('.welldone'),
    hittinBtn = document.querySelector('.hittin-btn'),
    deleted = document.querySelectorAll('.need-hide'),
    dontShow1 = document.querySelector('.dont-show1'),
    dontShow2 = document.querySelector('.dont-show2'),
    dontShow3 = document.querySelector('.dont-show3'),
    dontShow4 = document.querySelector('.dont-show4');

  const clickOnItem = () => {
    item.forEach((el) => {
      el.addEventListener('click', () => {
        for (let i = 0; item.length > i; ++i) {
          if (input2.classList.contains('busy')) {
            item[i].classList.add('unactive');
          }
        }
        el.classList.add('used');
        if (input1.classList.contains('active')) {
          inputText1.innerText = el.innerText;
          input1.classList.remove('active');
          input1.classList.add('busy');
          input2.classList.add('active');
          for (let i = 0; close.length > i; ++i) {
            close[0].classList.add('active');
          }
        } else if (input2.classList.contains('active')) {
          inputText2.innerText = el.innerText;
          if (inputText2.innerText == el.innerText) {
            el.classList.add('used');
          }
          input2.classList.remove('active');
          input2.classList.add('busy');
          input3.classList.add('active');
          for (let i = 0; close.length > i; ++i) {
            close[1].classList.add('active');
            close[0].classList.add('unactive');
          }
        } else if (input3.classList.contains('active')) {
          inputText3.innerText = el.innerText;
          input3.classList.remove('active');
          input3.classList.add('busy');
          for (let i = 0; close.length > i; ++i) {
            close[2].classList.add('active');
            close[1].classList.add('unactive');
            close[0].classList.add('unactive');
          }
        }
      });
    });
  };
  clickOnItem();

  const resetCurentInput = () => {
    for (let i = 0; close.length > i; ++i) {
      close[i].addEventListener('click', () => {
        item.forEach((el) => {
          for (let i = 0; inputText.length > i; ++i) {}
          if (el.innerText == inputText[i].innerText) {
            el.classList.remove('used');
          }
        });
        if (input3.classList.contains('busy')) {
          input3.classList.remove('busy');
          input3.classList.add('active');
          inputText3.innerText = '?';
          close[2].classList.remove('active');
          close[1].classList.remove('unactive');
          for (let i = 0; item.length > i; ++i) {
            item[i].classList.remove('unactive');
          }
        } else if (input2.classList.contains('busy')) {
          input3.classList.remove('busy');
          input3.classList.remove('active');
          input2.classList.add('active');
          input2.classList.remove('busy');
          inputText2.innerText = '?';
          close[1].classList.remove('active');
          close[0].classList.remove('unactive');
        } else if (input1.classList.contains('busy')) {
          input2.classList.remove('busy');
          input2.classList.remove('active');
          input1.classList.add('active');
          input1.classList.remove('busy');
          inputText1.innerText = '?';
          close[0].classList.remove('active');
        }
      });
    }
  };
  resetCurentInput();

  document.addEventListener('keydown', function (event) {
    for (let i = 0; item.length > i; ++i) {
      if (
        inputText1.innerText == item[4].innerText &&
        inputText2.innerText == item[2].innerText &&
        inputText3.innerText == item[0].innerText
      ) {
        document.querySelector('.hitting-ball__leg').classList.add('active');
        document.querySelector('.hitting-ball__ball').classList.add('active');
        for (let i = 0; deleted.length > i; ++i) {
          deleted[i].classList.add('delete');
        }
        for (let i = 0; input.length > i; ++i) {
          input[i].style.border = 'none';
          input[i].style.padding = '0';
        }
        for (let i = 0; close.length > i; ++i) {
          close[i].style.display = 'none';
        }
        setTimeout(() => {
          dontShow1.classList.remove('delete');
        }, 300);
        setTimeout(() => {
          dontShow2.classList.remove('delete');
        }, 600);
        setTimeout(() => {
          dontShow3.classList.remove('delete');
        }, 900);
        setTimeout(() => {
          dontShow4.classList.remove('delete');
        }, 1200);

        setTimeout(() => {
          welldone.classList.add('active');
          document.querySelector('.bg').classList.add('active');
        }, 2000);
      }
    }
  });

  const endTask = () => {
    hittinBtn.addEventListener('click', () => {
      for (let i = 0; item.length > i; ++i) {
        if (
          inputText1.innerText == item[4].innerText &&
          inputText2.innerText == item[2].innerText &&
          inputText3.innerText == item[0].innerText
        ) {
          document.querySelector('.hitting-ball__leg').classList.add('active');
          document.querySelector('.hitting-ball__ball').classList.add('active');
          for (let i = 0; deleted.length > i; ++i) {
            deleted[i].classList.add('delete');
          }
          for (let i = 0; input.length > i; ++i) {
            input[i].style.border = 'none';
            input[i].style.padding = '0';
          }
          for (let i = 0; close.length > i; ++i) {
            close[i].style.display = 'none';
          }
          setTimeout(() => {
            dontShow1.classList.remove('delete');
          }, 300);
          setTimeout(() => {
            dontShow2.classList.remove('delete');
          }, 600);
          setTimeout(() => {
            dontShow3.classList.remove('delete');
          }, 900);
          setTimeout(() => {
            dontShow4.classList.remove('delete');
          }, 1200);

          setTimeout(() => {
            welldone.classList.add('active');
            document.querySelector('.bg').classList.add('active');
          }, 2000);
        }
      }
    });
  };
  endTask();
});