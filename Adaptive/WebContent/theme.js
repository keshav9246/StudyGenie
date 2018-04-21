
$(document).ready(function() {


(function() {
	console.log("Inside login");
  var $login = $(".login"),
    $cancel = $("[data-cancel]"),
    $loginform = $("#login-form"),
    $navigation = $("#navigation"),
    $site = $("#site"),
    $menu = $("#menu");

  $login.on("click", function() {
	  console.log("Inside Click");
    var $this = $(this);
    if ($this.hasClass("active")) {
      $this.removeClass("active");
    } else {
      $this.addClass("active");
      $loginform.addClass("slide-right");
    }
  });

  $cancel.on("click", function(e) {
	  console.log("Inside Cancel");
    e.preventDefault();
    if ($login.hasClass("active")) {
      $login.removeClass("active");
      $loginform.removeClass("slide-right");
    }
  });
}.call(this));

(function() {
	console.log("Inside menu");
  var $menu = $("#menu"),
    $navigation = $("#navigation"),
    $loginform = $("#login-form"),
    $site = $("#site");

  $menu.on("click", function() {
    var $this = $(this);

    if ($this.hasClass("active")) {
    	console.log("Inside if");
      $this.removeClass("active");
      $navigation.removeClass("slide-right");
      $loginform.removeClass("slide-right");
      $site.removeClass("slide-right");
    } else {
    	console.log("Inside else");
      $this.addClass("active");
      $navigation.addClass("slide-right");
      $site.addClass("slide-right");
    }
  });
}.call(this));

(function() {
	console.log("Inside var");
  var $input = $(".form-input");

  $input.on("focusin", function() {
    var $this = $(this);
    $this.css({
      "padding-left": "8px"
    });
    $this.parent().find("i").fadeOut(250);
  });
  $input.on("focusout", function() {
    var $this = $(this);
    $this.css({
      "padding-left": "45px"
    });
    $this.parent().find("i").fadeIn(250);
  });
}.call(this));

(function() {
	console.log("Inside match");
  $(".three-p > p").matchHeight({
    byRow: true,
    property: "height",
    target: null,
    remove: false
  });
}.call(this));
});