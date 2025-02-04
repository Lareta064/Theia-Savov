document.addEventListener("DOMContentLoaded", function () {
    const bodyEl = document.body;
    // header search form
    const searchFormOpen = document.querySelector('#searchForm-open');
    if(searchFormOpen){
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
						const swiper = new Swiper(swiperContainer, {
              slidesPerView: 4,
              speed:1000,
              spaceBetween:40,
              navigation: {
                nextEl: block.querySelector(".tabs-swiper-next"),
                prevEl: block.querySelector(".tabs-swiper-prev"),
              },
              pagination: {
                el: tabBody.querySelector(".tabs-swiper-pagination"),
                clickable: true,
              },
              breakpoints:{
                  320:{
                    spaceBetween:10,
                    slidesPerView: 2,
                },
                  768:{
                      spaceBetween:20,
                      slidesPerView: 3,
                  },
                  1024:{
                    spaceBetween:20,
                    slidesPerView: 3,
                  },
                  1200:{
                    spaceBetween:40,
                    slidesPerView: 4,
                  
                  },
                  1650:{
                    spaceBetween:40,
                    slidesPerView: 4,
                  
                  },

              
              }
						});

						swiperInstances[tabBody.id] = swiper;
					}
					});

					
					tabsNav.forEach((tab) => {
					tab.addEventListener("click", (e) => {
						e.preventDefault();
						const targetTabId = tab.dataset.tab;

						// Убираем активный класс со всех табов и контента
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
      slidesPerView: 3,
      speed:1000,
      spaceBetween:20,
      pagination: {
        el:".mySwiper-pagination",
        clickable: true,
      },
    breackpoints:{
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
      breackpoints:{
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
        breackpoints:{
          1439:{
            slidesPerView: 'auto',
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
        autoplay:{
            delay: 5000,
        }
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

  // // Логика для больших экранов
  // function setupLargeScreenLogic() {
  //     console.log("Логика для больших экранов активна");

  //     menuButton.addEventListener("mouseenter", () => {
  //         menuWrapper.classList.add("active");
  //         bodyEl.classList.add('lock');
  //         activateFirstMenuItem();
  //     });

  //     menuWrapper.addEventListener("mouseleave", () => {
  //         hoverTimeout = setTimeout(() => {
  //             menuWrapper.classList.remove("active");
  //             bodyEl.classList.remove('lock');
  //             clearActiveClasses();
  //         }, 300);
  //     });
  //     menuWrapper.addEventListener("click", (e) => {
        
  //       if(e.target == e.currentTarget){
  //         menuWrapper.classList.remove("active");
  //         bodyEl.classList.remove('lock');
  //          clearTimeout(hoverTimeout);
  //       }       
  //     });
  //     menuWrapper.addEventListener("mouseenter", () => {
  //         clearTimeout(hoverTimeout);
  //     });

  //     mainItems.forEach((item) => {
  //         item.addEventListener("mouseenter", () => {
  //             const subdrop = item.getAttribute("data-drop");
  //             const relatedSublist = document.querySelector(`[data-subdrop="${subdrop}"]`);
  //             const relatedImage = document.querySelector(`[data-img="${subdrop}"]`);

  //             clearActiveClasses();

  //             item.classList.add("active");
  //             if (relatedSublist) relatedSublist.classList.add("active");
  //             if (relatedImage) relatedImage.classList.add("active");
  //         });
  //     });

  //     subItems.forEach((item) => {
  //         item.addEventListener("mouseenter", () => {
  //             const subSubdrop = item.getAttribute("data-sub-subdrop");
  //             const relatedSubSublist = document.querySelector(`[data-sublist="${subSubdrop}"]`);

  //             subItems.forEach((subItem) => subItem.classList.remove("active"));
  //             subSubLists.forEach((list) => list.classList.remove("active"));

  //             item.classList.add("active");
  //             if (relatedSubSublist) relatedSubSublist.classList.add("active");
  //         });
  //     });
  // }
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

    // 🛠 **Новый обработчик**: Закрытие при уходе курсора с `menuButton`
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
});
//стики шапка + счетчик
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header"); // 
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
   
    /*FLIP CARD */
    // const flipCards = document.querySelectorAll('.flip-card');

		// 		if (flipCards.length > 0) {
    //       flipCards.forEach((card) => {
    //         const cardFlipBtn = card.querySelector('.flip-card-btn');
    //         const flipCardBack = card.querySelector('.flip-card__back');
    //         const startDateInput = card.querySelector('.start-date');

    //         // Добавляем класс flip-active при наведении на кнопку
    //         cardFlipBtn.addEventListener('mouseenter', () => {
    //         card.classList.add('flip-active');
    //         });

    //         // Удаляем класс flip-active при уходе с flip-card__back
    //         if (flipCardBack) {
    //         flipCardBack.addEventListener('mouseenter', () => {
    //           card.classList.add('flip-active');
    //         });

    //         flipCardBack.addEventListener('mouseleave', (event) => {
    //           // Проверяем, не ушла ли мышь в flatpickr-calendar
    //           const flatpickrCalendar = document.querySelector('.flatpickr-calendar');
    //           if (
    //           flatpickrCalendar &&
    //           flatpickrCalendar.contains(event.relatedTarget)
    //           ) {
    //           return; // Если мышь ушла в flatpickr-calendar, не удаляем flip-active
    //           }
    //           card.classList.remove('flip-active');
    //         });
    //         }

    //         // Добавляем класс flip-active при клике на start-date
    //         if (startDateInput) {
    //         startDateInput.addEventListener('click', () => {
    //           card.classList.add('flip-active');
    //         });
    //         }

    //         // Добавляем обработчик на flatpickr-calendar
    //         document.addEventListener('mouseenter', (event) => {
    //         const flatpickrCalendar = document.querySelector('.flatpickr-calendar');
    //         if (
    //           flatpickrCalendar &&
    //           flatpickrCalendar.contains(event.target) &&
    //           card.contains(flatpickrCalendar) // Убедимся, что это календарь текущей карточки
    //         ) {
    //           card.classList.add('flip-active');
    //         }
    //         });
    //       });
		// 		}
    /*FLIP CARD */
    const flipCards = document.querySelectorAll('.flip-card');
      if(flipCards.length>0){
        flipCards.forEach((card)=>{
          const cardFlipBtn = card.querySelector('.flip-card-btn');
          cardFlipBtn.addEventListener('click', ()=>{
            card.classList.add('flip-active');
          });

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
        
        slidesPerView: 'auto',
        direction: "vertical", // Вертикальный режим
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".mySwiperThumb-next",
          prevEl: ".mySwiperThumb-prev",
        },
        });
        var mySwiperFotorama = new Swiper(".mySwiperFotorama", {
        spaceBetween: 10,
        speed: 800,
       
        thumbs: {
          swiper:  mySwiperThumb,
        },
      });

      // Fancybox
      Fancybox.bind("[data-fancybox]", {
       
      });
});
 