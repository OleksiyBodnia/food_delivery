document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.header-btn');
    const closeButton = document.querySelector('.close-btn');
    const mobMenu = document.querySelector('.mob-menu');

    // Показати мобільне меню при натисканні на кнопку меню
    menuButton.addEventListener('click', function () {
        mobMenu.style.display = 'block';
    });

    // Приховати мобільне меню при натисканні на кнопку close-btn
    closeButton.addEventListener('click', function () {
        mobMenu.style.display = 'none';
    });
});


const inputs1 = document.querySelectorAll('input');

    inputs1.forEach(input => {
      input.addEventListener('input', function() {
        this.style.color = 'var(--Black, #2C2C2C)';
        this.style.fontFamily = 'Roboto';
        this.style.fontSize = '16px';
        this.style.fontWeight = '400';
        this.style.lineHeight = '1.25';
      });
    });
const phoneInput = document.getElementById('phone');

    phoneInput.addEventListener('input', function(event) {
      let input = event.target;
      let value = input.value.replace(/\D/g, ''); // Видаляємо усі нецифрові символи

      if (value.length > 0) {
        value = '+' + value; // Додаємо плюс до початку номера
        if (value.length > 3) {
          value = value.substring(0, 3) + '(' + value.substring(3); // Додаємо відкриваючу дужку після першого символа
        }
        if (value.length > 7) {
          value = value.substring(0, 7) + ') ' + value.substring(7); // Додаємо пробіл після четвертого символа
        }
        if (value.length > 12) {
          value = value.substring(0, 12) + ' ' + value.substring(12); // Додаємо пробіл після сьомого символа
        }
        input.value = value;
      }
    });

    document.addEventListener("DOMContentLoaded", function () {
    const openFormBtn = document.getElementById('openForm');
    const openFormBtn2 = document.getElementById('openForm2');
    const openFormBtn3 = document.getElementById('openForm3');    
    const overlay = document.getElementById('overlay');
    const orderFormDiv = document.getElementById('orderFormDiv');
    const closeFormBtn = document.querySelector('.close-btn-form');

    openFormBtn.addEventListener('click', function () {
        overlay.style.display = 'block';
        orderFormDiv.style.display = 'block';
    });
        
    openFormBtn2.addEventListener('click', function () {
        overlay.style.display = 'block';
        orderFormDiv.style.display = 'block';
    });
    openFormBtn3.addEventListener('click', function () {
        overlay.style.display = 'block';
        orderFormDiv.style.display = 'block';
    });

    closeFormBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
        orderFormDiv.style.display = 'none';
    });
});

let currentPosition = 1;
    const photos = document.querySelector('.photos');
    const leftButton = document.querySelector('.left'); // Вибираємо кнопку "вліво"
    const rightButton = document.querySelector('.right'); // Вибираємо кнопку "вправо"

    function moveToPosition(position) {
      photos.style.transform = `translateX(-${currentPosition * 100}%)`;
      currentPosition = position;
      hideButtonIfNeeded();
    }
    function moveRight() {
      if (currentPosition < 2) {
        currentPosition++;
        photos.style.transform = `translateX(-${currentPosition * 100}%)`;
        hideButtonIfNeeded();
      }
    }

    function moveLeft() {
      if (currentPosition > 0) {
        currentPosition--;
        photos.style.transform = `translateX(-${currentPosition * 100}%)`;
        hideButtonIfNeeded();
      }
    }

    function hideButtonIfNeeded() {
      if (currentPosition === 0) {
        leftButton.style.display = 'none';
      } else if (currentPosition === 2) {
        rightButton.style.display = 'none';
      } else {
        leftButton.style.display = 'block';
        rightButton.style.display = 'block';
      }
    }

    document.addEventListener('DOMContentLoaded', function() {
      moveToPosition(1); // Показати другу фотографію
    });