//By: Ignas Mikolaitis
//Website: ignuxas.com

function getthing()
{
var ship = ["SPAIN", "Poland", "France", "Czech Republic", "Italy", "GERMANY", "DE"];
var countrys = document.querySelectorAll('.sku-property-item')
for(var i = 0; i < ship.length; i++){
    for(var j = 0; j < countrys.length; j++){
        var yeet = countrys[j].firstChild.firstChild.innerHTML.includes(ship[i]);
        if(yeet == true){
            countrys[j].style.backgroundColor="green";
        }
    }
    }
}
getthing()