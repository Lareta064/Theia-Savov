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
    /*simpleBar */
    // Array.prototype.forEach.call(
    //     document.querySelectorAll('[data-simplebar]'),
    //     (el) => new SimpleBar(el)
    //   );
    /*bigMenu */
    

     
      
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

// document.addEventListener("DOMContentLoaded", () => {
//     const menuButton = document.getElementById("catalogy-menu-open");
//     const menuWrapper = document.querySelector(".cm-wrapper");
//     const mainItems = document.querySelectorAll("[data-drop]");
//     const subLists = document.querySelectorAll("[data-subdrop]");
//     const subItems = document.querySelectorAll("[data-sub-subdrop]");
//     const subSubLists = document.querySelectorAll("[data-sublist]");
  
//     let hoverTimeout;
  
//     // Показать меню при наведении на кнопку
//     menuButton.addEventListener("mouseenter", () => {
//       clearTimeout(hoverTimeout);
//       menuWrapper.classList.add("active");
//     });
  
//     // Скрыть меню при уходе курсора
//     menuWrapper.addEventListener("mouseleave", () => {
//       hoverTimeout = setTimeout(() => {
//         menuWrapper.classList.remove("active");
//         clearAllActiveClasses(); // Сбрасываем классы активности
//       }, 300); // Задержка
//     });
  
//     // Отменить скрытие при возвращении курсора
//     menuWrapper.addEventListener("mouseenter", () => {
//       clearTimeout(hoverTimeout);
//     });
  
//     // Наведение на первый уровень меню
//     mainItems.forEach((item) => {
//       item.addEventListener("mouseenter", () => {
//         clearActiveFromSubLists(); // Сбрасываем классы второго уровня
//         const subdrop = item.getAttribute("data-drop");
//         const relatedSublist = document.querySelector(`[data-subdrop="${subdrop}"]`);
//         if (relatedSublist) {
//           relatedSublist.classList.add("active");
//         } else {
//           console.warn(`Не найден элемент с data-subdrop="${subdrop}"`);
//         }
//       });
//     });
  
//     // Наведение на второй уровень меню
//     subItems.forEach((item) => {
//       item.addEventListener("mouseenter", () => {
//         clearActiveFromSubSubLists(); // Сбрасываем классы третьего уровня
//         const subSubdrop = item.getAttribute("data-sub-subdrop");
//         console.log("Текущий subItem:", item);
//         console.log("Текущий subSubdrop:", subSubdrop);
  
//         const relatedSubSublist = document.querySelector(`[data-sublist="${subSubdrop}"]`);
//         console.log("Связанный элемент:", relatedSubSublist);
  
//         if (relatedSubSublist) {
//           relatedSubSublist.classList.add("active");
//         } else {
//           console.warn(`Не найден элемент с data-sublist="${subSubdrop}"`);
//         }
//       });
//     });
  
//     // Сброс активных классов второго уровня
//     function clearActiveFromSubLists() {
//       subLists.forEach((list) => {
//         list.classList.remove("active");
//       });
//       subItems.forEach((item) => {
//         item.classList.remove("active");
//       });
//       clearActiveFromSubSubLists();
//     }
  
//     // Сброс активных классов третьего уровня
//     function clearActiveFromSubSubLists() {
//       subSubLists.forEach((list) => {
//         list.classList.remove("active");
//       });
//     }
  
//     // Сброс всех активных классов
//     function clearAllActiveClasses() {
//       mainItems.forEach((item) => item.classList.remove("active"));
//       clearActiveFromSubLists();
//     }
//   });
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("catalogy-menu-open");
    const menuWrapper = document.querySelector(".cm-wrapper");
    const mainItems = document.querySelectorAll("[data-drop]");
    const subLists = document.querySelectorAll("[data-subdrop]");
    const subItems = document.querySelectorAll("[data-sub-subdrop]");
    const subSubLists = document.querySelectorAll("[data-sublist]");
    const closeButtons = document.querySelectorAll(".close-menu-part");
  
    let hoverTimeout;
  
    // Проверка ширины экрана
    const isLargeScreen = () => window.innerWidth >= 1200;
  
    // Показать меню при наведении на кнопку (для больших экранов)
    menuButton.addEventListener("mouseenter", () => {
      if (isLargeScreen()) {
        menuWrapper.classList.add("active");
      }
    });
  
    // Клик по кнопке #catalogy-menu-open (для всех экранов)
   
    menuButton.addEventListener("click", () => {
      console.log("Клик по #catalogy-menu-open");
      menuWrapper.classList.add("active");
    });
  
    // Закрытие по кнопке .close-menu-part
    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const closestActive = button.closest(".active");
          if (closestActive) {
            closestActive.classList.remove("active");
          }
        });
      });
  
    // Скрыть меню при уходе курсора за пределы .cm-wrapper (для больших экранов)
    menuWrapper.addEventListener("mouseleave", () => {
      if (isLargeScreen()) {
        hoverTimeout = setTimeout(() => {
          console.log("Уход мыши за пределы .cm-wrapper");
          menuWrapper.classList.remove("active");
        }, 300); // Задержка
      }
    });
  
    // Отменить скрытие при возвращении курсора в .cm-wrapper
    menuWrapper.addEventListener("mouseenter", () => {
      if (isLargeScreen()) {
        clearTimeout(hoverTimeout);
      }
    });
  
    // Сброс активных классов второго уровня
    function clearActiveFromSubLists() {
      subLists.forEach((list) => {
        list.classList.remove("active");
      });
      subItems.forEach((item) => {
        item.classList.remove("active");
      });
      clearActiveFromSubSubLists();
    }
  
    // Сброс активных классов третьего уровня
    function clearActiveFromSubSubLists() {
      subSubLists.forEach((list) => {
        list.classList.remove("active");
      });
    }
    // Клик по элементам первого уровня меню (для маленьких экранов)
    mainItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (!isLargeScreen()) {
            console.log("Клик по элементу с data-drop:", item);
            clearActiveFromSubLists();
            const subdrop = item.getAttribute("data-drop");
            const relatedSublist = document.querySelector(`[data-subdrop="${subdrop}"]`);
            if (relatedSublist) {
                console.log('555');
                document.querySelector('.cm-level-2').classList.add('active');
              relatedSublist.classList.toggle("active"); // Переключаем активность
            }
          }
        });
      });
    
      // Клик по элементам второго уровня меню (для маленьких экранов)
      subItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (!isLargeScreen()) {
            console.log("Клик по элементу с data-sub-subdrop:", item);
            clearActiveFromSubSubLists();
            const subSubdrop = item.getAttribute("data-sub-subdrop");
            const relatedSubSublist = document.querySelector(`[data-sublist="${subSubdrop}"]`);
            if (relatedSubSublist) {
              relatedSubSublist.classList.toggle("active"); // Переключаем активность
              document.querySelector('.cm-level-3').classList.add('active');
            }
          }
        });
      });
  });
