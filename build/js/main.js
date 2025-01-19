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

    /*Add class for footer prev siblings */
    const pageFooter = document.querySelector('footer.footer');
    const previousElement = pageFooter.previousElementSibling;
      if (previousElement) {
        previousElement.classList.add('pb-90');
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
                    slidesPerView: 4,
                  },
                  1280:{
                    spaceBetween:40,
                    slidesPerView: 4,
                  
                  }
              
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

    });
    /*service-cards main page */
    const serviceCards = new Swiper('.service-cards', {
      slidesPerView: 'auto',
      speed:1000,
      spaceBetween:20,
      grabCursor: true,
     
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

    /* =============== modal с атрибутом [data-modal] ===============*/ 
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
    
    /*==  закрыть модалки  frame-modal по клику на крестик ======*/
    if(modalFramesClose){
      for(let item of modalFramesClose){
        item.addEventListener('click', function(e){
        e.preventDefault();
        item.closest('[data-modal]').classList.remove('visible');
        bodyEl.classList.remove('lock');
        });
      }
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
  
    // Функция для запуска кастомного слайдера
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
            }, 500); // Время совпадает с transition: opacity 0.5s
          }, 500);
        });
  
        // Обновляем индекс
        currentIndex = (currentIndex + 1) % 3; // Учитываем 3 варианта содержимого
      }, 5000);
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
  }

  // Логика для больших экранов
  function setupLargeScreenLogic() {
      console.log("Логика для больших экранов активна");

      menuButton.addEventListener("mouseenter", () => {
          menuWrapper.classList.add("active");
          bodyEl.classList.add('lock');
          activateFirstMenuItem();
      });

      menuWrapper.addEventListener("mouseleave", () => {
          hoverTimeout = setTimeout(() => {
              menuWrapper.classList.remove("active");
              bodyEl.classList.remove('lock');
              clearActiveClasses();
          }, 300);
      });

      menuWrapper.addEventListener("mouseenter", () => {
          clearTimeout(hoverTimeout);
      });

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

});
 