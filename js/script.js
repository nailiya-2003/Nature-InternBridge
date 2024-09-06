const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    mousewheel: true,
    parallax: true,
    speed: 1700
  });
// Now you can use all slider methods like
console.log(swiper)

document.querySelectorAll('.header-content h1').forEach(e => {
	e.innerHTML = e.textContent.replace(/ (-|#|@){1}/g, s => s[1]+s[0]).replace(/(\S*)/g, m => {
		return m.replace(/\S(-|#|@)?/g, '<span class="letter">$&</span>')
	})
	e.querySelectorAll('.letter').forEach(function(l, i) {
		l.setAttribute('style', `z-index: -${ i }; transition-duration: ${ i/5 + 1 }s`)
	})
})
swiper.on('slideChange', function() {
	const el = document.querySelectorAll('.header-content__slide');
	el.forEach((item, i) => {
		if (swiper.activeIndex === i) {
            item.classList.add('active');
			
        } else {
            item.classList.remove('active');
        }
	}) 
})