$(document).ready(function() {
    $('ul.components li a').click(function(event) {
        event.preventDefault();
        $(window).scrollTop($(document.getElementById($(event.target).text().replace(/ /g,"-").replace(/\?/g,"").replace(/\'/g,"").toLowerCase())).offset().top);
		window.scrollBy(0,-60);
    });

    $(function() {
    	var path = location.pathname;
    	$("a[href='" + path + "']").addClass('active');
	})
});