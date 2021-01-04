function loading(){
    $("body").width();
    var _html = "<table cellspacing=0>";
    for (let i = 0; i < Math.floor($("body").height()/14); i++) {
        _html += "<tr>";
        for (let n = 0; n < Math.floor($("body").width()/14); n++) {
            _html += "<td>"+byte[Math.floor(Math.random()*93)]+"</td>";
        }
        _html += "</tr>";
    }
    _html += "</table>"
    $("body").append(_html);
    $("table").css({"margin-top":0-($("table").height()/2)+"px"});
}
function play(arr = [],i = 0){
    var temp = i;
    setTimeout(function(){
        if(i < arr.length){
            $("table tr:eq("+arr[i][0]+") td:eq("+arr[i][1]+")").animate({
                "opacity": "1"
            },500)
            setTimeout(function(){
                $("table tr:eq("+arr[temp][0]+") td:eq("+arr[temp][1]+")").text(byte[Math.floor(Math.random()*93)]);
                $("table tr:eq("+arr[temp][0]+") td:eq("+arr[temp][1]+")").animate({
                    "opacity": "0"
                },1000)
            },500)
            i++;
            play(arr,i);
        }
    },60)
}
function setbyte(){
    let arr = [];
    let ABSCISSA = Math.floor(Math.random()*$("table tr:eq(0) > td").length);
    let arrCoordinates = Math.floor(Math.random()*$("table tr").length/2)-1;
    let arrLength = $("table tr").length-arrCoordinates;
    for (let i = 0; i < arrLength; i++) {
        arr[i] = [(arrCoordinates+=1),ABSCISSA];
    }
    play(arr);
}
function openbyte(){
    setTimeout(() => {
        for (let i = 0; i < 10; i++) {
            setbyte();
        }
        openbyte();
    }, 2500);
}