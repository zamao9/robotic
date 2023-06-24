document.addEventListener('DOMContentLoaded', () => {
  /* Assembly
    ========================================================================== */
  const myArr = [
    {
      subtitle: 'Какое вычислительное устройство выполняет функцию «мозга»?',
    },
    {
      subtitle: 'Без чего робот не сможет «видеть»?',
    },
    {
      subtitle: 'Чем робот будет бить по мячу?',
    },
    {
      subtitle:
        'Какие детали не участвуют в футболе, но всё равно усыпаны датчиками и моторами?',
    },
    {
      subtitle: 'Что приводит механизмы робота в движение?',
    },
    {
      subtitle:
        'Без чего не передать сигнал между деталями и сервоприводами робота?',
    },
    {
      subtitle: 'Что является источником питания робота?',
    },
    {
      subtitle: 'Детали закончились!',
    },
  ];

  let items = document.querySelectorAll('.construct-content__item'),
    camera = document.querySelector('.camera'),
    battery = document.querySelector('.battery'),
    controller = document.querySelector('.controller'),
    servos = document.querySelector('.servos'),
    wiring = document.querySelector('.wiring'),
    legs = document.querySelector('.legs'),
    frame = document.querySelector('.frame'),
    hands = document.querySelector('.hands'),
    img = document.querySelectorAll('.construct__img img'),
    alertMessage = document.querySelector('.alert'),
    exitMessage = document.querySelector('.alert__exit'),
    congratulationsMessage = document.querySelector('.congratulations'),
    subtitle = document.querySelector('.construct__subtitle');

  const closeAlertMessage = () => {
    exitMessage.addEventListener('click', () => {
      alertMessage.classList.remove('active');
      for (let i = 0; items.length > i; ++i) {
        items[i].classList.remove('used');
      }
    });
  };
  closeAlertMessage();

  const clickOnItems = () => {
    items.forEach((el) => {
      el.addEventListener('click', () => {
        //Filter
        let currentCategory = el.dataset.ind;
        if (el.classList.contains('true')) {
          filter(currentCategory, img);
        }

        //Items
        if (el.classList.contains('false')) {
          alertMessage.classList.add('active');
          for (let i = 0; items.length > i; ++i) {
            items[i].classList.add('used');
          }
        } else if (frame.classList.contains('true')) {
          frame.classList.add('done');
          frame.classList.remove('true');

          controller.classList.remove('false');
          controller.classList.add('true');

          subtitle.innerText = myArr[0].subtitle;
        } else if (controller.classList.contains('true')) {
          controller.classList.remove('true');
          controller.classList.add('done');

          camera.classList.remove('false');
          camera.classList.add('true');
          subtitle.innerText = myArr[1].subtitle;
        } else if (camera.classList.contains('true')) {
          camera.classList.remove('true');
          camera.classList.add('done');

          legs.classList.remove('false');
          legs.classList.add('true');
          subtitle.innerText = myArr[2].subtitle;
        } else if (legs.classList.contains('true')) {
          legs.classList.remove('true');
          legs.classList.add('done');

          hands.classList.remove('false');
          hands.classList.add('true');
          subtitle.innerText = myArr[3].subtitle;
        } else if (hands.classList.contains('true')) {
          hands.classList.remove('true');
          hands.classList.add('done');

          servos.classList.remove('false');
          servos.classList.add('true');
          subtitle.innerText = myArr[4].subtitle;
        } else if (servos.classList.contains('true')) {
          servos.classList.remove('true');
          servos.classList.add('done');

          wiring.classList.remove('false');
          wiring.classList.add('true');
          subtitle.innerText = myArr[5].subtitle;
        } else if (wiring.classList.contains('true')) {
          wiring.classList.remove('true');
          wiring.classList.add('done');

          battery.classList.remove('false');
          battery.classList.add('true');
          subtitle.innerText = myArr[6].subtitle;
        } else if (battery.classList.contains('true')) {
          battery.classList.remove('true');
          battery.classList.add('done');

          congratulationsMessage.classList.add('active');
          subtitle.innerText = myArr[7].subtitle;
        }
      });
    });
  };
  clickOnItems();

  /* Filter
    ========================================================================== */
  const filter = (category, items) => {
    items.forEach((el) => {
      let itemFilterred = el.classList.contains(category);

      if (itemFilterred) {
        el.classList.remove('hide');
      } else {
        el.classList.add('hide');
      }
    });
  };
});