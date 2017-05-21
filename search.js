


$(document).ready(function() {
	var ingredients=[];
	
	function findMenu() {
		var id = ingredients[0];
		for (var i = 1; i < ingredients.length; i++) {
			id += ","+ingredients[i];
		}
		console.log(id);
		return menuList[id];
	}
	function printMenu() {
		$("#menuResult").empty();

		var menus = findMenu();
		console.log(menus);
		for (var i = 0; i < menus.length; i++) {
			$("#menuResult").append($('<div class=\"menuLink\">')
								.append($('<div class=\"menuImg\">').append('<img src=\"\">'))
								.append($('<div class=\"menuTitle\">').append($('<span class=\"title\">').append(menus[i]))));
			$("#menuResult").append($('<div class=\"container-19\">'));
			
		};

	}
	function onClick() {
		$(".searchBox").click(function () {
			if (ingredients.length){
				$('#addList').show();
			}
			$('#searchInput').val("");
		});

		$(".mainLogo").click(function () {
			if( $('#addList').is(':visible') ) {
    			// 로고이미지 바꾸기
    			$('#addList').hide();
			}
			else {
    			// it's not visible so do something else
    			location.reload();
			}
		})
	}
	function searchClick() {
		$("#addButton").click(function() {
			addIngredient();	
		});
	}
	function enter() {
		$("#searchInput").keyup(function(event){
    		if(event.keyCode == 13){
        		$("#addButton").click();
    		}
    	})
    }
	function cancelClick() {
		$(".deleteIngre").click(function () {
			ingredients.splice($(this).closest('.ingreBox').data('idx'), 1);
			$(this).closest('.ingreBox').remove();

			if (ingredients.length == 0){
				$('#addList').hide();
			}
			printMenu();

		});

	}
	function addIngredient() {
		if ($('#searchInput').val() != ""){
			ingredients.push($('#searchInput').val());

			$("#addList").append($('<div class=\"ingreBox\">')
						.append($('<div class=\"ingreName\">').append($('#searchInput').val()))
						.append('<input type=\"Button\" class=\"deleteIngre\">')
						.data('idx', ingredients.length-1));
			$(".searchBox").click();
			cancelClick();
			printMenu();
		}
	}

	onClick();
	enter();
	searchClick();
});
