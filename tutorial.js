$(document).ready(function() {
	var id = 0;
	$("#next").click(function () {

		if (id == 0){

			$("#tutorial1").hide();
			$("#tutorial2").show();
			id =1;
		}
		else if (id == 1){
			$("#tutorial2").hide();
			$("#tutorial3").show();

			id =2;
		}
		else if (id == 2){

			$(this).parent().attr('href', 'index.html');

		}
	});




});

