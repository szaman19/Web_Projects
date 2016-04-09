
function kelvinToCel(temp){
  return (temp - 273);
}
function kelvinToFahrenheit(temp){
  var cels = kelvinToCel(temp);
  return (cels*(1.8)) + 32;
}
$(document).ready(function(){
  $('#toggleButton').click(function(){
    var tempString = $('#kelvin').text();
    var tempInt = parseInt(tempString);
    $('#Celsius').text(kelvinToCel(tempInt));
    $('#Fahrenheit').text(kelvinToFahrenheit(tempInt));
    if($('#Fahrenheit').css('display') == 'none'){
      $('#Celsius').fadeToggle(1000,"swing");
      $('#Fahrenheit').delay(1000).fadeToggle(1000,"swing");
    }
    if($('#Celsius').css('display')=='none'){
      $('#Fahrenheit').fadeToggle(1000,"swing");
      $('#Celsius').delay(1000).fadeToggle(1000,"swing");
    }
  });
});
