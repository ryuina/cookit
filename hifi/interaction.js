// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

$( document ).ready(function() {
    
    $(document).mousemove(function(event){
    var element = document.getElementsByClassName("swiper-slide-active");
    if(element != undefined) {
        var id = element[0].id - 1;
        $(".recipe_step").text("Step "+id);
    }
});
    
    $(document).on("swipe", function(event){
    var element = document.getElementsByClassName("swiper-slide-active");
    if(element != undefined) {
        var id = element[0].id - 1;
        $(".recipe_step").text("Step "+id);
    }
});
    
    
    var mySwiper = new Swiper('.swiper-container');
    
    var ticks = ['1', '2', '3', '4', '5', '6', '7'];

    var slider = $("#slider").slider({
        range: "min",
        value: mySwiper.activeIndex,
        min:0,
        max: ticks.length,
        start: function(event, ui) {
            event.originalEvent.type == "mousedown" && $(this).addClass("ui-slider-mousesliding");
        },
        change: function(event, ui) {
            mySwiper.slideTo(ui.value);
        },
    });



    
    $(document).mousemove(function(event){
        var element = document.getElementsByClassName("swiper-slide-active");
        if(element != undefined) {
            var id = element[0].id;
//            console.log(id);
            slider.slider( "value", id-1 );
        }
    });

    $(document).on("Swipe",function(event){
        var element = document.getElementsByClassName("swiper-slide-active");
        if(element != undefined) {
            var id = element[0].id;
//            console.log(id);
            slider.slider( "value", id-1 );
        }
    });
    
    var peperoncinostatus = 0;
    var saltstatus = 0;
    var phedelinistatus = 0;
    var garlicstatus = 0;
    var panstatus = 0;
    var seasoningstatus = 0;
    $("#peperoncino.substtab").hide();
    $("#salt.substtab").hide();
    $("#phedelini.substtab").hide();
    $("#garlic.helptab").hide();
    $("#pan.substtab").hide();
    $("#seasoning.substtab").hide();
    
    $("#peperoncino.subst").click(function(){
        console.log(peperoncinostatus);
        if (peperoncinostatus == 0){
            $("#peperoncino.substtab").show();
            peperoncinostatus = 1;
        }
        else{
            $("#peperoncino.substtab").hide();
            peperoncinostatus = 0;
        }
    });
                    
                    $("#salt.subst").click(function(){
                                                  console.log(saltstatus);
                                                  if (saltstatus == 0){
                                                  $("#salt.substtab").show();
                                                  saltstatus = 1;
                                                  }
                                                  else{
                                                  $("#salt.substtab").hide();
                                                  saltstatus = 0;
                                                  }
                                                  });
                    
                    $("#phedelini.subst").click(function(){
                                                  console.log(phedelinistatus);
                                                  if (phedelinistatus == 0){
                                                  $("#phedelini.substtab").show();
                                                  phedelinistatus = 1;
                                                  }
                                                  else{
                                                  $("#phedelini.substtab").hide();
                                                  phedelinistatus = 0;
                                                  }
                                                  });
                    
                    $("#garlic.help").click(function(){
                                                  console.log(garlicstatus);
                                                  if (garlicstatus == 0){
                                                  $("#garlic.helptab").show();
                                                  garlicstatus = 1;
                                                  }
                                                  else{
                                                  $("#garlic.helptab").hide();
                                                  garlicstatus = 0;
                                                  }
                                                  });
                    
                    $("#pan.subst").click(function(){
                                                  console.log(panstatus);
                                                  if (panstatus == 0){
                                                  $("#pan.substtab").show();
                                                  panstatus = 1;
                                                  }
                                                  else{
                                                  $("#pan.substtab").hide();
                                                  panstatus = 0;
                                                  }
                                                  });
                    
                    $("#seasoning.subst").click(function(){
                                                  console.log(seasoningstatus);
                                                  if (seasoningstatus == 0){
                                                  $("#seasoning.substtab").show();
                                                  seasoningstatus = 1;
                                                  }
                                                  else{
                                                  $("#seasoning.substtab").hide();
                                                  seasoningstatus = 0;
                                                  }
                                        	  });
    $("back_button").click(function (){
       window.history.back(); 
    });
});