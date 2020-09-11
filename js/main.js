$(function () {
  /*Handling the compressed list button */
  $("#barButton").on("click", function () {
    $("#compressedList").fadeToggle(200).toggleClass("d-none");
  });
  var loginflag = 0;
  /*Handling the login page */
  $("#compressedList > li:first-of-type").on("click", function () {
    if (loginflag == 0) {
      $("#slider").fadeOut(10);
      $(this).css("color", "#bf272d");
      $("#loginPage").fadeIn(500).removeClass("d-none");
      $("#warning").html(" ");
    }
  });

  /*Handling student login */
  $("#loginButton").on("click", function (e) {
    e.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();
    var name = email.split("@");
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (result) {
        loginflag = 1;
        $("#warning")
          .html("Wellcome " + email)
          .css("color", "green");
        $("#loginPage").fadeOut(200);
        $("#dashboard").fadeIn(200);
        $("#wellcomeDashboard")
          .html(name[0] + "'s " + "Dashboard")
          .css("color", "#bf272d");
        $("#compressedList>li:first-of-type").on("click", function () {});
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        $("#warning").html(errorMessage).css("color", "#bf272d");
      });
  });

  /*Handling logout button */
  $("#logout").on("click", function () {
    $("#slider").fadeIn(200);
    $("#dashboard").fadeOut(100);
    $("#compressedList > li:first-of-type").css("color", "#1f1f1f");

    loginflag = 0;
  });
});
