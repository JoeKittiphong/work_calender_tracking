var toDay = new Date("2018-10-1");
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// document.getElementById('tr_11').innerHTML= days[toDay.getDay()];
// document.getElementById('tr_12').innerHTML= days[toDay.getDay()+1];
testDay();
function testDay(){
    var thisDay = toDay.getDate();
    var tr1
    var tr2
    switch(toDay.getDay()){
        case 0:
        document.getElementById('tr_11').innerHTML= thisDay
        break;

        case 1:
        document.getElementById('tr_12').innerHTML= thisDay
        break;

        case 2:
        document.getElementById('tr_13').innerHTML= thisDay
        break;

        case 3:
        document.getElementById('tr_14').innerHTML= thisDay
        break;

        case 4:
        document.getElementById('tr_15').innerHTML= thisDay
        break;

        case 5:
        document.getElementById('tr_16').innerHTML= thisDay
        break;

        case 6:
        document.getElementById('tr_17').innerHTML= thisDay
        break;
    }
}
function addDate(num1, num2){
    var run = 0
    for(i = num1; i<7; i++){
        for(i = num2; i<=7; i++){
            run ++
            document.getElementById('tr_'+num1+''+num2).innerHTML=toDay.getDate()+run
            console.log(toDay.getDate()+run)
        }
    }
}