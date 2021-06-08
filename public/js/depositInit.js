//===== To DO List Add Task Field =====//
$(".to-do-tp > a").on("click", function () {
    $(this).next("div.add-tsk").slideToggle();
    return false;
});

//===== To Do List =====//
$(".td-lst > li").on("click", function () {
    $(this).toggleClass("completed");
    return false;
});

//===== To Do List Deleted =====//
$(".td-lst > li > a").on("click", function () {
    $(this).parent("li").slideUp();
    return false;
});

$(".add-tsk form > button").on("click", function () {
    var task_list = $("ul.td-lst");
    var task_item = $(".add-tsk form > input").val();
    var date = new Date();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var current_date = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
    if (task_item !== "" && task_item !== "undefined") {
        $(task_list).prepend("<li><h5>" + task_item + '</h5> <span><i class="ion-ios-stopwatch"></i>' + current_date + '</span> <a href="#" title=""><i class="ion-android-delete"></i></a></li>');
        $(".td-lst > li").on("click", function () {
            $(this).toggleClass("active");
        });
        $(".add-tsk form > input").addClass("null");
        $(".add-tsk form > input").val("");
        $(".add-tsk form > input").focus();
        var attribute = $("ul.td-lst").children("li").eq(0).children("i");
        return false;
    }
});

//===== Circliful =====//
if ($.isFunction($.fn.circliful)) {
    $("#circl-prg").circliful({
        animation: 1,
        animationStep: 3,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 5,
        percent: 66,
        textSize: 35,
        foregroundColor: "#50b8aa",
        backgroundColor: "#96d5f7",
        textStyle: "font-size: 20px;",
        textColor: "#555555",
    });
}

$(document).ready(function () {
    "use strict";

    //===== Accordion =====//
    $("#acordn .acrdn-cnt").hide();
    $("#acordn h4:first").addClass("active").next().slideDown(200).parent().addClass("activate");
    $("#acordn h4").on("click", function () {
        if ($(this).next().is(":hidden")) {
            $("#acordn h4").removeClass("active").next().slideUp(200).parent().removeClass("activate");
            $(this).toggleClass("active").next().slideDown(200).parent().toggleClass("activate");
        }
    });

    $("#acordn2 .acrdn-cnt").hide();
    $("#acordn2 h4:first").addClass("active").next().slideDown(200).parent().addClass("activate");
    $("#acordn2 h4").on("click", function () {
        if ($(this).next().is(":hidden")) {
            $("#acordn2 h4").removeClass("active").next().slideUp(200).parent().removeClass("activate");
            $(this).toggleClass("active").next().slideDown(200).parent().toggleClass("activate");
        }
    });
});

let clipBoard1 = new ClipboardJS(".btn");
let clipBoard2 = new ClipboardJS(".btn2");