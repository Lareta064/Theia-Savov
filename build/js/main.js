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

     
      
    // const headerEl = document.querySelector('header');
    // const openSearchForm = document.querySelector('#search-btn');
    // const searchFormPopup = document.querySelector('#search-popup');

    // const menuToggle = document.querySelector('#menu-toggle');
    // const mobileMenu = document.querySelector('#mobile-menu');
    

    // function hideSerchForm(formBlock) {
    //     formBlock.classList.remove('active');
    //     formBlock.style.top = 'auto';
    //     bodyEl.classList.remove('lock');
    // }

    // function resetActiveMenu() {
    //     mobileMenu.querySelector('.active')?.classList.remove('active');
    //     mobileMenu.classList.remove('active');
    //     menuToggle.classList.remove('active');
    // }

    // if (openSearchForm) {
    //     openSearchForm.addEventListener('click', () => {

    //         if (searchFormPopup.classList.contains('active')) {
    //             hideSerchForm(searchFormPopup);
    //         } else {
               
    //             const topPosition = headerEl.getBoundingClientRect().bottom;
    //             resetActiveMenu();
    //             searchFormPopup.classList.add('active');
    //             searchFormPopup.style.top = topPosition + 'px';
    //             bodyEl.classList.add('lock');
    //             fixedButtons.classList.remove('active');

    //         }

    //     });
       
    //     searchFormPopup.addEventListener('click', (e) => {
    //         if (e.target == e.currentTarget) {
    //             searchFormPopup.classList.remove('active');
    //             bodyEl.classList.remove('lock');
    //         }
    //     });
    // }
   
    // if (menuToggle) {
    //     const mobMenuDropItem = mobileMenu.querySelectorAll('.drop-menu-li');

      
    //     menuToggle.addEventListener('click', () => {
    //         hideSerchForm(searchFormPopup);
    //         if (menuToggle.classList.contains('active')) {
    //             resetActiveMenu();
    //             bodyEl.classList.remove('lock');
    //             if (window.scrollY > 500) {
    //                 fixedButtons.classList.add('active');

    //             }


    //         } else {
    //             menuToggle.classList.add('active');
    //             mobileMenu.classList.add('active');
    //             bodyEl.classList.add('lock');

    //         }
    //     });

      
    //     for (let item of mobMenuDropItem) {
    //         item.addEventListener('click', function (e) {
    //             item.querySelector('.drop-menu-wrapper').classList.add('active');
                
    //         });
    //         item.querySelector('.back-link').addEventListener(
    //             'click',
    //             (e) => {
    //                 e.stopPropagation();
    //                 e.target.closest('.drop-menu-wrapper').classList.remove('active');
                    
    //             }
    //         );
    //     }
    // }
    /*=====CUSTOM SELECT===== */
	// polyfill for forEach для NodeList
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

    let hoverTimeout;

    function setupLargeScreenLogic() {
        console.log("Логика для больших экранов активна");
      
        // Показать меню при наведении на кнопку
        menuButton.addEventListener("mouseenter", () => {
          menuWrapper.classList.add("active");
        });
      
        // Скрыть меню при уходе курсора за пределы .cm-wrapper
        menuWrapper.addEventListener("mouseleave", () => {
          hoverTimeout = setTimeout(() => {
            menuWrapper.classList.remove("active");
          }, 300); // Задержка
        });
      
        // Отменить скрытие при возвращении курсора в .cm-wrapper
        menuWrapper.addEventListener("mouseenter", () => {
          clearTimeout(hoverTimeout);
        });
      // Скрыть меню при уходе мыши за пределы .cm-content
        menuContent.addEventListener("mouseleave", () => {
           
            console.log("Уход мыши за пределы .cm-content"); // Отладка
            menuWrapper.classList.remove("active");
            clearAllActiveClasses(); // Сбрасываем классы активности
            
        });
        function clearActiveFromSubLists() {
            subLists.forEach((list) => {
              list.classList.remove("active");
            });
            subItems.forEach((item) => {
              item.classList.remove("active");
            });
            clearActiveFromSubSubLists();
          }
        // Сброс всех активных классов
        function clearAllActiveClasses() {
            mainItems.forEach((item) => item.classList.remove("active"));
            clearActiveFromSubLists();
        }
         // Сброс активных классов третьего уровня
        function clearActiveFromSubSubLists() {
            subSubLists.forEach((list) => {
            list.classList.remove("active");
            });
        }
                // Наведение на первый уровень меню
        mainItems.forEach((item) => {
          item.addEventListener("mouseenter", () => {
            const subdrop = item.getAttribute("data-drop");
            const relatedSublist = document.querySelector(`[data-subdrop="${subdrop}"]`);
            if (relatedSublist) {
              subLists.forEach((list) => list.classList.remove("active")); // Сбрасываем другие
              relatedSublist.classList.add("active");
            }
          });
        });
      
        // Наведение на второй уровень меню
        subItems.forEach((item) => {
          item.addEventListener("mouseenter", () => {
            const subSubdrop = item.getAttribute("data-sub-subdrop");
            const relatedSubSublist = document.querySelector(`[data-sublist="${subSubdrop}"]`);
            if (relatedSubSublist) {
              subSubLists.forEach((list) => list.classList.remove("active")); // Сбрасываем другие
              relatedSubSublist.classList.add("active");
            }
          });
        });
      }
      /*********************** */
      function setupSmallScreenLogic() {
        console.log("Логика для маленьких экранов активна");
        // Клик по кнопке #catalogy-menu-open
        menuButton.addEventListener("click", () => {
          menuWrapper.classList.add("active");
        });
      
        // Клик по элементам первого уровня меню
        mainItems.forEach((item) => {
          item.addEventListener("click", () => {
            const subdrop = item.getAttribute("data-drop");
            const relatedSublist = document.querySelector(`[data-subdrop="${subdrop}"]`);
            if (relatedSublist) {
              cmLevel2?.classList.add("active");
              relatedSublist.classList.toggle("active");
            }
          });
        });
      
        // Клик по элементам второго уровня меню
        subItems.forEach((item) => {
          item.addEventListener("click", () => {
            const subSubdrop = item.getAttribute("data-sub-subdrop");
            const relatedSubSublist = document.querySelector(`[data-sublist="${subSubdrop}"]`);
            if (relatedSubSublist) {
              cmLevel3?.classList.add("active");
              relatedSubSublist.classList.toggle("active");
            }
          });
        });
      
        // Закрытие по кнопке .close-menu-part
        closeButtons.forEach((button) => {
          button.addEventListener("click", () => {
           
            
            const closestActive = button.closest(".active");
            const childActive = closestActive.querySelector(".active");
            
            
            childActive?.classList.remove("active");
            closestActive?.classList.remove("active");
          });
        });
      }
      /************************** */
      function handleResize() {
        const isLarge = window.innerWidth >= 1200;
      
        // Сброс всех классов при переключении
        menuWrapper.classList.remove("active");
        cmLevel2?.classList.remove("active");
        cmLevel3?.classList.remove("active");
        subLists.forEach((list) => list.classList.remove("active"));
        subSubLists.forEach((list) => list.classList.remove("active"));
        
        // Подключение логики для текущего экрана
        if (isLarge) {
          setupLargeScreenLogic();
        } else {
          setupSmallScreenLogic();
        }
      }
      
      handleResize();
      window.addEventListener("resize", handleResize);
 });