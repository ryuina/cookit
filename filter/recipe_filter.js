// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

$( document ).ready(function() {
    var recipe_table = recipes;
    
    function getParameter() {
        var parameters = location.search.substring(1).split("&");
        //console.log(parameters);
        menu = parameters[0].split("=")[1];
        //console.log(menu);
        ingredients = parameters[1].split("=")[1].split(',');
        //console.log(ingredients);
    }
    
    function showTitle() {
        var nc = menu[0];
        for(var i=1; i<menu.length; i++)
        {
            if(menu[i].toUpperCase() == menu[i])
                nc = nc + " " + menu[i];
            else
                nc = nc + menu[i];
        }
        $(".menuName").html('"'+nc+'"');
        var content='- based on ';
        for(var i=0; i<ingredients.length; i++)    
        {
            if(i==ingredients.length-1)
            {
                content = content + ingredients[i] + ".";
            }
            else
            {
                content = content + ingredients[i] + ", ";     
            }
            
        }
        $(".ingredientName").html(content);
    }
    
    function fillcontent(img, name, difficulty, time, needigr) {
        var difimg;
        if(difficulty == 0)
            difimg = "img/Easy.png";
        else if(difficulty == 1)
            difimg = "img/Middle.png";
        else
            difimg = "img/Hard.png";
        
        content = '<div class="recipeBox"><div class="recipeLink"><div class="recipeImg"><img src="' + img + '"></div><div class="recipeTitle"><div class="options"><div class="option1"><img src="' + difimg + '"></div><div class="option2"><img src="img/Time.png"><span class="time">' + time + '</span></div><div class="option3"><img src="img/Ingredient_needed.png"><span class="ingredient">+' + needigr + '</span></div></div><div class="recipeName">' + name + '</div></div></div><div class="container-19"></div></div>'
        
        return content;
    }
    
    function showinit() {
        $("#recipes").html("")
        var tmpcontent = "";
        var cnt;
        var flag;
        var time;
        var ingredient;
        var difficulty;
        
        for(var i=0; i<recipes.length; i++)
        {
            flag = 0;
            tmpcnt = "";
            cnt = 0;
            if(recipes[i]["menu"] == menu)
            {
                //console.log(recipes[i]["ingredients"]);
                for(var j=0; j<recipes[i]["ingredients"].length; j++)
                {
                    for(var k=0; k<ingredients.length;k++)
                    {
                        if(ingredients[k]==recipes[i]["ingredients"][j])
                        {
                            console.log(recipes[i]["ingredients"][j]);
                            flag = 1;
                            cnt ++;
                        }
                    }
                }
                if(flag)
                {
                    tmpcontent = fillcontent(recipes[i]["img"], recipes[i]["name"], recipes[i]["difficulty"], recipes[i]["time"], recipes[i]["ingredients"].length-cnt)
                    $("#recipes").append(tmpcontent);
                }
                else
                {
                    continue;
                }
                    
            }
        }
    }
    
    function filterEvent() {
        $("#filterBtn").click(function(){
            $("#filtertab").show('slow');
            $("#greycover").show();
            //$("#recipeList").css('opacity', '0.4');
        });
        $("#closeBtn").click(function(){
            $("#filtertab").hide('slow');
            $("#greycover").hide();
            //$("#recipeList").css('opacity', '1');
        });
    }
    
    filterEvent();
    getParameter();
    showTitle();
    showinit();
});