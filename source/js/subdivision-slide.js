 $("#sd_id .sd-link").on('click', function (e) { // По click, вызываем callback функцию с событием
     var fixed_offset = 65;
     $('html,body').stop().animate({
         scrollTop: $(e.target.hash).offset().top - fixed_offset
         // e.target.hash - здесь обращаемся к объекту event,
         // в нем обращаемся к текущему элементу (к ссылке)
         // и у ссылки забираем значение атрибута href
         // далее передаем это значение функцию анимации
         // и функция прокрутит страницу до нужного раздела.
     }, 1000);
     e.preventDefault();
 });