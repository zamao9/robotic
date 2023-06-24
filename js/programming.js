document.addEventListener('DOMContentLoaded', () => {
  /* Click Answers
  ========================================================================== */
  let item = document.querySelectorAll('.movements__item'),
    firstItem = document.querySelector('.movements__first-item'),
    secondItem = document.querySelector('.movements__second-item'),
    thirdItem = document.querySelector('.movements__third-item'),
    step2 = document.querySelector('.step2'),
    step3 = document.querySelector('.step3'),
    step4 = document.querySelector('.step4'),
    step5 = document.querySelector('.step5'),
    inputText = document.querySelectorAll('.movements__field'),
    alertMessage = document.querySelector('.alert'),
    alertExit = document.querySelector('.alert__exit'),
    list = document.querySelectorAll('.movements__list'),
    img = document.querySelector('.movements__img img'),
    congratulationsMessage = document.querySelector('.congratulations');

  const clickOnAnswers = () => {
    item.forEach((el) => {
      alertExit.addEventListener('click', () => {
        alertMessage.classList.remove('active');
        el.classList.remove('wrong');
        for (let i = 0; item.length > i; ++i) {
          item[i].classList.remove('disabled');
        }
      });

      el.addEventListener('click', () => {
        if (el.classList.contains('false')) {
          for (let i = 0; item.length > i; ++i) {
            item[i].classList.add('disabled');
          }
          el.classList.remove('disabled');
          el.classList.add('wrong');
          alertMessage.classList.add('active');
        } else if (secondItem.classList.contains('one')) {
          secondItem.classList.remove('one');
          secondItem.classList.add('false');

          img.src = 'images/movements/movements2.jpg';

          firstItem.innerText = '[vision]';
          secondItem.innerText = '[init]';
          thirdItem.innerText = '[move]';

          for (let i = 0; list.length > i; ++i) {}
          list[0].style.display = 'none';

          thirdItem.classList.remove('false');
          thirdItem.classList.add('two');

          step2.style.display = 'block';

          for (let i = 0; inputText.length > i; ++i) {
            inputText[0].classList.add('done');
            inputText[0].innerText = '[run]';
          }
        } else if (thirdItem.classList.contains('two')) {
          thirdItem.classList.remove('two');
          thirdItem.classList.add('false');

          firstItem.innerText = '[vision]';
          secondItem.innerText = '[imgWidth]';
          thirdItem.innerText = '[run]';

          img.src = 'images/movements/movements3.jpg';

          for (let i = 0; list.length > i; ++i) {}
          list[1].style.display = 'none';

          firstItem.classList.remove('false');
          firstItem.classList.add('three');

          step3.style.display = 'block';

          for (let i = 0; inputText.length > i; ++i) {}
          inputText[1].classList.add('done');
          inputText[1].innerText = '[move]';
        } else if (firstItem.classList.contains('three')) {
          firstItem.classList.remove('three');
          firstItem.classList.add('false');

          firstItem.innerText = '[visionOff]';
          secondItem.innerText = '[kick]';
          thirdItem.innerText = '[systemReset]';

          img.src = 'images/movements/movements4.jpg';

          for (let i = 0; list.length > i; ++i) {}
          list[2].style.display = 'none';

          secondItem.classList.remove('false');
          secondItem.classList.add('four');

          step4.style.display = 'block';

          for (let i = 0; inputText.length > i; ++i) {}
          inputText[2].classList.add('done');
          inputText[2].innerText = '[vision]';
        } else if (secondItem.classList.contains('four')) {
          secondItem.classList.remove('four');
          secondItem.classList.add('false');

          img.src = 'images/movements/movements5.jpg';

          step5.style.display = 'block';

          for (let i = 0; list.length > i; ++i) {}
          list[3].style.display = 'none';

          for (let i = 0; inputText.length > i; ++i) {}
          inputText[3].classList.add('done');
          inputText[3].innerText = '[kick]';

          congratulationsMessage.classList.add('active');
        }
      });
    });
  };
  clickOnAnswers();
});