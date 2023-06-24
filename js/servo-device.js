document.addEventListener('DOMContentLoaded', () => {
  /* Servo Device
    ========================================================================== */
  let alertMessage = document.querySelector('.alert'),
    congratulationsMessage = document.querySelector('.congratulations'),
    exitMessage = document.querySelector('.alert__exit'),
    btns = document.querySelectorAll('.btn'),
    btnFirst = document.querySelector('.first'),
    btnSecond = document.querySelector('.second'),
    btnSubtitleFirst = document.querySelector('.btn__subtitle-first'),
    btnSubtitleSecond = document.querySelector('.btn__subtitle-second'),
    btnImgFirst = document.querySelector('.btn__img-first'),
    btnImgSecond = document.querySelector('.btn__img-second'),
    schemeSubtitle = document.querySelector('.servo-device__subtitle'),
    schemeImg = document.querySelector('.servo-device__img img');

  const closeAlert = () => {
    exitMessage.addEventListener('click', () => {
      alertMessage.classList.remove('active');
      for (let i = 0; btns.length > i; ++i) {
        btns[i].classList.remove('disabled');
      }
    });
  };
  closeAlert();

  const myArr = [
    {
      schemeSubtitle: 'Силовой элемент, который приводит всё в движение',
      btnSubtitle: 'Шестерни редуктора',
      btnImg: 'url("./images/servo-device/gears.png")',
      schemeImg: 'images/servo-device/scheme2.jpg',
    },
    {
      schemeSubtitle:
        'Датчик обратной связи, определяющий положение и скорость вала',
      btnSubtitle: 'Потенциометр',
      btnImg: 'url("./images/servo-device/potentiometer.png")',
      schemeImg: 'images/servo-device/scheme3.jpg',
    },
    {
      schemeSubtitle:
        'Набор зубчатых колёс, нужных для уменьшения скорости и увеличения крутящего момента на валу',
      btnSubtitle: 'Выходной вал',
      btnImg: 'url("./images/servo-device/outputshaft.png")',
      schemeImg: 'images/servo-device/scheme4.jpg',
    },
    {
      schemeSubtitle:
        'Вращающийся элемент, к которому присоединяется внешняя деталь или устройство',
      schemeImg: 'images/servo-device/scheme5.jpg',
    },
    {
      schemeImg: 'images/servo-device/scheme6.jpg',
    },
  ];

  const clickOnBtn = () => {
    btnFirst.addEventListener('click', () => {
      if (btnFirst.classList.contains('first')) {
        btnSecond.classList.remove('second');
        btnSecond.classList.add('fourth');

        btnFirst.classList.remove('first');
        btnFirst.classList.add('third');

        schemeSubtitle.innerText = myArr[0].schemeSubtitle;
        btnSubtitleFirst.innerText = myArr[0].btnSubtitle;
        btnImgFirst.style.backgroundImage = myArr[0].btnImg;
        schemeImg.src = myArr[0].schemeImg;
      } else if (btnFirst.classList.contains('third')) {
        alertMessage.classList.add('active');
        for (let i = 0; btns.length > i; ++i) {
          btns[i].classList.add('disabled');
        }
      } else if (btnFirst.classList.contains('sixth')) {
        btnSecond.classList.remove('seventh');
        btnSecond.classList.add('eighth');

        schemeSubtitle.innerText = myArr[3].schemeSubtitle;
        schemeImg.src = myArr[3].schemeImg;
        btnFirst.classList.add('disabled');
      }
    });

    btnSecond.addEventListener('click', () => {
      if (btnSecond.classList.contains('second')) {
        alertMessage.classList.add('active');
        for (let i = 0; btns.length > i; ++i) {
          btns[i].classList.add('disabled');
        }
      } else if (btnSecond.classList.contains('fourth')) {
        btnSecond.classList.remove('fourth');
        btnSecond.classList.add('fifth');
        schemeSubtitle.innerText = myArr[1].schemeSubtitle;
        btnSubtitleSecond.innerText = myArr[1].btnSubtitle;
        btnImgSecond.style.backgroundImage = myArr[1].btnImg;
        schemeImg.src = myArr[1].schemeImg;
      } else if (btnSecond.classList.contains('fifth')) {
        btnFirst.classList.remove('third');
        btnFirst.classList.add('sixth');

        btnSecond.classList.remove('fifth');
        btnSecond.classList.add('seventh');

        schemeSubtitle.innerText = myArr[2].schemeSubtitle;
        btnSubtitleSecond.innerText = myArr[2].btnSubtitle;
        btnImgSecond.style.backgroundImage = myArr[2].btnImg;
        schemeImg.src = myArr[2].schemeImg;
      } else if (btnSecond.classList.contains('seventh')) {
        alertMessage.classList.add('active');
        for (let i = 0; btns.length > i; ++i) {
          btns[i].classList.add('disabled');
        }
      } else if (btnSecond.classList.contains('eighth')) {
        schemeImg.src = myArr[4].schemeImg;
        congratulationsMessage.classList.add('active');
        btnSecond.classList.add('disabled');
      }
    });
  };
  clickOnBtn();
});