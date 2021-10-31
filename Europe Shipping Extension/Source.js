//By: Ignas Mikolaitis
//Website: ignuxas.com

function getthing()
{
    var ship = ["SPAIN", "Poland", "France", "Czech Republic", "Italy", "GERMANY", "DE", "Belgium"];
    var countrys = document.querySelectorAll('.sku-property-item')
    for(var i = 0; i < ship.length; i++){
        for(var j = 0; j < countrys.length; j++){
            var isEU = countrys[j].firstChild.innerHTML.includes(ship[i]);
            if(isEU == true){
                countrys[j].style.backgroundColor="green";
                countrys[j].firstChild.firstChild.style.color="white";
            }
        }
    }
}
getthing()
