$(document).ready(function(){
    let result = JSON.parse(localStorage.getItem('result'));
    $("#showResult").html(result.join('<br><br>'));
})