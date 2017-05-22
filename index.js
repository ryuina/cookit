$(document).ready(function() {
	var ingredients=[];

	var menus=["kimbab", "pizza", "aglio oglio", "french toast", "bibimbap", "pancake", "noodle"]
	/*function printMenu() {
		$(".menuList").empty();
		var idx=Math.floor(Math.random() * (6 - 0)) + 0;
		for (var i = 0; i < idx; i++) {
			$(".menuList").append($('<div class=\"menu\">').append($('<a href=\"filter/filter.html\">').append(menus[i])));
			
		};
	}*/
    
	function addIngredient() {
		
		ingredients.unshift($('#input').val());
		$("#addList").append($('<div class=\"item\">')
					.append($('<span class=\"itemName\">').append($('#input').val()))
					.append('<button name=\"Button\" class=\"cancelItem\" >x'));
		cancelClick();
		printMenu();
	}
	function searchClick() {
		$("#searchButton").click(function() {
			addIngredient();
			
		});
	}
	function cancelClick() {
		$(".cancelItem").click(function () {
			$(this).closest('.item').remove();
			printMenu();
		});

	}
	function enter() {

		$("#input").keyup(function(event){
    		if(event.keyCode == 13){
        		$("#searchButton").click();
    		}
    	})
    }
    function focusOn() {
    	$("#input").each(function ()
	{
	    // store default value
	    var v = this.value;

	    $(this).blur(function ()
	    {
	        // if input is empty, reset value to default 
	        if (this.value.length == 0) this.value = v;
	    }).focus(function ()
	    {
	        // when input is focused, clear its contents
	        this.value = "";
	    }); 
	
    })}

   	function closeHelp() {
		var modal = document.getElementById('myModal');
		var btn = document.getElementById("myBtn");
		var span = document.getElementsByClassName("close")[0];
		btn.onclick = function() {
			modal.style.display = "block";
		}
		span.onclick = function() {
			modal.style.display = "none";
		}
		window.onclick = function(event) {
			if (event.target == modal) {
	    		modal.style.display = "none";
			}
		}

    }

    focusOn();
	enter();
	searchClick();
	closeHelp();

});
