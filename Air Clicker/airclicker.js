var breath = 25;
var air = 0;
$(".maincloud").click(()=> {
  air++;
  $(".howmuchair").html(air + ' air ');
});

$(".personBreathing ").click(()=>{
   breath += breath;
  $('#airCost').text(breath + ' air ');
  console.log('click');
});
