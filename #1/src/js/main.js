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

// ---------- aos ----------

AOS.init({
  once: true,
});

// ---------- /aos ----------