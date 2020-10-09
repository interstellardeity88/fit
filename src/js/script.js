
//slider

    $(document).ready(function(){
        $('.carousel__slider').slick( 
            {
                
            speed: 900,
            // adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
            
            responsive: [
                {
                    breakpoint: 880,
                    settings: {
                    
                    dots: false, 
                    arrows: false
                    }
                }
            ]
                

            }
        );

//tabs

    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    }); 
    
     

    function toggleSlide(item){
      $(item).each(function(i){
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          });
        });  
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    });

//modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

//forms    


    function validateForm(form){
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста, введите имя",
                phone: "Пожалуйста, введите телефон",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Ваш адрес должен быть в формате name@domain.com"
                }
              }
        });
    }

    validateForm('#consultation-form');
    validateForm('#consultation form');
    validateForm('#order form');