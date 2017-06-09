// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

$( document ).ready(function() {
    var recipe_table = recipes;
    
    function getParameter() {
        var parameters = location.search.substring(1).split("&");
        if(parameters[0]!="")
        {
            menu = parameters[0].split("=")[1];
            ingredients = parameters[1].split("=")[1].split(',');
        }
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
    
    function fillcontent(img, name, difficulty, time, needigr, url) {
        var difimg;
        if(difficulty == 0)
            difimg = "Easy";
        else if(difficulty == 1)
            difimg = "Normal";
        else
            difimg = "Hard";
        
        content = '<a href="'+'../hifi/'+url+'"><div class="recipeBox"><div class="recipeLink"><div class="option1">'+ difimg +'</div><div class="option2">' + time + ' MIN.</div><div class="option3">+' + needigr + ' ING. </div><div class="recipeImg"><img src="' + img + '"></div><div class="recipeTitle"><div class="recipeName">' + name + '</div></div></div><div class="container-19"></div></div></a>'
        
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
        var exist;
        
        for(var i=0; i<recipes.length; i++)
        {
            flag = 0;
            tmpcnt = "";
            cnt = 0;
            if(recipes[i]["menu"] == menu)
            {
                for(var j=0; j<recipes[i]["ingredients"].length; j++)
                {
                    for(var k=0; k<ingredients.length;k++)
                    {
                        if(ingredients[k]==recipes[i]["ingredients"][j])
                        {
                            flag = 1;
                            cnt ++;
                        }
                    }
                }
                if(flag && cnt == ingredients.length)
                {
                    tmpcontent = fillcontent(recipes[i]["img"], recipes[i]["name"], recipes[i]["difficulty"], recipes[i]["time"], recipes[i]["ingredients"].length-cnt, recipes[i]["url"]);
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
            $("#filtertab").show('fast');
            $("#greycover").show();
            //$("#recipeList").css('opacity', '0.4');
        });
        $("#closeBtn").click(function(){
            $("#filtertab").hide('fast');
            $("#greycover").hide();
            //$("#recipeList").css('opacity', '1');
        });
    }
    
    function makedifslider() {
        //var mySwiper = new Swiper('.swiper-container');
    
        var ticks = ['Easy', 'Normal', 'Hard'];

        var slider = $("#difslider").slider({
            /*value: mySwiper.activeIndex,*/
            range:true,
            min:0,
            max: ticks.length,
            values: [0,3],
            start: function(event, ui) {
            },/*
            change: function(event, ui) {
                mySwiper.slideTo(ui.value);
            },*/
        });

        $(ticks).each(function(i) {
            var tick = $('<div class="tick ui-widget-content">' + this + '</div>').appendTo(slider);
            tick.css({
                left: (100 / ticks.length * i) + '%',
                width: (100 / ticks.length) + '%'
            });
    })
    $("#difslider .ui-slider-range").css('background','#109E92');
    slider.find(".tick:first").css("border-left", "none");
    }
    
    function maketimeslider() {
        //var mySwiper = new Swiper('.swiper-container');
    
        var ticks = ['0', '5', '10', '15', '20', '25', '30'];

        var slider = $("#timeslider").slider({
            /*value: mySwiper.activeIndex,*/
            range:true,
            min:0,
            max: ticks.length,
            values: [0,7],
            start: function(event, ui) {
            },/*
            change: function(event, ui) {
                mySwiper.slideTo(ui.value);
            },*/
        });

        $(ticks).each(function(i) {
            var tick = $('<div class="tick ui-widget-content">' + this + '</div>').appendTo(slider);
            tick.css({
                left: (100 / ticks.length * i) + '%',
                width: (100 / ticks.length) + '%'
            });
    })

    $("#timeslider .ui-slider-range").css('background','#109E92');
        
    slider.find(".tick:first").css("border-left", "none");
    }
    
    function makeinglider() {
    
        var ticks = ['1', '2', '3', '4', '5', '+6'];

        var slider = $("#ingslider").slider({
            /*value: mySwiper.activeIndex,*/
            range:true,
            min:0,
            max: ticks.length,
            values: [0,6],
            start: function(event, ui) {
            },
//            change: function(event, ui) {
//                $(this).value=ui.value;
//            },
        });

        $(ticks).each(function(i) {
            var tick = $('<div class="tick ui-widget-content">' + this + '</div>').appendTo(slider);
            tick.css({
                left: (100 / ticks.length * i) + '%',
                width: (100 / ticks.length) + '%'
            });
    })
    $("#ingslider .ui-slider-range").css('background','#109E92');
    slider.find(".tick:first").css("border-left", "none");
    }    
    
    function submitEvent(){
        $("#subBtn").click(function(){
            $("#filtertab").hide('slow');
            $("#greycover").hide();
            
            var dm = $("#difslider").slider("values")[0];
            var dM = $("#difslider").slider("values")[1]-1;
            var tm = ($("#timeslider").slider("values")[0])*5;
            var tM = ($("#timeslider").slider("values")[1]-1)*5;
            var im = $("#ingslider").slider("values")[0];
            var iM = $("#ingslider").slider("values")[1]-1;
            
            if (iM==5)
                iM=9999;
            $("#recipes").html("")
            var tmpcontent = "";
            var cnt;
            var flag;
            var time;
            var ingredient;
            var difficulty;
            var exist;

            for(var i=0; i<recipes.length; i++)
            {
                flag = 0;
                tmpcnt = "";
                cnt = 0;
                if(recipes[i]["menu"] == menu)
                {
                    for(var j=0; j<recipes[i]["ingredients"].length; j++)
                    {
                        for(var k=0; k<ingredients.length;k++)
                        {
                            if(ingredients[k]==recipes[i]["ingredients"][j])
                            {
                                flag = 1;
                                cnt ++;
                            }
                        }
                    }
                    
                    if(flag && cnt == ingredients.length && recipes[i]["time"]>=tm && recipes[i]["time"]<=tM && recipes[i]["difficulty"]>=dm && recipes[i]["difficulty"]<=dM && (recipes[i]["ingredients"].length-cnt)>=im && (recipes[i]["ingredients"].length-cnt)<=iM)
                    {
                        tmpcontent = fillcontent(recipes[i]["img"], recipes[i]["name"], recipes[i]["difficulty"], recipes[i]["time"], recipes[i]["ingredients"].length-cnt, recipes[i]["url"]);
                        $("#recipes").append(tmpcontent);
                    }
                    else
                    {
                        continue;
                    }

                }
            }     
        });
    }
    
    function resetEvent()
    {
        $("#resetBtn").click(function(){
            $("#filtertab").hide('slow');
            $("#greycover").hide();
            $("#difslider").slider("values", [0,3]);
            $("#timeslider").slider("values", [0,6]);
            $("#ingslider").slider("values", [0,7]);
            showinit();
        });
    }
    
//    function backEvent()
//    {
//        $("#backward").click(function(){
//            window.history.back();
//        });
//	};
    

    filterEvent();
    getParameter();
    showTitle();
    showinit();
    makedifslider();
    maketimeslider();
    makeinglider();
    submitEvent();
    resetEvent();
    backEvent();
});