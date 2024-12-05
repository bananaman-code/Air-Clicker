var tree = 25;
var air = 0;
var AirPerSecond = 0;
var treePerSecond = 0.2;
var airPerClick = 1;
var breath = 110;
var breathPerSecond = 1;

$(".maincloud").click(()=> {
  air = airPerClick + air
  showingAir = Math.round(air*10) / 10
  $(".howmuchair").html(showingAir + ' air ');
});

$(".palmTree ").click(()=>{
  if (air >= Math.round(tree)) {
    air = air - Math.round(tree)
    AirPerSecond = AirPerSecond + treePerSecond
    showingAir = Math.round(air*10) / 10
    $(".howmuchair").html(showingAir + ' air ');
    tree = tree * 1.3
   $('#treeCost').text(Math.round(tree) + ' air ');
   console.log('click');
  }
  else {
    alert("Not enough air!")
  } 
});

$(".personBreathing").click(()=>{
  if (air >= Math.round(breath)) {
    air = air - Math.round(breath)
    AirPerSecond = AirPerSecond + breathPerSecond
    showingAir = Math.round(air*10) / 10
    $(".howmuchair").html(showingAir + ' air ');
    breath = breath * 1.3
   $('#breathCost').text(Math.round(breath) + ' air ');
   console.log('click');
  }
  else {
    alert("Not enough air!")
  } 
});

setInterval(function() {
  air=AirPerSecond+air
  showingAir = Math.round(air*10) / 10
  $(".howmuchair").html(showingAir + ' air ');
  $(".howMuchAps").html(Math.round(AirPerSecond*10) / 10 + " Air Per Second")
},1000)
