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