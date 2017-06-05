


$(document).ready(function() {
	var ingredients=[];
	function listToString(){
		var id = ingredients[0];
		for (var i = 1; i < ingredients.length; i++) {
			id += ", "+ingredients[i];
		}
		console.log(id);
		return id;
	}
	function listToID(){
		var id = ingredients[0];
		for (var i = 1; i < ingredients.length; i++) {
			id += ","+ingredients[i].toLowerCase();
		}
		console.log(id);
		return id;
	}
	function findMenu() {
		//var id = ingredients[0].toLowerCase();
		result = []
		for (var i = 0; i < menuList.length; i++) {
			success = true;
			for (var j = 0; j < ingredients.length; j++) {
				if (jQuery.inArray(ingredients[j].toLowerCase(), menuList[i]["ingredients"]) == -1 ){
					success = false;
				}
			}
			if (success){
				result.push(menuList[i]);
			}
		}
		console.log(result);
		return result
		/*
		for (var i = 1; i < ingredients.length; i++) {
			id += ","+ingredients[i].toLowerCase();
		}
		return id;*/
	}
	function printMenu() {
		$("#listTitle").val("Menu Results");
		$("#menuList").css("margin-top", 66 + parseInt($("#addList").css('height')));

		$("#menuResult").empty();
		var menus = findMenu();
		
		console.log(menus);
		for (var i = 0; i < menus.length; i++) {
			$("#menuResult").append($('<div class=\"menuLink\">')
								.append($('<a>').attr('href','filter/filter.html?menu='+menus[i]["name"]+'&ingredients='+listToID())
									.append($('<div class=\"menuImg\">').append('<img src='+menuSrc[menus[i]["name"]]+'>')))
								.append($('<div class=\"menuTitle\">').append($('<span class=\"title\">').append(menus[i]["name"]))));
			$("#menuResult").append($('<div class=\"container-19\">'));
			
		};

	}
	function onClick() {
		$(".searchBox").click(function () {
			if (ingredients.length){
				$('#addList').show();
				$(".mainLogo img").attr('src', 'img/Ingredient_tab_close.png')

			}
			$('#searchInput').val("");
		});

		$(".mainLogo").click(function () {
			if( $('#addList').is(':visible') ) {
    			$(".mainLogo img").attr('src', 'img/cookit_logo.png')

    			$('#addList').hide();
    			$('#searchInput').val(listToString());
			}
			else {
    			// it's not visible so do something else
    			location.reload();
			}
		})
	}
	function searchClick() {
		$("#addButton").click(function() {
			
			if ($('#searchInput').val() != "Add ingredient for search..."){
				addIngredient();	
			}
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
			console.log($(this).closest('.ingreBox').data('idx'));
			ingredients.splice($(this).closest('.ingreBox').data('idx'), 1);

			$(this).closest('.ingreBox').remove();

			if (ingredients.length == 0){
				$('#addList').hide();
				$("#menuList").css("margin-top", 66);
				$("#listTitle").val("Recommenadation");
				$("#menuResult").empty();
				$('#menuResult').append(rcmd);
			}
			else{
				printMenu();
			}
				

		});

	}
	function addIngredient() {
		if ($('#searchInput').val() != ""){
			ingredients.push($('#searchInput').val());

			$("#addList").append($('<div class=\"ingreBox\">')
						.append($('<div class=\"ingreName\">').append($('#searchInput').val()))
						.append($('<div class="deleteIngre">').append('<img src="img/X_button.png"/>'))
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
