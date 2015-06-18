/**
 * 
 */

/**
 * smooth scroll on menu click;
 */
$(function() {
	$('a[href*=#]:not([href=#])').click(
			function() {
				if (location.pathname.replace(/^\//, '') == this.pathname
						.replace(/^\//, '')
						&& location.hostname == this.hostname) {

					var hash = this.hash;
					var target = $(hash);
					target = target.length ? target : $('[name='
							+ hash.slice(1) + ']');
					if (target.length) {
						$('html,body').animate({
							scrollTop : target.offset().top
						}, 1000, "swing", function() {
							location.hash = hash == "#intro" ? "" : hash;
						});
						return false;
					}
					;
				}
			});
});

/**
 * replace textual bullets in rating section in source with images.
 */
$(function() {
	var bullets = $("div.rating").toArray();
	for (var i = 0; i < bullets.length; i++) {
		bullets[i].innerHTML = bullets[i].innerHTML.replace(/<pl>/g,
				"<img class='bullet' src='data/+.png'>");
		bullets[i].innerHTML = bullets[i].innerHTML.replace(/<mn>/g,
				"<img class='bullet' src='data/-.png'>");

	}
});