// ---------- nav ----------

const menu = document.querySelector('.nav__body');
const menuBtn = document.querySelector('.nav__icon');
const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', () => {
		menu.classList.toggle('active');
		menuBtn.classList.toggle('active');
		body.classList.toggle('lock');
	});

	menu.querySelectorAll('.nav__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active');
			menuBtn.classList.remove('active');
			body.classList.remove('lock');
		})
	});
};

// ---------- /nav ----------

// ---------- slider ----------

const slider = document.querySelector('.swiper');

let swiper = new Swiper(slider, {

  slidesPerView: 'auto',
  spaceBetween: 45,
  loop: true,
  slideToClickedSlide: true,
  speed: 600,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    0: {
  	  centeredSlides: true,
  	  spaceBetween: 40,
    },

    1381: { }
  }

});

// ---------- /slider ----------