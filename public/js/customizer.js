// New Function To Change SVG Color

const changeColor = () => {
  $(".pallete-item").on("click", function () {
    let firstDivColor = $(this).children().css("backgroundColor");
    $(".svgBox .st0")[0].style.fill = firstDivColor;
  });

  $(".pallete-item-2").on("click", function () {
    let firstDivColor = $(this).children().css("backgroundColor");
    $(".svgBox .st1")[0].style.fill = firstDivColor;
  });

  $(".pallete-item-3").on("click", function () {
    let firstDivColor = $(this).children().css("backgroundColor");
    $(".svgBox .st2")[0].style.fill = firstDivColor;
  });

  $(".pallete-item-4").on("click", function () {
    let firstDivColor = $(this).children().css("backgroundColor");
    $(".svgBox .st3")[0].style.fill = firstDivColor;
  });
};

changeColor();

















$(".list-unstyled-option").on("click", ".init", function () {
  $(this).closest(".list-unstyled-option").children("li:not(.init)").toggle();
});

var allOptions = $(".list-unstyled-option").children("li:not(.init)");
$(".list-unstyled-option").on("click", "li:not(.init)", function () {
  allOptions.removeClass("selected");
  $(this).addClass("selected");
  $(".list-unstyled-option").children(".init").html($(this).html());
  allOptions.toggle();
});

$(".option2").on("click", function () {
  $(".yarn2").css({ display: "block" });
  $(".yarn1").css({ display: "none" });
  $(".yarn3").css({ display: "none" });
});
$(".option1").on("click", function () {
  $(".yarn2").css({ display: "none" });
  $(".yarn1").css({ display: "block" });
  $(".yarn3").css({ display: "none" });
});
$(".option3").on("click", function () {
  $(".yarn2").css({ display: "none" });
  $(".yarn1").css({ display: "none" });
  $(".yarn3").css({ display: "block" });
});

// For Module Two
$(".option22").on("click", function () {
  $(".yarn2_module2").css({ display: "block" });
  $(".yarn1_module2").css({ display: "none" });
  $(".yarn3_module2").css({ display: "none" });
});
$(".option33").on("click", function () {
  $(".yarn2_module2").css({ display: "none" });
  $(".yarn1_module2").css({ display: "none" });
  $(".yarn3_module2").css({ display: "block" });
});
$(".option11").on("click", function () {
  $(".yarn2_module2").css({ display: "none" });
  $(".yarn1_module2").css({ display: "block" });
  $(".yarn3_module2").css({ display: "none" });
});
// For Module Three
$(".option222").on("click", function () {
  $(".yarn2_module3").css({ display: "block" });
  $(".yarn1_module3").css({ display: "none" });
  $(".yarn3_module3").css({ display: "none" });
});
$(".option333").on("click", function () {
  $(".yarn2_module3").css({ display: "none" });
  $(".yarn1_module3").css({ display: "none" });
  $(".yarn3_module3").css({ display: "block" });
});
$(".option111").on("click", function () {
  $(".yarn2_module3").css({ display: "none" });
  $(".yarn1_module3").css({ display: "block" });
  $(".yarn3_module3").css({ display: "none" });
});
// For Module Four
$(".option222").on("click", function () {
  $(".yarn2_module3").css({ display: "block" });
  $(".yarn1_module3").css({ display: "none" });
  $(".yarn3_module3").css({ display: "none" });
});
$(".option333").on("click", function () {
  $(".yarn2_module3").css({ display: "none" });
  $(".yarn1_module3").css({ display: "none" });
  $(".yarn3_module3").css({ display: "block" });
});
$(".option1111").on("click", function () {
  $(".yarn2_module3").css({ display: "none" });
  $(".yarn1_module3").css({ display: "block" });
  $(".yarn3_module3").css({ display: "none" });
});
