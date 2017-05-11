// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

$( document ).ready(function() {
    //ideas=[];
    var recipe_table = recipes;
    
    function printrecipes(){
        var printTable = document.getElementById("resultTable");
        
        for(var i=0;i<recipes.length;i++){
            var newRow = printTable.insertRow(1);
            var newCell1 = newRow.insertCell(0);
            var newCell2 = newRow.insertCell(1);
            var newCell3 = newRow.insertCell(2);
            var newCell4 = newRow.insertCell(3);
            
            newCell1.innerHTML = "<a href=\"../hifi/index_backup.html\">"+recipes[i]["name"]+"</a>";
            newCell2.innerHTML = recipes[i]["time"];
            newCell3.innerHTML = recipes[i]["difficulty"];
            newCell4.innerHTML = recipes[i]["ingredient"];
        }
    }

    function open() {
        var openBtn = document.getElementById("openBtn");
        openBtn.onclick = function() {
            document.getElementById("mySidenav").style.width = "40%";
        }
    }
    
    function close() {
        var closeBtn = document.getElementById("closeBtn");
        closeBtn.onclick = function() {
            document.getElementById("mySidenav").style.width = "0";
        }
    }
    
    function dif(){
        var difBtn = document.getElementsByClassName("difbtns");
        var Btn = document.getElementById("filbtn")
        Btn.onclick = function(){
            for(var i=0;i<difBtn.length;i++)
            {
                if(difBtn[i].checked)
                {
                    console.log(i);
                }
            }
        }
    }
    
    function tim(){
        var Btn = document.getElementById("fader");
        Btn.oninput = function(e){
            var v = document.getElementById("volume");
            v.value = e.target.value;
            v.style.color="white";
        }
    }

    function ing(){
        var Btn = document.getElementById("fader2");
        Btn.oninput = function(e){
            var v = document.getElementById("volume2");
            v.value = e.target.value;
            v.style.color="white";
        }
    }    
    
    function showall(){
        var Btn = document.getElementById("allbtn");
        Btn.onclick = function() {
            document.getElementById("mySidenav").style.width = "0";
            var printTable = document.getElementById("resultTable");

            var numRows = printTable.rows.length;

            for(var i=0; i<numRows-1;i++){
                if(printTable.rows.length>1){
                    printTable.deleteRow(1);
                }
            }
            
            for(var i=0;i<recipes.length;i++){
                var newRow = printTable.insertRow(1);
                var newCell1 = newRow.insertCell(0);
                var newCell2 = newRow.insertCell(1);
                var newCell3 = newRow.insertCell(2);
                var newCell4 = newRow.insertCell(3);

                newCell1.innerHTML = "<a href=\"../hifi/index_backup.html\">"+recipes[i]["name"]+"</a>";
                newCell2.innerHTML = recipes[i]["time"];
                newCell3.innerHTML = recipes[i]["difficulty"];
                newCell4.innerHTML = recipes[i]["ingredient"];
            }
        }
    }
    
    function showfil(){
        var Btn = document.getElementById("filbtn");
        Btn.onclick = function(){
            
            document.getElementById("mySidenav").style.width = "0";
            var printTable = document.getElementById("resultTable");

            var numRows = printTable.rows.length;

            for(var i=0; i<numRows-1;i++){
                if(printTable.rows.length>1){
                    printTable.deleteRow(1);
                }
            }
            
            var difBtn = document.getElementsByClassName("difbtns");
            console.log(difBtn[0].checked);
            console.log(difBtn[1].checked);
            console.log(difBtn[2].checked);
            var maxtim = document.getElementById("fader").value;
            var maxing = document.getElementById("fader2").value;
            console.log(maxing);
            console.log(maxtim);
            for(var i = 0 ; i<recipes.length ; i++){
                console.log(recipes[i]["name"])
                console.log(recipes[i]["difficulty"])
                console.log(recipes[i]["time"])
                console.log(recipes[i]["ingredient"])
                if((difBtn[recipes[i]["difficulty"]].checked) && (recipes[i]["time"]<=maxtim) && (recipes[i]["ingredient"]<=maxing))
                {
                    var newRow = printTable.insertRow(1);
                    var newCell1 = newRow.insertCell(0);
                    var newCell2 = newRow.insertCell(1);
                    var newCell3 = newRow.insertCell(2);
                    var newCell4 = newRow.insertCell(3);

                    newCell1.innerHTML = "<a href=\"../hifi/index_backup.html\">"+recipes[i]["name"]+"</a>";
                    newCell2.innerHTML = recipes[i]["time"];
                    newCell3.innerHTML = recipes[i]["difficulty"];
                    newCell4.innerHTML = recipes[i]["ingredient"];                        
                }
            }
        }
    }
    
    printrecipes();
    open();
    close();
    dif();
    tim();
    ing();
    showall();
    showfil();
});