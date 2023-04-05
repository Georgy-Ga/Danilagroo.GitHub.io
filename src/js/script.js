$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="./image/arrow/arrow_left_red.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./image/arrow/arrow_right_red.png"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    dots: true,
                    arrows: false,
                    display:'flex',
                    justifyContent:'space-between',
                }
            }
        ]
    });
    // в верху скрипт с каруселью, чуть ниже скрипт по поводу табов, он работает через библиотеку jquery первое что мы там пишем это коробка в которой табы второе мы пишем класс активности который будет у активного елемента после "This" мы говорим что мы добавляем класс к елементу который находится в фокусе после этого мы пишем что мы удаляем класс активности у всех елементов рядом стоящих с тем елементом у которого класс активности уже применён, то-есть мы просто делаем так что бы при нажатии на какой-то определенный елемент не засветились все табы, мы повторюсь мы удаляем класс активности у рядом стоящих елементов с тем елементом у которого этот класс уже применён с помощю фокуса, типо тыкнул он зафокусился и он уже активен а остальные уже оп всё не активны потому что мы прописали такую тему ".removeClass('catalog__tab_active')". И ещё момент там где знак $ и('') где нужно написать например класс то мы должны ставить точку в начале названия класса по скольку скрипт ещё не знает что мы обращаемся к классу а точкой мы уточняем этот момент и он начинает понимать. Но там где мы удаляем класс или добавляем то есть в таких методах ".addClass("класс"),.removeClass("класс") мы точку ставить не должны по скольку в начале мы уже сказали скрипту к каким классам обращаемся.  .eq($(this).index()) это команда номера таба например если мы нажали на 2 таб из 3 то значит что мы нажали на второй елемент и благодаря данной команде мы можем получить номер таба на который мы только что нажали и соответственно если у нас номер таба 2 то и контент мы должны открыть под номером 2 при помощи данной команды мы получаем в нашем случае номер 2. Следующая команда которая работает в сочитании с прошлой это .addClass('active') с помощью прошлой команды мы узнали номер активного таба а с помощью этой команды мы добавляем сам елемент "по методологии БЭМ МОДИФИКАТОР" активности к второму табу . Сам скрипт является уневерсальным его использование не ограничивается 6 и меньше табами, скрипт является более обширным то-есть с ним могут работать больше 6 табов.
        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    //Этот скрипт по переключению слайдов не является эталонным он не оптимизированный. По факту мы пишем один и тот же скрипт 2 раза просто заменяя 1 класс а весь скрипт остаётся не измененным. второй вариант боллее правельный по скольку мы как разработчики должны боротся за вместительность и SEO оптимизацию сайта.
    // $('.catalog-item__link').each(function(i){
    //     $(this).on('click', function(e){
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // });

    // $('.catalog-item__back').each(function(i){
    //     $(this).on('click', function(e){
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // });
    function toggleSlide (item){
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    $('#consultation-form').validate();
    $('#consultation form').validate();
    $('#order form').validate();
})
