var breath = 25;
var air = 0;
var AirPerSecond = 0;
var breathPerSecond = 0.2;
var airPerClick = 1;

$(".maincloud").click(()=> {
  air = airPerClick + air
  showingAir = Math.round(air*10) / 10
  $(".howmuchair").html(showingAir + ' air ');
});

$(".personBreathing ").click(()=>{
  if (air >= Math.round(breath)) {
    air = air - Math.round(breath)
    AirPerSecond = AirPerSecond + breathPerSecond
    showingAir = Math.round(air*10) / 10
    $(".howmuchair").html(showingAir + ' air ');
    breath = breath * 1.1
   $('#airCost').text(Math.round(breath) + ' air ');
   console.log('click');
  } 
});


setInterval(function() {
  air=AirPerSecond+air
  showingAir = Math.round(air*10) / 10
  $(".howmuchair").html(showingAir + ' air ');
},1000)
