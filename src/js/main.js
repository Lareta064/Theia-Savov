document.addEventListener("DOMContentLoaded", function () {
    let bodyEl = document.body;
    

    // header search form
    const searchFormOpen = document.querySelector('#searchForm-open');
    if(searchFormOpen){
      console.log(searchFormOpen);
        const headerSearchForm = document.querySelector('#header-search-form');
        searchFormOpen.addEventListener('click', ()=>{
            if(headerSearchForm.classList.contains('active')){
                headerSearchForm.classList.remove('active');
                bodyEl.classList.remove('lock');
            }
            else{
                headerSearchForm.classList.add('active');
                bodyEl.classList.add('lock');
            }
        });
        headerSearchForm.addEventListener('click', (e) => {
            if (e.target == e.currentTarget) {
                headerSearchForm.classList.remove('active');
                bodyEl.classList.remove('lock');
            }
        });
    }

    /*Sliders in tabs */
    const tabBlockSwiper = document.querySelectorAll(".tabs-block.myswiper-container");

    tabBlockSwiper.forEach((block) => {
        const tabsNav = block.querySelectorAll(".tabs-nav__item");
        const tabsBody = block.querySelectorAll(".tabs-body");
        const swiperInstances = {};

        tabsBody.forEach((tabBody) => {
            const swiperContainer = tabBody.querySelector(".tabs-swiper");
            if (swiperContainer) {
                const isSpecialSlider = swiperContainer.classList.contains("special-slider");

                const swiper = new Swiper(swiperContainer, {
                    slidesPerView: isSpecialSlider ? 4 : 4, // По умолчанию 4 слайда, но мобилка меняет настройки
                    speed: 1000,
                    spaceBetween: 40,
                    navigation: {
                        nextEl: block.querySelector(".tabs-swiper-next"),
                        prevEl: block.querySelector(".tabs-swiper-prev"),
                    },
                    pagination: {
                        el: tabBody.querySelector(".tabs-swiper-pagination"),
                        clickable: true,
                    },
                    breakpoints: {
                        320: {
                            spaceBetween: 10,
                            slidesPerView: isSpecialSlider ? 1 : 2, // ❗ Специальные слайдеры показывают 1 слайд
                        },
                        768: {
                            spaceBetween: 20,
                            slidesPerView: isSpecialSlider ? 2 : 3,
                        },
                        1024: {
                            spaceBetween: 20,
                            slidesPerView: isSpecialSlider ? 2 : 3,
                        },
                        1200: {
                            spaceBetween: 40,
                            slidesPerView: 4,
                        },
                        1650: {
                            spaceBetween: 40,
                            slidesPerView: 4,
                        },
                    },
                });

                swiperInstances[tabBody.id] = swiper;
            }
        });

        tabsNav.forEach((tab) => {
            tab.addEventListener("click", (e) => {
                e.preventDefault();
                const targetTabId = tab.dataset.tab;

                tabsNav.forEach((item) => item.classList.remove("active"));
                tabsBody.forEach((body) => body.classList.remove("active"));

                tab.classList.add("active");
                const targetBody = block.querySelector(`#${targetTabId}`);
                if (targetBody) {
                    targetBody.classList.add("active");
                    swiperInstances[targetTabId]?.update();
                }
            });
        });

        //  Обновляем `slidesPerView` при изменении экрана
        window.addEventListener("resize", () => {
            Object.values(swiperInstances).forEach((swiper) => {
                swiper.update();
            });
        });

    });

     /*article swiper */
     const mySwiper = new Swiper('.mySwiper', {
      slidesPerView: 4,
      speed:1000,
      spaceBetween:20,
      pagination: {
        el:".mySwiper-pagination",
        clickable: true,
      },
      breakpoints:{
        320:{
          slidesPerView: 2,
          spaceBetween:15,
        },
        768:{
          slidesPerView: 3,
          spaceBetween:16,
        },
        1199:{
          slidesPerView: 4,
          spaceBetween:20,
        },
      }
    });
   
    const reccomendProducts = new Swiper('.reccomend-products', {
      slidesPerView: 4,
      speed:1000,
      spaceBetween:20,
      pagination: {
        el:".mySwiper-pagination",
        clickable: true,
      },
      breakpoints:{
        320:{
          slidesPerView: 2,
          spaceBetween:15,
        },
        768:{
          slidesPerView: 3,
          spaceBetween:20,
        },
        1699:{
          slidesPerView: 4,
          spaceBetween:20,
        }
      }

    });
    /*service-cards main page */
    const serviceCards = new Swiper('.service-cards', {
      slidesPerView: 'auto',
      speed:1000,
      spaceBetween:30,
      pagination: {
        el:".service-cards-pagination",
        clickable: true,
      }
     
    });

    /**.brands-swiper */
    const brandsCards = new Swiper('.brands-swiper', {
      slidesPerView: '5',
      speed:10000,
      spaceBetween:30,
      loop: true,
      grabCursor: true,
      autoplay:{
        delay: 0,
        disableOnInteraction: false
      },
      allowTouchMove: false,
    });
    /*.review-swiper*/
    const reviewSwiper = new Swiper('.review-swiper', {
      slidesPerView: 3,
      speed:1000,
      spaceBetween:20,
      pagination: {
        el:".mySwiper-pagination",
        clickable: true,
      }

    });
    /*.review-swiper*/
    const reviewSwiperLarge = new Swiper('.review .review-swiper', {
      slidesPerView: 2,
      speed:1000,
      spaceBetween:10,
      pagination: {
        el:".mySwiper-pagination",
        clickable: true,
      },
    breakpoints:{
      320:{
        slidesPerView: 1,
        spaceBetween:10,
      },
        768:{
          slidesPerView: 3,
          spaceBetween:20,
        },
        1440:{
          slidesPerView: 4,
          spaceBetween:20,
        }
      }
    });
     /*discont-slider*/
     const discontSwiper = new Swiper('.discont-slider', {
      slidesPerView: 2,
      speed:1000,
      spaceBetween:20,
      pagination: {
        el:".mySwiper-pagination",
        clickable: true,
      },
      breakpoints:{
        1439:{
          slidesPerView: 'auto',
        }
      }
    });
    /*.portfolio-slider*/
    const portfolioSwiper = new Swiper('.portfolio-slider', {
        slidesPerView: 2,
        speed:1000,
        spaceBetween:20,
        pagination: {
          el:".mySwiper-pagination",
          clickable: true,
        },
        breakpoints:{
          320:{
            slidesPerView: 1,
            spaceBetween:15,
          },
          768:{
            slidesPerView: 2,
            spaceBetween:20,
          }
        }
  
    });
   
    /*=====CUSTOM SELECT===== */
    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
        }
      };
    }

    document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
      const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
      const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
      const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
      const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

      // Клик по кнопке. Открыть/Закрыть select
      dropDownBtn.addEventListener('click', function (e) {
        dropDownList.classList.toggle('dropdown__list--visible');
        this.classList.toggle('dropdown__button--active');
      });
        

      // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
      dropDownListItems.forEach(function (listItem) {
        
        listItem.addEventListener('click', function (e) {
          e.stopPropagation();
          dropDownBtn.innerText = this.innerText;
          dropDownBtn.focus();
          dropDownInput.value = this.dataset.value;
          
          dropDownList.classList.remove('dropdown__list--visible');
          dropDownBtn.classList.remove('dropdown__button--active');
          
        });
      });

      // Клик снаружи дропдауна. Закрыть дропдаун
      document.addEventListener('click', function (e) {
        if (e.target !== dropDownBtn) {
          dropDownBtn.classList.remove('dropdown__button--active');
          dropDownList.classList.remove('dropdown__list--visible');
        }
      });

      // Нажатие на Tab или Escape. Закрыть дропдаун
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
          dropDownBtn.classList.remove('dropdown__button--active');
          dropDownList.classList.remove('dropdown__list--visible');
        }
      });
    });
    // INPUT TYPE="FILE"
    const fileInputs = document.querySelectorAll(".fileUploadInput");

    if (fileInputs) {
      fileInputs.forEach((input) => {
        input.addEventListener("change", (event) => {
          const label = input.closest(".fileUpload-label");
          const labelTxt = label.querySelector(".fileUpload-name");
          const stateIcon = label.querySelector(".form-input-clear");
    
          // Получаем файл и его размер
          const file = input.files[0];
          const fileName = file?.name || "Приложить карточку предприятия ";
    
          if (file) {
            // Если файл соответствует требованиям
            labelTxt.textContent = fileName; // Отображаем имя файла
            stateIcon.classList.add("active"); // Добавляем активный класс
          } else {
            // Если файл удален или не выбран
            clearFile(label, labelTxt, stateIcon, input);
          }
    
          // Обработчик клика на иконке очистки
          stateIcon.addEventListener("click", (e) => {
            e.stopPropagation(); // Останавливаем всплытие
            e.preventDefault(); // Отменяем действие по умолчанию (для <label>)
            clearFile(label, labelTxt, stateIcon, input);
          });
        });
      });
    
      // Функция очистки файла
      function clearFile(label, labelTxt, stateIcon, input) {
        input.value = ""; // Очищаем input
        
        stateIcon.classList.remove("active"); // Удаляем active у иконки
        labelTxt.textContent = "Приложить карточку предприятия "; // Возвращаем текст по умолчанию
      }
    }
    //DATAPICKER
    document.querySelectorAll('.select-date').forEach((dateBlock) => {
      // Находим внутри блока input для начальной и конечной дат
      const startDateInput = dateBlock.querySelector('.start-date');
      const endDateInput = dateBlock.querySelector('.end-date');

      // Инициализируем Flatpickr для начальной даты
      flatpickr(startDateInput, {
        mode: "range", // Режим выбора диапазона
        locale: flatpickr.l10ns.ru, // Русификация
        dateFormat: "d.m.Y", // Формат даты
        minDate: 'today', // Минимальная дата
        onChange: function(selectedDates) {
        if (selectedDates.length === 2) {
          // Устанавливаем выбранные даты в соответствующие инпуты
          startDateInput.value = flatpickr.formatDate(selectedDates[0], "d.m.Y");
          endDateInput.value = flatpickr.formatDate(selectedDates[1], "d.m.Y");
        } else if (selectedDates.length === 1) {
          // Если выбрана только одна дата, очищаем конечную дату
          startDateInput.value = flatpickr.formatDate(selectedDates[0], "d.m.Y");
          endDateInput.value = "";
        }
        }
      });
    });
    // modal с атрибутом [data-modal]
    const modalOpen = document.querySelectorAll('[data-btn]');
    const modalFrames = document.querySelectorAll('[data-modal]');
    if( modalFrames.length > 0){
    //  const modalFramesClose = document.querySelectorAll('[data-close]');

    for(let item of modalOpen){
      item.addEventListener('click', function(e){
        for(let item of  modalFrames){
          item.classList.remove('visible');
          bodyEl.classList.remove('lock');
        }
        e.preventDefault();
        const itemAttr = item.getAttribute('data-btn');

        for(let frame of modalFrames){
          const frameAttr =frame.getAttribute('data-modal');	
          if(frameAttr == itemAttr){
          frame.classList.add('visible');
          bodyEl.classList.add('lock');
          }
        }
      });
    }
    
    /*=============== закрыть модалки по клику вне ===============*/
      for(let frame of modalFrames){
        frame.addEventListener('click', function(e){
          if(e.target === e.currentTarget){
            this.classList.remove(`visible`);
            bodyEl.classList.remove('lock');
          }
        });
      }
    }
});
/*PROMO-SLIDER */
document.addEventListener("DOMContentLoaded", () => {
    let promoCustomSliderInterval = null; // Переменная для интервала кастомного слайдера
    let promoMobileSlider = null; // Переменная для Swiper
  
    //Функция для запуска кастомного слайдера
    const initCustomSlider = () => {
      const slides = document.querySelectorAll(".promo-slide");
      let currentIndex = 0;
  
      promoCustomSliderInterval = setInterval(() => {
        slides.forEach((slide) => {
          const contents = slide.querySelectorAll(".promo-slide-content");
  
          // Получаем текущий активный и следующий контент
          const currentContent = contents[currentIndex];
          const nextIndex = (currentIndex + 1) % contents.length;
          const nextContent = contents[nextIndex];
  
          // Устанавливаем следующий контент поверх текущего
          nextContent.classList.add("active");
  
          // Убираем текущий контент с задержкой
          setTimeout(() => {
            currentContent.classList.remove("active");
            currentContent.classList.add("fading-out");
  
            // После завершения анимации убираем fading-out
            setTimeout(() => {
              currentContent.classList.remove("fading-out");
            }, 600); // Время совпадает с transition: opacity 0.5s
          }, 600);
        });
  
        // Обновляем индекс
        currentIndex = (currentIndex + 1) % 3; // Учитываем 3 варианта содержимого
      }, 10000);
    };
  
    // Функция для инициализации Swiper
    const initSwiper = () => {
      promoMobileSlider = new Swiper(".promo-swiper", {
        speed: 1000,
        spaceBetween: 20,
        loop: true,
        // autoplay:{
        //     delay: 5000,
        // }
      });
    };
  
    // Функция для удаления кастомного слайдера
    const destroyCustomSlider = () => {
      if (promoCustomSliderInterval) {
        clearInterval(promoCustomSliderInterval);
        promoCustomSliderInterval = null;
      }
    };
  
    // Функция для удаления Swiper
    const destroySwiper = () => {
      if (promoMobileSlider) {
        promoMobileSlider.destroy(true, true);
        promoMobileSlider = null;
      }
    };
  
    // Обработчик изменения ширины экрана
    const handleResize = () => {
      if (window.matchMedia("(min-width: 1200px)").matches) {
        // Экран >= 1200px: кастомный слайдер
        destroySwiper();
        initCustomSlider();
      } else {
        // Экран < 1200px: обычный Swiper
        destroyCustomSlider();
        initSwiper();
      }
    };
  
    // Инициализация при загрузке страницы
    handleResize();
  
    // Добавляем слушатель на изменение размеров экрана
    window.addEventListener("resize", handleResize);
});
document.addEventListener("DOMContentLoaded", () => {
    const tabBlocks = document.querySelectorAll(".tabs-block");

    tabBlocks.forEach((block) => {
      const tabsNavItems = block.querySelectorAll(".tabs-nav__item");
      const tabsBodies = block.querySelectorAll(".tabs-body");

      tabsNavItems.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        e.preventDefault();

        // Убираем активный класс со всех табов и контента
        tabsNavItems.forEach((item) => item.classList.remove("active"));
        tabsBodies.forEach((body) => body.classList.remove("active"));

        // Добавляем активный класс на выбранный таб и его контент
        tab.classList.add("active");
        const targetId = tab.dataset.tab;
        const targetBody = block.querySelector(`#${targetId}`);
        if (targetBody) {
        targetBody.classList.add("active");
        }
      });
      });
    });
  });
/****CATEGORY MENU**** */
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("catalogy-menu-open");
  const menuWrapper = document.querySelector(".cm-wrapper");
  const menuContent = document.querySelector(".cm-content");
  const mainItems = document.querySelectorAll("[data-drop]");
  const subLists = document.querySelectorAll("[data-subdrop]");
  const subItems = document.querySelectorAll("[data-sub-subdrop]");
  const subSubLists = document.querySelectorAll("[data-sublist]");
  const closeButtons = document.querySelectorAll(".close-menu-part");
  const cmLevel2 = document.querySelector(".cm-level-2");
  const cmLevel3 = document.querySelector(".cm-level-3");
  const imageItems = document.querySelectorAll(".cm-image-group li");
  const bodyEl = document.body;
  let hoverTimeout;
  if(menuButton){
        // Сброс всех активных классов
        function clearActiveClasses() {
            mainItems.forEach((item) => item.classList.remove("active"));
            subLists.forEach((list) => list.classList.remove("active"));
            subSubLists.forEach((list) => list.classList.remove("active"));
            subItems.forEach((item) => item.classList.remove("active"));
            imageItems.forEach((img) => img.classList.remove("active"));

            cmLevel2?.classList.remove("active");
            cmLevel3?.classList.remove("active");
        }

        // Активировать первый пункт меню
        function activateFirstMenuItem() {
            const firstMainItem = document.querySelector("[data-drop='1']");
            const firstSubList = document.querySelector("[data-subdrop='1']");
            const firstImage = document.querySelector("[data-img='1']");

            clearActiveClasses();

            if (firstMainItem) firstMainItem.classList.add("active");
            if (firstSubList) firstSubList.classList.add("active");
            if (firstImage) firstImage.classList.add("active");
        }

        // Логика для маленьких экранов
        function setupSmallScreenLogic() {
            console.log("Логика для маленьких экранов активна");

            menuButton.addEventListener("click", () => {
                if (menuWrapper.classList.contains("active")) {
                    // Если меню активно, закрываем его
                    menuWrapper.classList.remove("active");
                    bodyEl.classList.remove('lock');
                    clearActiveClasses();
                } else {
                    // Если меню не активно, открываем его
                    clearActiveClasses();
                    menuWrapper.classList.add("active");
                    bodyEl.classList.add('lock');
                }
            });

            mainItems.forEach((item) => {
                item.addEventListener("click", () => {
                    const subdrop = item.getAttribute("data-drop");
                    const relatedSublist = document.querySelector(`[data-subdrop="${subdrop}"]`);

                    clearActiveClasses();

                    item.classList.add("active");
                    cmLevel2?.classList.add("active");
                    if (relatedSublist) {
                        relatedSublist.classList.add("active");
                    }
                });
            });

            subItems.forEach((item) => {
                item.addEventListener("click", () => {
                    const subSubdrop = item.getAttribute("data-sub-subdrop");
                    const relatedSubSublist = document.querySelector(`[data-sublist="${subSubdrop}"]`);

                    cmLevel3?.classList.remove("active");
                    subSubLists.forEach((list) => list.classList.remove("active"));

                    item.classList.add("active");
                    cmLevel3?.classList.add("active");
                    if (relatedSubSublist) {
                        relatedSubSublist.classList.add("active");
                    }
                });
            });

            closeButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    const closestActive = button.closest(".cm-level.active");

                    closestActive?.classList.remove("active");
                    const childActive = closestActive?.querySelector(".active");
                    childActive?.classList.remove("active");
                });
            });

            document.addEventListener("click", (e) => {
                if (!menuWrapper.contains(e.target) && e.target !== menuButton) {
                    menuWrapper.classList.remove("active");
                    clearActiveClasses();
                }
            });
            menuWrapper.addEventListener("click", (e) => {
              
              if(e.target == e.currentTarget){
                menuWrapper.classList.remove("active");
                clearActiveClasses();
              }       
            });
        }

        function setupLargeScreenLogic() {
          console.log("Логика для больших экранов активна");

          let hoverTimeout;

          // Открываем меню при наведении на menuButton
          menuButton.addEventListener("mouseenter", () => {
              menuWrapper.classList.add("active");
              bodyEl.classList.add('lock');
              activateFirstMenuItem();
          });

          // Закрываем меню при уходе курсора с menuWrapper
          menuWrapper.addEventListener("mouseleave", () => {
              hoverTimeout = setTimeout(() => {
                  menuWrapper.classList.remove("active");
                  bodyEl.classList.remove('lock');
                  clearActiveClasses();
              }, 300);
          });

          // Закрываем меню, если кликнули за его пределами
          menuWrapper.addEventListener("click", (e) => {
              if (e.target == e.currentTarget) {
                  menuWrapper.classList.remove("active");
                  bodyEl.classList.remove('lock');
                  clearTimeout(hoverTimeout);
              }
          });

          // Убираем задержку закрытия, если вернулись в меню
          menuWrapper.addEventListener("mouseenter", () => {
              clearTimeout(hoverTimeout);
          });

        
          menuButton.addEventListener("mouseleave", (event) => {
              let toElement = event.relatedTarget || event.toElement; // Элемент, на который ушёл курсор
              if (!menuWrapper.contains(toElement)) {
                  hoverTimeout = setTimeout(() => {
                      menuWrapper.classList.remove("active");
                      bodyEl.classList.remove('lock');
                      clearActiveClasses();
                  }, 300);
              }
          });

          // Наведение на пункт первого уровня
          mainItems.forEach((item) => {
              item.addEventListener("mouseenter", () => {
                  const subdrop = item.getAttribute("data-drop");
                  const relatedSublist = document.querySelector(`[data-subdrop="${subdrop}"]`);
                  const relatedImage = document.querySelector(`[data-img="${subdrop}"]`);

                  clearActiveClasses();

                  item.classList.add("active");
                  if (relatedSublist) relatedSublist.classList.add("active");
                  if (relatedImage) relatedImage.classList.add("active");
              });
          });

          // Наведение на пункт второго уровня
          subItems.forEach((item) => {
              item.addEventListener("mouseenter", () => {
                  const subSubdrop = item.getAttribute("data-sub-subdrop");
                  const relatedSubSublist = document.querySelector(`[data-sublist="${subSubdrop}"]`);

                  subItems.forEach((subItem) => subItem.classList.remove("active"));
                  subSubLists.forEach((list) => list.classList.remove("active"));

                  item.classList.add("active");
                  if (relatedSubSublist) relatedSubSublist.classList.add("active");
              });
          });
      }

        // Переключение логики
        function handleResize() {
            const isLargeScreen = window.innerWidth >= 1200;

            menuWrapper.classList.remove("active");
            clearActiveClasses();

            if (isLargeScreen) {
                setupLargeScreenLogic();
            } else {
                setupSmallScreenLogic();
            }
        }

        window.addEventListener("resize", handleResize);
        handleResize();
}
});
//стики шапка + счетчик
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header"); // 
  if(header){
    let lastScrollTop = 0; // Переменная для хранения предыдущей позиции скролла

    window.addEventListener("scroll", () => {
        const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

        // Если пользователь прокручивает вверх
        if (currentScrollTop < lastScrollTop) {
            header.classList.add("fix-header"); // Добавляем класс
        } else {
            header.classList.remove("fix-header"); // Удаляем класс
        }

        // Обновляем предыдущую позицию скролла
        lastScrollTop = currentScrollTop;
    });
  }
  // СЧЕТЧИК
  const counters = document.querySelectorAll('.counter');

  // Перебираем каждый блок счетчика
  counters.forEach((counter) => {
    const minusButton = counter.querySelector('.counter-minus'); // Кнопка уменьшения
    const plusButton = counter.querySelector('.counter-plus'); // Кнопка увеличения
    const counterValue = counter.querySelector('.counter-value'); // Текущее значение (span)

    // Инициализируем значение (из текста span)
    let currentValue = parseInt(counterValue.textContent, 10) || 0;

    // Обновляем состояние кнопки уменьшения
    const updateMinusButtonState = () => {
      if (currentValue <= 0) {
        minusButton.setAttribute('disabled', 'disabled');
      } else {
        minusButton.removeAttribute('disabled');
      }
    };

    // Устанавливаем начальное состояние кнопки
    updateMinusButtonState();

    // Обработчик клика на кнопку уменьшения
    minusButton.addEventListener('click', () => {
      if (currentValue > 0) {
        currentValue -= 1; // Уменьшаем значение
        counterValue.textContent = currentValue; // Обновляем текст в span
        updateMinusButtonState(); // Обновляем состояние кнопки
      }
    });

    // Обработчик клика на кнопку увеличения
    plusButton.addEventListener('click', () => {
      currentValue += 1; // Увеличиваем значение
      counterValue.textContent = currentValue; // Обновляем текст в span
      updateMinusButtonState(); // Обновляем состояние кнопки
    });
  });
  //ACORDION
  $(function() {
	
    //BEGIN
    $(".accordion__title").on("click", function(e) {
  
      e.preventDefault();
      var $this = $(this);
  
      if (!$this.hasClass("accordion-active")) {
        $(".accordion__content").slideUp(400);
        $(".accordion__title").removeClass("accordion-active");
        $('.accordion__arrow').removeClass('accordion__rotate');
      }
  
      $this.toggleClass("accordion-active");
      $this.next().slideToggle();
      $('.accordion__arrow',this).toggleClass('accordion__rotate');
    });
    //END
    
  });
   
    /*FLIP CARD */
    const flipCards = document.querySelectorAll('.flip-card');
      if(flipCards.length>0){
        flipCards.forEach((card)=>{
          const cardFlipBtn = card.querySelector('.flip-card-btn');
          const cardFlipClose = card.querySelector('.close-btn');
          cardFlipBtn.addEventListener('click', ()=>{
            card.classList.add('flip-active');
          });
          if(cardFlipClose){
            cardFlipClose.addEventListener('click', ()=>{
              card.classList.remove('flip-active');
            });
          }
        });
        
      }
    //BASKET CARDS
      const basketCards = document.querySelectorAll('.basket-card');
      if(basketCards.length > 0){
      
        basketCards.forEach((card)=>{
          const basketCardStatus = card.querySelector('.label-hide-chebx');
          basketCardStatus.addEventListener('click', ()=>{
          const statusImput = basketCardStatus.querySelector('input');
          if(statusImput.checked){
            card.classList.add('basket-card--disable');
          }else{
            card.classList.remove('basket-card--disable');
          }
          })
        })
      }
    
      //FOTORAMA
      let mySwiperThumb = new Swiper(".mySwiperThumb", {
        spaceBetween: 20,
        slidesPerView: "auto",
        direction: "vertical", // По умолчанию вертикальный
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".mySwiperThumb-next",
          prevEl: ".mySwiperThumb-prev",
        },
        breakpoints: {
          768: {
            direction: "vertical", // Вертикальный режим для больших экранов
          },
          0: {
            direction: "horizontal", // Горизонтальный режим для экранов меньше 768px
            spaceBetween: 10,
          },
        },
      });
      
      var mySwiperFotorama = new Swiper(".mySwiperFotorama", {
        spaceBetween: 10,
        speed: 800,
        thumbs: {
          swiper: mySwiperThumb,
        },
      });

      // Fancybox
      Fancybox.bind("[data-fancybox]", {
       
      });
});
document.addEventListener("DOMContentLoaded", function () {
  let bodyEl = document.body;
  const menuButton = document.querySelector(".menu-button");
  const mobileMenuWrapper = document.querySelector(".mobile-menu-wrapper");

  if (menuButton && mobileMenuWrapper) {
      menuButton.addEventListener("click", () => {
          const isActive = menuButton.classList.contains("active");

          if (isActive) {
              // Закрываем меню и все вложенные уровни
              menuButton.classList.remove("active");
              mobileMenuWrapper.classList.remove("active");
              bodyEl.classList.remove("lock");

              document.querySelectorAll(".mobile-cat-menu.active").forEach((menu) => {
                  menu.classList.remove("active");
              });

          } else {
              // Открываем главное меню
              menuButton.classList.add("active");
              mobileMenuWrapper.classList.add("active");
              bodyEl.classList.add("lock");
          }
      });
  }

  // 1. Открытие level-2 при клике на .mobile-nav-hasDrop
  document.querySelectorAll(".mobile-nav-hasDrop").forEach((item) => {
      item.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(".mobile-cat-menu.level-2")?.classList.add("active");
      });
  });

  // 2. Открытие level-3 при выборе пункта в level-2
  document.querySelectorAll(".mobile-cat-menu.level-2 .mobile-nav-item").forEach((item) => {
      item.addEventListener("click", function (e) {
          e.preventDefault();
          let dataType = this.getAttribute("data-type");
          
          // Закрываем все .level-3 перед открытием нужного
          document.querySelectorAll(".mobile-cat-menu.level-3").forEach((menu) => {
              menu.classList.remove("active");
          });

          // Открываем соответствующий level-3
          let level3 = document.querySelector(`.mobile-cat-menu.level-3[data-type="${dataType}"]`);
          if (level3) level3.classList.add("active");
      });
  });

  // 3. Открытие level-4 при выборе пункта в level-3
  document.querySelectorAll(".mobile-cat-menu.level-3 .mobile-nav-item").forEach((item) => {
      item.addEventListener("click", function (e) {
          e.preventDefault();
          let dataType = this.getAttribute("data-type");
          
          // Закрываем все .level-4 перед открытием нужного
          document.querySelectorAll(".mobile-cat-menu.level-4").forEach((menu) => {
              menu.classList.remove("active");
          });

          // Открываем соответствующий level-4
          let level4 = document.querySelector(`.mobile-cat-menu.level-4[data-type="${dataType}"]`);
          if (level4) level4.classList.add("active");
      });
  });

  // 4. Закрытие конкретного меню при клике на .close-menu-level
  document.querySelectorAll(".close-menu-level").forEach((closeBtn) => {
      closeBtn.addEventListener("click", function () {
          this.closest(".mobile-cat-menu")?.classList.remove("active");
      });
  });
});
