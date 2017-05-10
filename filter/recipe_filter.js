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
            
            newCell1.innerHTML = recipes[i]["name"];
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
        var Btn = document.getElementById("bb")
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
    
    printrecipes();
    open();
    close();
    dif();
});