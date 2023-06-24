document.addEventListener('DOMContentLoaded', () => {
  let slider = document.querySelector('.slider'),
    slider1 = document.getElementById('myRange'),
    slider2 = document.querySelector('.slider2'),
    slider3 = document.querySelector('.slider3'),
    current = document.querySelector('.subtitle-span span'),
    sliderWrapper = document.querySelector('.range-slider'),
    img = document.querySelector('.second-img'),
    imgDiagramm = document.querySelector('.grid-slider__img'),
    congratulationsMessage = document.querySelector('.congratulations'),
    alertMessage = document.querySelector('.alert'),
    alertExit = document.querySelector('.alert__exit'),
    btn = document.querySelector('.settings__btn'),
    btn2 = document.querySelector('.grid-slider-btn'),
    hide = document.querySelectorAll('.hide');
  let values = ['-45', '-25', '-15', '-5', '0', '5', '15', '25', '45'];

  slider1.oninput = function () {
    if (this.value == 1) {
      current.innerText = values[0];
      img.classList.add('one');
      img.classList.remove('two');
    } else if (this.value == 2) {
      current.innerText = values[1];
      img.classList.remove('one');
      img.classList.add('two');
      img.classList.remove('three');
    } else if (this.value == 3) {
      current.innerText = values[2];
      img.classList.remove('two');
      img.classList.add('three');
      img.classList.remove('four');
    } else if (this.value == 4) {
      current.innerText = values[3];
      img.classList.remove('three');
      img.classList.remove('five');
      img.classList.add('four');
    } else if (this.value == 5) {
      current.innerText = values[4];
      img.classList.remove('four');
      img.classList.add('five');
      img.classList.remove('six');
    } else if (this.value == 6) {
      current.innerText = values[5];
      img.classList.remove('five');
      img.classList.add('six');
      img.classList.remove('seven');
    } else if (this.value == 7) {
      current.innerText = values[6];
      img.classList.remove('six');
      img.classList.add('seven');
      img.classList.remove('eight');
    } else if (this.value == 8) {
      current.innerText = values[7];
      img.classList.remove('seven');
      img.classList.remove('nine');
      img.classList.add('eight');
    } else if (this.value == 9) {
      current.innerText = values[8];
      img.classList.remove('eight');
      img.classList.add('nine');
    }
  };

  const clickOnBtn = () => {
    btn.addEventListener('click', () => {
      if (slider1.value == 8) {
        document.querySelector('.settings__text').style.display = 'none';
        sliderWrapper.style.display = 'none';
        document.querySelector('.ball').style.display = 'block';

        btn.style.display = 'none';
        for (let i = 0; hide.length > i; ++i) {
          hide[i].classList.remove('hide');
        }
        img.classList.remove('eight');
        img.classList.add('one');
        document.querySelector('.settings__img img').src =
          'images/settings/settings2.jpg';
      } else {
        alertMessage.classList.add('active');
        sliderWrapper.style.pointerEvents = 'none';
        sliderWrapper.style.opacity = '0.5';
      }
    });
  };
  clickOnBtn();
  const clickAlertExit = () => {
    alertExit.addEventListener('click', () => {
      alertMessage.classList.remove('active');
      sliderWrapper.style.pointerEvents = 'all';
      sliderWrapper.style.opacity = '1';
    });
  };
  clickAlertExit();

  const clickOnBtn2 = () => {
    btn2.addEventListener('click', () => {
      if (slider2.value < 5 && slider3.value < 6) {
        document.querySelector('.grid-slider__img img').src =
          'images/settings/diagramm2.jpg';
        alertMessage.classList.add('active');
      } else if (slider2.value >= 5 && slider2.value < 6 && slider3.value < 6) {
        document.querySelector('.grid-slider__img img').src =
          'images/settings/diagramm3.jpg';
        alertMessage.classList.add('active');
      } else if (slider2.value >= 6 && slider3.value < 6) {
        document.querySelector('.grid-slider__img img').src =
          'images/settings/diagramm4.jpg';
        alertMessage.classList.add('active');
      } else if (slider2.value < 5 && slider3.value >= 6) {
        document.querySelector('.grid-slider__img img').src =
          'images/settings/diagramm5.jpg';
        alertMessage.classList.add('active');
      } else if (
        slider2.value >= 5 &&
        slider2.value < 6 &&
        slider3.value >= 6
      ) {
        document.querySelector('.grid-slider__img img').src =
          'images/settings/diagramm6.jpg';

        //animation
        congratulationsMessage.classList.add('active');
        img.classList.remove('one');
        img.classList.add('eight');
        document.querySelector('.ball').classList.add('active');
      } else if (slider2.value >= 6 && slider3.value >= 6) {
        document.querySelector('.grid-slider__img img').src =
          'images/settings/diagramm7.jpg';
        alertMessage.classList.add('active');
      }
    });
  };
  clickOnBtn2();
});