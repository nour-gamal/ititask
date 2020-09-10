$(function () {
  var flag = 0;
  $("#barButton").on("click", function () {
    if (flag == 0) {
      $("#compressedList").fadeIn(200).removeClass("d-none");
      flag = 1;
    } else {
      $("#compressedList").fadeOut(200);
      flag = 0;
    }
  });
});

var f = 0;
$("#x").on("click", function () {
  if (f == 0) {
    $(".slide2").css("marginLeft", "0").css("display", "block");
    $(".slide3").css("marginLeft", "-100vw").css("display", "none");
    $(".slide4").css("marginLeft", "-200vw").css("display", "none");
    $(".slide1").css("marginLeft", "-300vw").css("display", "none");
    f = 1;
  } else if (f == 1) {
    $(".slide3").css("marginLeft", "0").css("display", "block");
    $(".slide4").css("marginLeft", "-100vw").css("display", "none");
    $(".slide1").css("marginLeft", "-200vw").css("display", "none");
    $(".slide2").css("marginLeft", "-300vw").css("display", "none");
    f = 2;
  } else if (f == 2) {
    $(".slide4").css("marginLeft", "0").css("display", "block");
    $(".slide1").css("marginLeft", "-100vw").css("display", "none");
    $(".slide2").css("marginLeft", "-200vw").css("display", "none");
    $(".slide3").css("marginLeft", "-300vw").css("display", "none");
    f = 3;
  } else {
    $(".slide1").css("marginLeft", "0").css("display", "block");
    $(".slide2").css("marginLeft", "-100vw").css("display", "none");
    $(".slide3").css("marginLeft", "-200vw").css("display", "none");
    $(".slide4").css("marginLeft", "-300vw").css("display", "none");
    f = 0;
  }
});
