


$(document).ready(function() {
	var ingredients=[];
	function listToString(){
		var id = ingredients[0];
		for (var i = 1; i < ingredients.length; i++) {
			id += ", "+ingredients[i];
		}
		return id;
	}
	function findMenu() {
		var id = ingredients[0].toLowerCase();
		for (var i = 1; i < ingredients.length; i++) {
			id += ","+ingredients[i].toLowerCase();
		}
		return id;
	}
	function printMenu() {
		$("#listTitle").val("Menu Results");
		$("#menuList").css("margin-top", 66 + parseInt($("#addList").css('height')));

		$("#menuResult").empty();
		var id = findMenu();
		var menus = menuList[id];
		for (var i = 0; i < menus.length; i++) {
			$("#menuResult").append($('<div class=\"menuLink\">')
								.append($('<a>').attr('href','filter/filter.html?menu='+menus[i]+'&ingredients='+id)
									.append($('<div class=\"menuImg\">').append('<img src='+menuSrc[menus[i]]+'>')))
								.append($('<div class=\"menuTitle\">').append($('<span class=\"title\">').append(menus[i]))));
			$("#menuResult").append($('<div class=\"container-19\">'));
			
		};

	}
	function onClick() {
		$(".searchBox").click(function () {
			if (ingredients.length){
				$('#addList').show();
				$(".mainLogo img").attr('src', 'img/Ingredient_tab_close.png')
				$("#menuList").css("margin-top", 66 + parseInt($("#addList").css('height')));

			}
			$('#searchInput').val("");
		});

		$(".mainLogo").click(function () {
			if( $('#addList').is(':visible') ) {
    			$(".mainLogo img").attr('src', 'img/cookit_logo.png');

    			$('#addList').hide();
    			$('#searchInput').val(listToString());
    			$("#menuList").css("margin-top", 66);
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
        		$( "#searchInput" ).autocomplete( "close" );
    		}
    	})
    }
	function cancelClick() {
		$(".deleteIngre").click(function () {
			console.log("111");
			console.log($(this).closest('.ingreName'));
			$(this).parent('.ingreBox').remove();
			ingredients.splice($(this).closest('.ingreBox').data('idx'), 1);

			if (ingredients.length == 0){
				console.log("122");
				$(".mainLogo img").attr('src', 'img/cookit_logo.png');
				$('#addList').hide();
				$("#menuList").css("margin-top", 66);
				$("#listTitle").val("Recommenadation");
				$("#menuResult").empty();
				$('#menuResult').append(rcmd);
			}
			else{
				console.log("222");
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

	function autoComplete() {
		/*
		var options = {
			data : ings,
			list: {
				onClickEvent: function() {
					addIngredient();
				},
				match: {
					enabled: true
				}
			}
		}
		$('#searchInput').easyAutocomplete(options);	
		*/
		$('#searchInput').autocomplete({
			source: ings,
			minLength: 2,
			select: function (event, ui) {
				$(this).val(ui.item.value);
				addIngredient();
				$(this).val("");
				$(this).focus();
				return false;
			}
		});

		
	}
	onClick();
	enter();
	searchClick();
	autoComplete();
});
